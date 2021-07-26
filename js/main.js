(function($) {
"use strict";

/*------------------------------------------------------------------
[Table of contents]

-------------------------------------------------------------------*/

/*--------------------------------------------------------------
CUSTOM PRE DEFINE FUNCTION
------------------------------------------------------------*/
/* is_exist() */
jQuery.fn.is_exist = function(){
  return this.length;
}


$(function(){


  /*--------------------------------------------------------------
OS MENU JS
--------------------------------------------------------------*/

$(".menu-bar").on("click", function () {
    $(".offcanves-menu, .offcanvas-overlay").addClass("active");
});
$(".close, .offcanvas-overlay").on("click", function () {
    $(".offcanves-menu, .offcanvas-overlay").removeClass("active");
});



/*--------------------------------------------------------------
STICKY MENU JS INIT
--------------------------------------------------------------*/
$(window).on('scroll', function(){
  if ($(window).scrollTop() > 50) {
      $('#sticky-menu').addClass('sticky-menu');
  } else {
      $('#sticky-menu').removeClass('sticky-menu');
  }

});



/*--------------------------------------------------------------
PORTFOLIO MENU TOGGLE
--------------------------------------------------------------*/
$(".menu-toogle a").on('click', function(event){
   event.preventDefault();
  $(".portfolio--menu").slideToggle(300)
});


/*--------------------------------------------------------------
PORTFOLIO LOAD MORE
--------------------------------------------------------------*/
  $(".portfolio--thumb").slice(0,6).show();
  $("#load-more").click(function(e){
    e.preventDefault();
    $(".portfolio--thumb:hidden").slice(0,3).fadeIn("slow");
    
    if($(".portfolio--thumb:hidden").length == 0){
       $("#load-more").fadeOut("slow");
      }
  });
/*--------------------------------------------------------------
PORTFOLIO BODY SCROLL
--------------------------------------------------------------*/
if ($('.portfolio--menu a, a.default-btn').length > 0) {
  $('.portfolio--menu a, a.default-btn').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 700, 'linear');
    });
 }

});/*End document ready*/


$(window).on("resize", function(){

}); // end window resize


$(window).on("load" ,function(){


}); // End window LODE



})(jQuery);






