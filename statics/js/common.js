$(function () {
    GenerateContentList();

    // pjax异步加载页面
    $(document).pjax('a', '.pjax-container', {
        fragment: '.pjax-container',
        timeout: 5000
    }).on('pjax:complete', function () {
        GenerateContentList();
    });

    //监听后退按钮触发事件，重载js资源
    window.onpopstate = function () {
        GenerateContentList();
    };
});

function GenerateContentList() {
    //弹出侧边目录
    $(".aside-btn").on("click", function () {
        $(".aside-btn").toggleClass("active");
        $("main").toggleClass("active");
        $("aside").toggleClass("active");
    });

    //判断页面是否含有文章目录容器，如果有，则加载文章目录
    if ($("#toc").length > 0) {
        $('#toc').empty();
        $("#toc").tocify({
            context: 'main',
            selectors: 'h2,h3,h4',
            scrollTo: 60,
            showAndHide: true,
            smoothScroll: true,
            history: false
        }).data("toc-tocify");

        prettyPrint();
        $(".optionName").popover({trigger: "hover"});
    }

    //判断页面是否含有代码块，如果有，则Prism渲染代码块
    if ($('code').length > 0) {
        Prism.highlightAll();
    }

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
}