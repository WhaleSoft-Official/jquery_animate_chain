!function($){
    var defaults = {
        animate: {},
        animationTime: 1000,
        direction : 'down',
        delay: 0
	},
	$animation_collection_id = 0;
	
    $.fn.animateChane = function(options){
        var settings = $.extend({}, defaults, options),
            $collection = this,
            $element = this;
        if($collection.length <= 0) return this;    
        if($collection.length > 1){
            $collection.attr('data-animation_collection_id', ++$animation_collection_id)
            $element = $($collection[0]);  
        }else{
            var current_animation_collection_id = $element.data('animation_collection_id')
            $collection = $('[data-animation_collection_id="'+current_animation_collection_id+'"]');
        } 
        
        var current_element_index = $collection.index($element);
        $element.animate(settings.animate, settings.animationTime, function(){
            $element.trigger('chane_element_animation_finished')
            var next_element = $($collection[current_element_index+1]);
            if(settings.direction == 'up') next_element = $($collection[current_element_index-1]);
            if(next_element.length > 0){
                setTimeout(function(){
                    next_element.animateChane(options);
                }, settings.delay)
            }
            else $element.trigger('chane_animation_finished');
        })
        
        return this;
    }
}(window.jQuery);
