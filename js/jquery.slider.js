(function($) {
    $.fn.carousel = function() {

        var leftUserInterfaceEl = $('.carousel-arrow-left', this);
        var rightUserInterfaceEl = $('.carousel-arrow-right', this);
        var elementsList = $('.carousel-list', this);

        var pixelsOffset = 225;
        var currentLeftValue = 0;
        var elementsCount = elementsList.find('li').length;
        var minOffset = -((elementsCount - 3) * pixelsOffset);
        var maxOffset = 0;

        leftUserInterfaceEl.click(function() {
            if (currentLeftValue != maxOffset) {
                currentLeftValue += 225;
                elementsList.animate({
                    left: currentLeftValue + "px"
                }, 500)

            }
        });

        rightUserInterfaceEl.click(function() {
            if (currentLeftValue != minOffset) {
                currentLeftValue -= 225;
                elementsList.animate({
                    left: currentLeftValue + "px"
                }, 500)

            }
        });
    }
})(jQuery);
