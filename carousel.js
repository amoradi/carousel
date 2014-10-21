/*
		Create a responsive, rotating carsousel with mulitple transitions effects and navigations links
		
		Find class rotator
		Find direct children
		
		each direct child becomes a Banner Object
			Banner Class
			
			transition: string
			
		
*/

$(document).ready(function() {	
});

(function( $ ) {
		  
	$.fn.carousel = function(options ) {
		/*
			Make this position relative, set width and height, overflow:hidden;
			Make all direct children absolute positioned left 0, top 0
						
			Find direct children of this
			put them into an array
			
			For each item assign 1 less z-index value starting at 999
			
			
			Parameters:
						duration			- input in setInterval (int)
						transition speed 	- 'fast' or 'slow'
						hover on pause 		- defaults to True (Boolean)
						navigation 			- deafults to True (Boolean)
						animation 			- fade, slide right, left, top, down (done in jQuery .aniamte)
						
			
			Define
			Animations:
						fade				- fadeOut(transition speed)
						slide effects		- .animate({...
							slide right		- right: width (set width of container)
							slide left		- left: width "
							slide down		- bottom: height (set height of container)
							slide up 		- top: height "
			
			
						
										
		*/
		
	// position container relative
	$(this).css({
      		"position": "relative",
      		"overflow": "hidden"
    	});
	
	// position direct children absolute, upper left corner
	$(this).children().css({
		"position": "absolute", 
		"top": "0", 
		"left": "0"
	});
	
	// direct children array
	var dirChildren = $(this).children();
	// initial z-index
	var z = 999;
	// for each direct child assign a z-index (decrement)
	$(dirChildren).each(function() {
		var z -= 1;
		$(this).css({
			"z-index" : "z"
		});
	});

// End New Code

		var slider = function() {
				$('.z30').fadeOut("slow", function() {
					var z20 = $('.z20');
					var z10 = $('.z10');
					
					// Push top slide to bottom of stack			
					// remove class z30 (layer becomes default z-index of 5)
					$(this).removeClass('z30');
								
					// update lower layers by adding and removing classes, i.e. class="z20" becomes class="z30"
					$(z20).addClass('z30');
					$(z20).removeClass('z20');
								
					$(z10).addClass('z20');
					$(z10).removeClass('z10');
								
					// fade bottom most layer in and add class z10
					$(this).fadeIn("slow", function() {
						$(this).addClass('z10');
					});	
				}); // end fadeOut callback		
			} // end slider()
				
			// save an object so that I can start and stop this as we go
			var interval = setInterval(slider, 5000);
			
			// when the user hovers in, clear the interval; if they hover out,
			// restart it again
			$('.home-banner').hover(function() {
				clearInterval(interval);
			}, function() {
				interval = setInterval(slider, 5000);
			});
	}
}( jQuery ));
