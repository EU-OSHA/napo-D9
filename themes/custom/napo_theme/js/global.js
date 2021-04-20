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



  /* Add custom class to facet parent when child is-active */
  $(window).on('load', function() {
    if ($(".facet-active a.is-active")[0]){
      $(".facet-active a.is-active").parent().addClass('active-custom', true);
    }
  });


})(jQuery, Drupal);


