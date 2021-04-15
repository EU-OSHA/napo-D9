/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.napo_theme = {
    attach: function (context, settings) {

    }
  };
  // Pager index
  $('.pagination').each(function () {
    let itemLast = $(this).find('[title="Go to last page"]').length;
    if(itemLast>0){
      $(this).find('[title="Go to last page"]').closest('.page-item').addClass('last');
    }
    let itemFirst = $(this).find('[title="Go to first page"]').length;
    if(itemFirst>0){
      $(this).find('[title="Go to first page"]').closest('.page-item').addClass('first');
    }

    let itemPrev = $(this).find('[title="Go to previous page"]').length;
    if(itemPrev>0){
      $(this).find('[title="Go to previous page"]').closest('.page-item').addClass('prev');
    }
  });

  // Resize Font size
  $('#text_resize_increase').on('click', function() {
    let fontSize = $('html').css('font-size');
    let newFontSize = parseInt(fontSize)+1;

    $('html').css('font-size', newFontSize+'px')
  })

  $('#text_resize_decrease').on('click', function() {
    let fontSize = $('html').css('font-size');
    let newFontSize = parseInt(fontSize)-1;

    $('html').css('font-size', newFontSize+'px')
  })


  // Header behaviour at scroll
  let lastScroll = 0;
  $(window).scroll(function(event){
    let windowScrollTop = $(this).scrollTop();
    if (windowScrollTop > lastScroll){
      if(!$('#header').hasClass('hide-menu')){
        $('#header').stop().removeClass('show-menu').addClass('hide-menu');
      }
    }
    else {
      if(windowScrollTop >= 80){
        if(!$('#header').hasClass('show-menu')){
          $('#header').stop().removeClass('hide-menu').addClass('show-menu');
        }
      }
      else{
        if(!$('#header').hasClass('hide-menu')){
          $('#header').stop().removeClass('show-menu').addClass('hide-menu');
        }
      }
    }
    lastScroll = windowScrollTop;
  });




})(jQuery, Drupal);
