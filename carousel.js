/*
	Aaron Moradi
	Content Carousel
	
	relevantmatters.org
	
 */
 
(function( $ )
	$.fn.carousel = function(interval, transitionSpeed, pauseOnHover, navigation, animation) {
			
		// set default parameters
		interval 			= typeof interval !== 'undefined' ? interval : 4500;
	   	transitionSpeed 		= typeof transitionSpeed !== 'undefined' ? transitionSpeed : 'slow';
		pauseOnHover 			= typeof pauseOnHover !== 'undefined' ? pauseOnHover : true;
		navigation 			= typeof navigation !== 'undefined' ? navigation : true;
		animation			= typeof animation !== 'undefined' ? animation : 'fade';
		
		// direct children array (content slides)
		var dirChildren 	= $(this).children();
		
		// initial z-index of 1st content slide
		var z = 999;
		
		// container width
		var containerWidth 	= $('#carousel').width();
		var containerHeight 	= $('#carousel').height();		
			
		// position container relative
		$(this).css({
			"position": "relative",
			"overflow": "hidden"
		});
			
		// position direct children absolute, upper left corner
		$(dirChildren).css({
			"position": "absolute", 
			"top": "0", 
			"left": "0"
		});
			
		// for each direct child assign a z-index (decrement)
		$(dirChildren).each(function() {
			$(this).css({
				"z-index" : z
			});
			z -= 1;
		});
			
		/* slides are positioned */
		/* ======================================================================= */
		/* ======================================================================= */
		/* ======================================================================= */
		/* ======================================================================= */
		/* create animations below */	
	
		var i = 0;
	
		var slider = function() {
			
			// # of content slides
			var numSlides = $(dirChildren).length;
				
			//  repeat loop if i is over dirChildren length
			if (i == numSlides) {
				i = 0;
			}
			// after one iteration, repeat iteration (add to slide z-indexes)
			if ( $(dirChildren[0]).css("z-index") == (999 - numSlides) ) {
				$(dirChildren).css("z-index", "+=" + numSlides );
			}
	
			// move slide to back and fade in after animation and re-position
			var moveToBck = function() {
				$(dirChildren[i]).css({"z-index" : "-=" + numSlides,"left":0, "top": 0});
				$(dirChildren[i]).fadeIn('fast');
				i++;
			}
	
			// animations
			switch (animation) {
	
				case 'fade':
				$(dirChildren[i]).fadeOut(transitionSpeed, moveToBck);		
				break;
	
				case 'slideRight':
				$(dirChildren[i]).animate({
					left: containerWidth			    
			  	}, transitionSpeed, moveToBck);	
				break;
	
				case 'slideLeft':
				$(dirChildren[i]).animate({
					left: "-" + containerWidth			    
			  	}, transitionSpeed, moveToBck);	
				break;
	
				case 'slideTop':
				$(dirChildren[i]).animate({
					top: "-" + containerHeight		    
			  	}, transitionSpeed, moveToBck);	
				break;
	
				case 'slideBottom':
				$(dirChildren[i]).animate({
					top: containerHeight			    
			  	}, transitionSpeed, moveToBck);	
				break;
	
			} // end animations
	
		} // end slider()
			
		/* For Pause on Hover =============== */	
		// save an object so that I can start and stop this as we go
	    	var intervalObj = setInterval(slider, interval);
		// when the user hovers in, clear the interval; if they hover out,
	    	// restart it again
	    	if (pauseOnHover) {
	    		$('#carousel').hover(function() {
				clearInterval(intervalObj);
		   		}, function() {
		        intervalObj = setInterval(slider, interval);
		   	});
		}	
		/* End Pause on Hover =============== */
							
	} // end carousel
}( jQuery ));
