$(document).ready(function() {
$('.down-arrow').click(function() {
$('html, body').animate({
scrollTop: $('.header1').height() 
}, 2000);
});
});


/*function scrollWin() {
    window.scrollBy(0, 500);
}
*/