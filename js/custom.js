
$(document).ready(function() {
	$('.main-menu').hide();
    $('.menu-toggle').click(function() {
	
		$('.menu-toggle, .menu-label').hide();
		$('.main-menu').toggle('slow', function() {
		// Animation complete.
					
			});
		});
    
    $('.main-menu > li:first-child').click(function () {
    	$('.main-menu').toggle();
		$('.menu-toggle, .menu-label').show();
    	
    	});
    
    $('#tab-content2').hide();
    		//$('.accordion').hide();
   });
