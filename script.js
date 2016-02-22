$(document).ready(function() {
$('.down-arrow').click(function() {
$('html, body').animate({
scrollTop: $('.c1').height()-$('.p1').height()
}, 2000);
});
});


/*$(document).ready(function() {
   
    $('#someID').click(function(){
        $('html, body').animate({scrollTop:$(document).height()}, 'slow');
        return false;
    });

});*/
