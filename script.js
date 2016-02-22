$(document).ready(function() {
$('.down-arrow').click(function() {
$('html, body').animate({
scrollTop: $('.c1').height() - $('.p1').height()
}, 1000);
});
});

