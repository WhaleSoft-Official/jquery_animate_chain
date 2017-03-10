# jQuery Animate Chane
Simple jQuery plugin to do animation with collection of elements one by one

## Usage
Just include jQuery lib and animation_chane.js file
```html
	<script src="https://code.jquery.com/jquery-3.1.0.min.js"></script>
	<script src="js/animation_chane.js"></script>
```
After it you can call plugin
```javascript
	$('.selector').animateChane()
```
## Options
```javascript
	animate: {}, // hash of css rules to be animated
	animationTime: 1000, // duration of animation for each element
	direction : 'down', // direction of wolking through collection ('up'|'down')
	delay: 0 // delay before switch to next element
```
