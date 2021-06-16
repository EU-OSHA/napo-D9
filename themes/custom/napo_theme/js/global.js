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



  $(window).on('load', function() {

    /* Add custom class to facet parent when child is-active */
    if ($(".facet-active a").hasClass('is-active')){
      $(".facet-active a.is-active").parent().addClass('active-custom', true);
      $("body").addClass('search-facet-active-custom');
    }


    /* Add custom buttom for toggle the search in the responsive header */
    if ($("#block-languagedropdownswitcher")[0]) {
      $('#block-languagedropdownswitcher .lang-dropdown-form').after('<div class="btn-search-custom-mobile"></div>');
    }
    if ($("#block-searchapi")[0]) {
      $('#block-searchapi .form-item-search-api-fulltext').after('<div class="btn-search-custom-mobile"></div>');
    }

  });


  $('#header').on('click','.btn-search-custom-mobile',function(){
    $('#block-searchapi').toggleClass('in');
  });



  /** ACCORDION **/
  jQuery(document).ready(function () {

    function accordionOpen(elem){
      let contentDiv = jQuery(elem).next();
      let parentDiv = jQuery(elem).closest('.accordion-item');

      if ( parentDiv.hasClass("active")) {
        jQuery(contentDiv).slideUp(600).fadeOut(600);
        jQuery(parentDiv).removeClass('active');
        jQuery(elem).removeClass('active');
      } else {
        jQuery('.accordion-item').removeClass('active');
        jQuery('.accordion-item .field__label').removeClass('active');
        jQuery('.accordion-item .field__item').slideUp(600);
        jQuery(contentDiv).slideDown(600).fadeIn(600);
        jQuery(parentDiv).addClass('active');
        jQuery(elem).addClass('active');
      }
    }

    jQuery('.accordion-item .field__label').click(function () {
      accordionOpen( this );
    });
  });


  /** Add class to the video parent fo just to show it in the supported browser **/
  jQuery(document).ready(function () {
    $('.field--name-field-msds-video').find('video').each(function(){
      let videoSource =  $(this).find('source').attr('src');
      let videoSourceFormat = videoSource.split('.');
      $(this).closest('.field--name-field-media-video-file').closest('.field__item').addClass('video-custom-'+videoSourceFormat[1]);
    });
  });
})(jQuery, Drupal);

