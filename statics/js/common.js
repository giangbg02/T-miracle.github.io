$(function () {
    // pjax异步加载页面
    $(document).pjax('a', '.pjax-container', {
        fragment: '.pjax-container',
        timeout: 5000
    }).on('pjax:complete', function () {

    });
});