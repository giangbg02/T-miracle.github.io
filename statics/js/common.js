$(function () {
    GenerateContentList();

    // pjax异步加载页面
    $(document).pjax('a', '.pjax-container', {
        fragment: '.pjax-container',
        timeout: 5000
    }).on('pjax:complete', function () {

    });
});

function GenerateContentList() {
    // 弹出侧边目录
    $(".aside-btn").on("click", function () {
        $(".aside-btn").toggleClass("active");
        $("main").toggleClass("active");
        $("aside").toggleClass("active");
    });
}