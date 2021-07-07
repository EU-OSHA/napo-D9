/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.napo_theme = {
    attach: function (context, settings) {
      // Hide ui-dialog
      $('.download-videos a[class*="napo-cart-add"]').each(function(){
        $(this).click(function(){
          $('.ui-dialog[aria-describedby="add-cart"]').stop().fadeOut(0);
          $('.ui-dialog[aria-describedby="remove-cart"]').stop().fadeOut(0);
          $('.ui-dialog[aria-describedby="add-cart"]').stop().fadeIn();
          setTimeout(function(){
            $('.ui-dialog[aria-describedby="add-cart"]').stop().fadeOut();
          }, 2000);
        });
      });

      $('.download-videos a[class*="napo-cart-delete"], .ncc-content-cart-download a[class*="napo-cart-delete"]').each(function(){
        $(this).click(function(){
          $('.ui-dialog[aria-describedby="add-cart"]').stop().fadeOut(0);
          $('.ui-dialog[aria-describedby="remove-cart"]').stop().fadeOut(0);
          $('.ui-dialog[aria-describedby="remove-cart"]').stop().fadeIn();
          setTimeout(function(){
            $('.ui-dialog[aria-describedby="remove-cart"]').stop().fadeOut();
          }, 2000);
        });
      });
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


  // Counter for Download Centre Button
  $('#ncc-download-centre-form').each(function(){
    let selectedItems=0;
    $(this).find('.custom-control-input').on('change', function(){
      if(this.checked){
        selectedItems++;
      }
      else{
        selectedItems--;
      }
      let $downloadButton=$(this).closest('#ncc-download-centre-form').find('#edit-submit');
      let downloadButtonText=$downloadButton.html();
      let splitDownloadButtonText=downloadButtonText.split('(');
      let newDownloadButtonText=splitDownloadButtonText[0]+'('+selectedItems+')';
      $downloadButton.html(newDownloadButtonText);
    });
  });



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


  jQuery(document).ready(function () {
    $('body').on('click', '.cart a', function(){
    })

    $('#header').on('click', '.btn-search-custom-mobile', function () {
      $('#block-searchapi').toggleClass('in');
    });
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
        jQuery('.accordion-item .field--label-above>.field__item,.accordion-item .field--type-text-long>.field__item,.accordion-item .field--label-above>.field__items,.accordion-item .field--type-text-long>.field__items').slideUp(600).addClass('closed-2');
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




  // Show results in Napo Films
  if($('body').find('#edit-search-api-fulltext--2').length>0){
    let napoFilmsInputValue=$('#edit-search-api-fulltext--2').val();
    let napoFilmsInputValueLength=napoFilmsInputValue.length;
    if(napoFilmsInputValueLength>0){
      $('body').addClass('showResults');
    }
  }

  // Show results in General Search
  if($('body').find('#views-exposed-form-search-page-1 input').length>0) {
    let generalSearchInputValue = $('#views-exposed-form-search-page-1 input').val();
    if (generalSearchInputValue.length > 0) {
      $('body').addClass('showResults');
    }
  }




})(jQuery, Drupal);

