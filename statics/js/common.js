$(function () {
    GenerateContentList();
    GenerateToc();

    //返回顶部
    var topbtn = document.querySelector('.to-top-btn');
    var topbtn1 = document.querySelector('.to-top');
    topbtn.addEventListener('click', function () {
        topbtn.style.transform = 'translateY(-120vh)';
        topbtn1.style.backgroundPositionX = '-897px';
        setTimeout(function () {
            $("html,body").animate({ scrollTop: "0" }, 500);
            topbtn.style.transform = 'translateY(0)';
            topbtn1.style.backgroundPositionX = '-40px';
        }, 1000);
    });

    //监听滚动条
    $(document).scroll(function () {
        var scroH = document.body.scrollTop || document.documentElement.scrollTop;  //滚动高度
        if (scroH > 160) {
            topbtn.style.display = 'block'
        } else {
            topbtn.style.display = 'none'
        }
    });

    //鼠标点击特效
    var idx = 0;
    $(document).ready(function () {
        $("body").click(function (e) {
            var a = ["奥利给", "GKD", "wdnmd", "114514", "FaQ", "u1s1", "鸡你太美", "lbwnb", "awsl", "滑稽"];
            var $i = $("<span>").text(a[idx]);      //创建一个标签元素
            idx = Math.round(Math.random() * a.length);     //随机文本
            var x = e.clientX,      //鼠标X轴坐标
                y = e.clientY,      //鼠标Y轴坐标
                //随机RGB颜色
                r = Math.random() * 205 + 50,
                g = Math.random() * 205 + 50,
                b = Math.random() * 205 + 50;
            $i.css({    //设置元素的样式
                "z-index": 999999,
                "pointer-events": "none",
                "position": "fixed",
                "top": y - 6,
                "left": x,
                "font-size": "6px",
                "font-weight": "bolder",
                "color": "rgb(" + r + "," + g + "," + b + ")"
            });
            $("body").append($i);       //添加到页面
            $i.animate({        //元素动画
                "top": y - 180,
                "opacity": 0
            }, 1500, function () {
                $i.remove();        //移除元素
            });
        });
    });
});

//pjax异步加载页面
$(document).pjax('a', '.pjax-container', {
    fragment: '.pjax-container',
    scrollTo: 0,
    timeout: 5000
});

//pjax在页面加载完成后执行
$(document).on('pjax:complete', function () {
    GenerateContentList();
    GenerateToc();
});

//在页面执行前进后退事件后执行
/*$(document).on('pjax:popstate', function () {
    GenerateContentList();
    GenerateToc();
});*/
window.onpopstate = function () {
    GenerateContentList();
    GenerateToc();
};

function GenerateContentList() {
    //弹出侧边目录
    $(".aside-btn").on("click", function () {
        $(".aside-btn").toggleClass("active");
        $("main").toggleClass("active");
        $("aside").toggleClass("active");
    });

    // 判断页面是否含有gitalk容器，如果有，则加载gitalk评论系统
    if ($('#gitalk-container').length > 0) {
        var gitalk = new Gitalk({
            clientID: '7ff38d8c3509efdcee12',   // GitHub Application Client ID
            clientSecret: '01c5373a8f0d16232103c1a3fa78cf1700aba622', // GitHub Application Client Secret
            repo: 'T-miracle.github.io',       // 存放评论的仓库
            owner: 'T-miracle',                // 仓库的创建者，
            admin: ['T-miracle'],              // 如果仓库有多个人可以操作，那么在这里以数组形式写出
            id: md5(location.pathname),         // 用于标记评论是哪个页面的，确保唯一，并且长度小于50
        });
        gitalk.render('gitalk-container');      // 渲染Gitalk评论组件
    }

    // 未完成文章点击提示信息
    $('.tip').click(function () {
        top.layer.msg(
            '<svg style="width: 36px;height: 36px" class="icon" aria-hidden="true"><use xlink:href="#icon-biji"></use></svg>文章正在努力编写中...',
            {
                skin: 'layer-skin',
                time: 10000,
                btn: ['明白了']
            })
    });

    //外链网址设置新标签打开
    $('a[href*="http"]').attr("target", "_blank");

    //删除文章h1,h2,h3里的a标签
    var aTag = $('a[href^="#"]');
    for (let i = 0; i < aTag.length; i++) {
        let text = aTag[i].innerHTML;
        text = text.replace('&lt;', '<');
        text = text.replace('&gt;', '>');
        aTag[i].after(text);
        aTag[i].remove();
    }

    //给文章pre和code添加Prism对应的class
    var preTag = $('pre');
    for (let i = 0; i < preTag.length; i++) {
        preTag[i].setAttribute("class", "line-numbers");
    }
    var codeTag = $('code:not([class*=null])');
    for (let i = 0; i < codeTag.length; i++) {
        let className = codeTag[i].getAttribute("class");
        codeTag[i].setAttribute("class", "language-" + className);
    }

    //判断页面是否含有代码块，如果有，则Prism渲染代码块
    if (codeTag.length > 0) {
        Prism.highlightAll();
    }

    //表格响应式
    $('table').wrap('<div class="scroll-x"></div>')
}

function GenerateToc() {
    //判断页面是否含有文章目录容器，如果有，则加载文章目录
    var toc = $("#toc");
    toc.empty();
    if (toc.length > 0) {
        toc.tocify({
            context: 'main',
            selectors: 'h2,h3,h4',
            scrollTo: $('article h1')[0].offsetHeight + 30,
            showAndHide: true,
            smoothScroll: true,
            history: false
        }).data("toc-tocify");
    }
}