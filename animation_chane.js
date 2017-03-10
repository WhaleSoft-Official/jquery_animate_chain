!function($){
    var defaults = {
        animate: {},
        animationTime: 1000,
        direction : 'down',
        delay: 0
	};
    $.fn.animateChane = function(options){
        var settings = $.extend({}, defaults, options),
            $collection = this,
            $element = this;
            
        if($collection.length > 1) $element = $($collection[0]);
        $element.animate(settings.animate, settings.animationTime, function(){
            $element.trigger('chane_element_animation_finished')
            var next_element = $element.next();
            if(settings.direction == 'up') next_element = $element.prev();
            if(next_element.length > 0){
                setTimeout(function(){
                    next_element.animateChane(options);
                }, settings.delay)
            }
            else $element.trigger('chane_animation_finished');
        })
    }
}(window.jQuery);