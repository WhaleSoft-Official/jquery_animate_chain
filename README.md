# jQuery Animate Chain
Simple jQuery plugin to do animation with collection of elements one by one

## Usage
Just include jQuery lib and animation_chain.js file
```html
	<script src="https://code.jquery.com/jquery-3.1.0.min.js"></script>
	<script src="js/animation_chain.js"></script>
```
After it you can call plugin
```javascript
	$('.selector').animateChain()
```
## Options
```javascript
	animate: {}, // hash of css rules to be animated
	animationTime: 1000, // duration of animation for each element
	direction : 'down', // direction of wolking through collection ('up'|'down')
	delay: 0 // delay before switch to next element
```
## Events
```
chain_element_animation_finished - fired after element animation finished
chain_animation_finished - fired after all elements animations in collection are done
```
