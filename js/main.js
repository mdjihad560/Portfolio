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
// $(".menu-toogle a").on('click', function(event){
//    event.preventDefault();
//   $(".portfolio--menu").slideToggle(300)
// });


/*--------------------------------------------------------------
PORTFOLIO LOAD MORE
--------------------------------------------------------------*/
  // $(".portfolio--thumb").slice(0,6).show();
  // $("#load-more").click(function(e){
  //   e.preventDefault();
  //   $(".portfolio--thumb:hidden").slice(0,3).fadeIn("slow");
    
  //   if($(".portfolio--thumb:hidden").length == 0){
  //      $("#load-more").fadeOut("slow");
  //     }
  // });
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


      /*--------------------------------------------------------------
  TWO COLUMN FILTER JS INIT
  ------------------------------------------------------------*/
  var nexto_filter = $('#portfolio--gallery-masonay1');
  if(nexto_filter.is_exist()){
    var $container = $(nexto_filter),
      colWidth = function () {
        var w = $container.width(), 
          columnNum = 1,
          columnWidth = 0;
        if (w > 1200) {
          columnNum  = 3;
        } else if (w > 900) {
          columnNum  = 3;
        } else if (w > 600) {
          columnNum  = 2;
        } else if (w > 450) {
          columnNum  = 1;
        } else if (w > 385) {
          columnNum  = 1;
        }
        columnWidth = Math.floor(w/columnNum);
        $container.find('.portfolio--grid-item').each(function() {
          var $item = $(this),
            multiplier_w = $item.attr('class').match(/portfolio--grid-item-w(\d)/),
            multiplier_h = $item.attr('class').match(/portfolio--grid-item-h(\d)/),
            width = multiplier_w ? columnWidth*multiplier_w[1] : columnWidth,
            height = multiplier_h ? columnWidth*multiplier_h[1]*0.4-12 : columnWidth*0.5;
          $item.css({
            width: width,
            //height: height
          });
        });
        return columnWidth;
      },
      isotope = function () {
        $container.isotope({
          resizable: false,
          itemSelector: '.portfolio--grid-item',
          masonry: {
            columnWidth: colWidth(),
            gutterWidth: 0
          }
        });
      };
    isotope();
    $(window).resize(isotope);
    var $optionSets = $('.portfolio-gallery-menu .option-set'),
        $optionLinks = $optionSets.find('li');
    $optionLinks.click(function(){
    var $this = $(this);
      var $optionSet = $this.parents('.option-set');
      $optionSet.find('.active').removeClass('active');
      $this.addClass('active');
  
      // make option object dynamically, i.e. { filter: '.my-filter-class' }
      var options = {},
          key = $optionSet.attr('data-option-key'),
          value = $this.attr('data-option-value');
      // parse 'false' as false boolean
      value = value === 'false' ? false : value;
      options[ key ] = value;
      if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
        // changes in layout modes need extra logic
        changeLayoutMode( $this, options )
      } else {
        // creativewise, apply new options
        $container.isotope( options );
      }
      return false;
    });
  }
  


}); // End window LODE



})(jQuery);






