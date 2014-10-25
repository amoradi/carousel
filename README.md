#Content Carousel
_Simple Carousel Rotator_
##Installation

+ load jQuery 
+ load Content Carousel script

### HTML

+ Add div with id="carousel"
+ Add nested content slides (images, div's, whatever you need)
```
	<div id="carousel">
		<img src="slide1.jpg" />
		<div>Slide 2</div>
		<div>Slide 3</div>
		<img src="slide4.jpg" />
	<div>
'''
// init carousel	
$(document).ready(function() {
	$('#carousel').carousel(3000,1000, true, true, 'slideLeft');
});
