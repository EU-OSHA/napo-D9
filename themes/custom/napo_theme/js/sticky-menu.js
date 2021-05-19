

jQuery( document ).ready(function($) {

  // Header behaviour at scroll
  let lastScroll = 0;
  let headerHeight= $('#header').outerHeight();
  $(window).scroll(function(event){
    let windowScrollTop = $(this).scrollTop();
    if(windowScrollTop<headerHeight){
      if($('.header_navbar_container').hasClass('show-menu')){
        $('.header_navbar_container').stop().removeClass('show-menu');
      }

    }
    else if (windowScrollTop > lastScroll){
      if(!$('.header_navbar_container').hasClass('hide-menu')){
        $('.header_navbar_container').stop().removeClass('show-menu').addClass('hide-menu');
      }
    }
    else {
      if(windowScrollTop >= 80){
        if(!$('.header_navbar_container').hasClass('show-menu')){
          $('.header_navbar_container').stop().removeClass('hide-menu').addClass('show-menu');
        }
      }
      else{
        if(!$('.header_navbar_container').hasClass('hide-menu')){
          $('.header_navbar_container').stop().removeClass('show-menu').addClass('hide-menu');
        }
      }
    }
    lastScroll = windowScrollTop;
  });

});
