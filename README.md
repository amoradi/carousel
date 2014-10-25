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
		<aside>Slide 5</aside>
		<div>
			<div>Slide 6</div>
		</div>
	<div>
```
### Initialize
+ Call carousel(interval, transitionSpeed, pauseOnHover, navigation, animation) on #carousel
+ interval  
+ transitionSpeed
+ pauseOnHover
+ navigation
+ animation
```
<script>
	$(document).ready(function() {
		$('#carousel').carousel(3000,1000, true, true, 'slideLeft');
	});
</script>
```
### Putting It Altogether
```
<html>
	<head>
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
		<script src=""></script>
		<script>
			$(document).ready(function() {
				$('#carousel').carousel(3000,1000, true, true, 'slideLeft');
			});
		</script>
	</head>
	<body>

		<div id="carousel">
			<img src="slide1.jpg" />
			<div>Slide 2</div>
			<div>Slide 3</div>
			<img src="slide4.jpg" />
			<aside>Slide 5</aside>
			<div>
				<div>Slide 6</div>
			</div>
		<div>
```
