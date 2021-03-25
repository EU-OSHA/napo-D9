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
    let itemLength = $(this).find('.page-item').length;
    let lastItemIndex=itemLength - 1;
    $(this).find('.page-item').eq(lastItemIndex).addClass('last');

    let itemFirst = $(this).find('[title="Go to first page"]').length;
    if(itemFirst>0){
      $(this).find('[title="Go to first page"]').closest('.page-item').addClass('first');
    }

    let itemPrev = $(this).find('[title="Go to previous page"]').length;
    if(itemPrev>0){
      $(this).find('[title="Go to previous page"]').closest('.page-item').addClass('prev');
    }
  });

})(jQuery, Drupal);
