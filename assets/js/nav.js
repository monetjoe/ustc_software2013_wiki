$(document).ready(function () {
    $('head').prepend('<link rel="shortcut icon" href="https://2013.igem.org/favicon.ico">');
    $('body').prepend('<div id="nav"></div>');
    $('#nav').load('nav.html');
});