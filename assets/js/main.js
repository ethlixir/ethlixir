jQuery(document).ready(function ($) {
 "use strict";

  // wow js active
  //----------------------------------
  new WOW().init();

  // OnLoad
  //----------------------------------
  // $(window).on('beforeunload', function(){
  //     $(window).scrollTop(0).slow();
  // });


  // SmoothScroll
  //----------------------------------
  $('#header a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
   if ( location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname ) {
     var target = $(this.hash);
     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
     if (target.length) {
       event.preventDefault();
       $('html, body').animate({
         scrollTop: target.offset().top
       }, 1000, function() {
         var $target = $(target);
         $target.focus();
         if ($target.is(":focus")) {
           return false;
         } else {
           $target.attr('tabindex','-1');
           $target.focus();
         };
       });
     }
   }
  });

  // $('body').on('mousewheel', function(e){
  //   if(e.originalEvent.wheelDelta > 0) {
  //     console.log('up 3');
  //     $('.header-notification').css('opacity', '1');
  //   }
  // });

  $(window).scroll(function() {
   if($(window).scrollTop() > 300) {
     $('.header-notification').css('opacity', '1');
   }
  });

  // var lastScroll = 0;
  // $(window).on('scroll', function(){
  //   scrollTop = $(this).scrollTop();
  //   if( scrollTop < lastScroll ) {
  //     $('.header-notification').css('opacity', '1');
  //   }
  //   lastScroll = scrollTop;
  // });

  // $('#menuToggle').click(function() {
  //    lockScroll();
  // });
  // function lockScroll() {
  // 	if ($('body').hasClass('sidebar-active')) {
  // 		$('body').removeClass('sidebar-active');
  // 	} else {
  // 		$('body').addClass('sidebar-active');
  // 	}
  // }

});

// PreLoader Function
//----------------------------------
var loading = document.getElementById('loading');
function pageLoad(){
  loading.style.display = loading.style.display === 'none' ? 'block' : 'none';
}

// Header Animate Function
//----------------------------------

( function( $, window, document, undefined ) {
  'use strict';

  var elSelector = '.header', $element		= $( elSelector );

  if( !$element.length ) return true;

  var elHeight  = 0,
    elTop       = 0,
    $document		= $( document ),
    dHeight			= 0,
    $window			= $( window ),
    wHeight			= 0,
    wScrollCurrent	= 0,
    wScrollBefore	  = 0,
    wScrollDiff     = 0;

  $window.on( 'scroll', function() {
    elHeight		= $element.outerHeight();
    dHeight			= $document.height();
    wHeight			= $window.height();
    wScrollCurrent	= $window.scrollTop();
    wScrollDiff		= wScrollBefore - wScrollCurrent;
    elTop			= parseInt( $element.css( 'top' ) ) + wScrollDiff;

    if( wScrollCurrent <= 0 ) // scrolled to the very top; element sticks to the top
      $element.css( 'top', 0 );

    else if( wScrollDiff > 0 ) // scrolled up; element slides in
      $element.css( 'top', elTop > 0 ? 0 : elTop );

    else if( wScrollDiff < 0 ) // scrolled down
    {
      if( wScrollCurrent + wHeight >= dHeight - elHeight )  // scrolled to the very bottom; element slides in
        $element.css( 'top', ( elTop = wScrollCurrent + wHeight - dHeight ) < 0 ? elTop : 0 );

      else // scrolled down; element slides out
        $element.css( 'top', Math.abs( elTop ) > elHeight ? -elHeight : elTop );
    }

    wScrollBefore = wScrollCurrent;
  });

})( jQuery, window, document );
