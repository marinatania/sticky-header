jQuery(document).ready(function () {
	var startAtY = 430;
	var screenWidth = 785;
    jQuery(window).scroll(function(){
    	checkY();
	});
    
    function checkY(){
	   if(jQuery(window).width() > screenWidth) {
		    if( jQuery(window).scrollTop() > startAtY ){
		    	jQuery( '#site-header').addClass('slide-up');
		    	jQuery('.tagline').hide();
		    	jQuery('#site-header img, .access, .access ul li ul, form#searchform, .social-header').addClass('sticky-shrink');
		    } else {
		    	jQuery( '#site-header').removeClass('slide-up');
		    	jQuery('.tagline').show();
		    	jQuery('#site-header img, .access, .access ul li ul, form#searchform, .social-header').removeClass('sticky-shrink');
		    }
		}
	}		
	checkY();
});