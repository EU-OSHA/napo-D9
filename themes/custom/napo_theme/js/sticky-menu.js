

jQuery( document ).ready(function($) {

  // Header behaviour at scroll
  let lastScroll = 0;
  let headerHeight= $('#header').outerHeight();
  $('#header').css({'min-height':headerHeight});
  $(window).scroll(function(event){
    let windowScrollTop = $(this).scrollTop();
    if(windowScrollTop==0){
      if($('#navbar').hasClass('show-menu')){
        $('#navbar').stop().removeClass('show-menu');
      }
      else if($('#navbar').hasClass('hide-menu')){
        $('#navbar').stop().removeClass('hide-menu');
      }
    }
    if(windowScrollTop<headerHeight){
      if($('#navbar').hasClass('show-menu')){
        $('#navbar').stop().removeClass('show-menu')
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

  /**When width is less than 992px, make the menu clickable**/
  $(".navbar-nav .nav-link.dropdown-toggle").click(function (){
    if(jQuery(window).width()<993){
      $(this).attr("aria-expanded","true");
      $(this).next().toggleClass("show");
      $(this).parent().toggleClass("show");
    }
  });
});
