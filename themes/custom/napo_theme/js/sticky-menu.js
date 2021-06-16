

jQuery( document ).ready(function($) {

  // Header behaviour at scroll
  let lastScroll = 0;
  let headerHeight= $('#header').outerHeight();
  $('#header').css({'min-height':headerHeight});
  $(window).scroll(function(event){
    let windowScrollTop = $(this).scrollTop();
    if(windowScrollTop<headerHeight){
      if($('#navbar').hasClass('show-menu')){
        $('#navbar').stop().removeClass('show-menu');
      }
    }
    else if (windowScrollTop > lastScroll && windowScrollTop>headerHeight){
      if(!$('#navbar').hasClass('hide-menu')){
        $('#navbar').stop().removeClass('show-menu').addClass('hide-menu');
      }
    }
    else {
      if(windowScrollTop >= 80){
        if(!$('#navbar').hasClass('show-menu')){
          $('#navbar').stop().removeClass('hide-menu').addClass('show-menu');
        }
      }
      else{
        if(!$('#navbar').hasClass('hide-menu')){
          $('#navbar').stop().removeClass('show-menu').addClass('hide-menu');
        }
      }
    }
    lastScroll = windowScrollTop;
  });

});
