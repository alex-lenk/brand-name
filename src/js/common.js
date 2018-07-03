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

});
