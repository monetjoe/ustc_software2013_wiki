$(document).ready(function () {
    $(".button").click(function () {
        var href = $(this).attr("href");
        var pos = $(href).offset().top - 100;
        $("html,body").animate({ scrollTop: pos }, 1500);//the smaller the quicker 
    });
});