$(document).ready(function () {
    $(".smooth").click(function () {
        var href = $(this).attr("href");
        var pos = $(href).offset().top - 40;
        $("html,body").animate({ scrollTop: pos }, 2000);
    });
});