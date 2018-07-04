$(document).ready(function () {

    /* Begin language-bar */

    var langArea = $(".language-bar");
    var $langItem = $('.lang-item');
    var langOpen = 'lang-open';

    var maxWidth = Array.prototype.reduce.call($langItem, function (result, item) {
        return Math.max(result, item.offsetWidth);
    }, 0);

    langArea.width(maxWidth);

    langArea.click(
        function () {
            $(this).toggleClass(langOpen);
        }
    );
    /* END language-bar */


    $( '#example3' ).sliderPro({
        width: 960,
        height: 500,
        fade: true,
        arrows: true,
        buttons: false,
        shuffle: true,
        thumbnailArrows: true,
        autoplay: false
    });


    $('select,.product-number__input').styler();

});
