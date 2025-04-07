$(document).ready(function () {
    $('head').prepend('<link rel="shortcut icon" href="https://2013.igem.org/favicon.ico">');
    $('body').prepend('<div id="nav"></div>');
    $('#nav').load('nav.html');
    $('a').each(function () {
        if (!$(this).attr('href').includes("#")) $(this).attr('target', '_blank');
    });
});