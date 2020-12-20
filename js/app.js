// Get the current year for the copyright
$('#year').text(new Date().getFullYear());


// carousel change time 7 sek
$('.carousel').carousel({
  interval: 7000
});


//Change pos/background/padding/add shadow on nav when scroll event happens 
$(function(){
    const navbar = $('.navbar');
	
    $(window).scroll(function(){
        if($(window).scrollTop() <= 40){
            navbar.removeClass('navbar-scroll');
        } else {
            navbar.addClass('navbar-scroll');
        }
    });
});
