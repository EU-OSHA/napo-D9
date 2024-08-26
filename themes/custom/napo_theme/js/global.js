/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.napo_theme = {
    attach: function (context, settings) {

      //AccesKey
      $('#edit-lang-dropdown-select').attr('accessKey', 'L');
      $('#edit-search-api-fulltext').attr('accessKey', 'Q');

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


      jQuery(document).ready(function () {

        //Play home video
        let homeVideo=$('.block-views-blockfrontpage-custom-video-block').find('video');
        let playHomeVideo=false;
        $('#block-views-block-frontpage-custom-video-block').append('<div class="play-button-container"><span class="button-play"></span></div>');
        $('.block-views-blockfrontpage-custom-video-block').on('click','.play-button-container', function() {
          if(playHomeVideo==false) {
            homeVideo.get()[0].play();
            $('.block-views-blockfrontpage-custom-video-block').stop().addClass('video-run');
            playHomeVideo = true;
          }
          else if(playHomeVideo==true) {
            homeVideo.get()[0].pause();
            $('.block-views-blockfrontpage-custom-video-block').stop().removeClass('video-run');
            playHomeVideo = false;
          }
        });

        //AccesKey
        $('#edit-search-api-fulltext').attr('accessKey', 'Q');
        $(' #edit-lang-dropdown-select').attr('accessKey', 'L');
        $('.header .nav-item:first-of-type a').attr('accessKey', '0');


        // Download format text
        $('.download-video').each(function(){
          $(this).find('.download-items a').each(function(){
            let linkText= $(this).text();
            let linkTextSplit= linkText.split('.');
            $(this).text(linkTextSplit[linkTextSplit.length-1]);
          });
        });


        //Text of the link to the video in Lessons and activities
        if($('#linkToVideoCustom').length>0){
          $('#linkToVideoCustom').each(function(){
            let linkText= $(this).closest('#main-wrapper').find('h1').text();
            $(this).text(linkText);
          });
        }

        moveCategoriesSeachField();
      });
    }
  };


  // Resize Font size
  $('#_biggify').on('click', function() {
    let fontSize = $('html').css('font-size');
    let newFontSize = parseInt(fontSize)+1;
    $('html').css('font-size', newFontSize+'px')
  })

  $('#_smallify').on('click', function() {
    let fontSize = $('html').css('font-size');
    let newFontSize = parseInt(fontSize)-1;
    $('html').css('font-size', newFontSize+'px')
  })


  // Counter for Download Centre Button
  $('#ncc-download-centre-form').each(function(){
    let selectedItems=0;
    $(this).find('.form-checkbox').on('change', function(){
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

    //Hide recommended videos if there isn't results
    function isEmpty( el ){
      return !$.trim(el.html())
    }
    if (isEmpty($('div.recommended-films .view-recommended-films'))) {
      $('div.recommended-films').addClass('hide-recommended-films');
    }

  });


  jQuery(document).ready(function () {

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

    $('.node--type-lesson').find('video').each(function(){
      let videoSource =  $(this).find('source').attr('src');
      let videoSourceFormat = videoSource.split('.');
      $(this).closest('.field--name-field-media-video-file').closest('.field__item').addClass('video-custom-'+videoSourceFormat[1]);
    });

    $('.node--type-msds-activities').find('video').each(function(){

      let videoSource =  $(this).find('source').attr('src');
      let videoSourceFormat = videoSource.split('.');
      $(this).closest('.field--name-field-media-video-file').closest('.field__item').addClass('video-custom-'+videoSourceFormat[1]);
    });

    if($('body').hasClass('page-view-napo-films-index')){
      let $tagsInput = $('div.js-form-item-tags input[name="tags"]');
      $tagsInput.on('input change keyup', function() {
        selectFilmCatFacet($tagsInput);
      });
    }
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

  // Play "Napo for teachers" and "Napo in the workplace" videos
  $('.video-custom').each(function(){
    let $video=$(this).find('video');
    let playVideo=false;
    $(this).on('click', '.video-custom__image', function () {
      if (playVideo==false && !$(this).closest('.video-custom').hasClass('playingVideoCustom')) {
        $video.get()[0].play();
        $(this).closest('.video-custom').stop().addClass('playingVideoCustom');
        playVideo=true;
      }
    });
    $(this).on('click', 'video', function () {
      if($video.get()[0].paused){
        $(this).closest('.video-custom').stop().removeClass('pauseVideoCustom');
      }
      else{
        $(this).closest('.video-custom').stop().addClass('pauseVideoCustom');
      }
    });
    $(this).on('click', '.video-custom__playButton', function () {
      if (playVideo==false && !$(this).closest('.video-custom').hasClass('playingVideoCustom')) {
        $video.get()[0].play();
        $(this).closest('.video-custom').stop().addClass('playingVideoCustom');
        playVideo=true;
      }
      else{
        $video.get()[0].play();
        $(this).closest('.video-custom').stop().removeClass('pauseVideoCustom');
      }
    });
  });

  /**Napo films - select the facet accordingly to the value inserted in text field**/
  function selectFilmCatFacet(p_value){
    let $tagsInput = p_value;
    let tagValue = $tagsInput.val().trim();
    if (tagValue) {
      $('.facets-widget-checkbox .facet-item input[type="checkbox"]').prop('checked', false);

      $('.facets-widget-checkbox .facet-item').each(function() {
        let $facetItem = $(this);
        let $labelSpan = $facetItem.find('label span.facet-item__value');
        let facetText = $labelSpan.text().trim();

        if (facetText === tagValue) {
          $facetItem.find('input[type="checkbox"]').prop('checked', true).trigger('click');
        }
      });
    }
  }

  /**Napo films - Relocate the categories search field**/
  function moveCategoriesSeachField() {
    let $autocompleteDiv = $('.js-form-item.js-form-type-entity-autocomplete');
    let $targetContainer = $('[id*="block-napo-theme-napofilmcontentcategories"]');

    if ($autocompleteDiv.length) {
      if ($targetContainer.length) {
        if ($autocompleteDiv.parent().attr('id') !== $targetContainer.attr('id')) {
          $autocompleteDiv.detach().insertAfter($targetContainer.find('h2'));
        }
      }
    }
  }


  $(document).ajaxSuccess(function() {
    if($('body').hasClass('page-view-napo-films-index')){
      moveCategoriesSeachField();
      let $tagsInput = $('div.js-form-item-tags input[name="tags"]');
      $tagsInput.on('input change keyup', function() {
        selectFilmCatFacet($tagsInput);
      });
    }
  });




})(jQuery, Drupal);

