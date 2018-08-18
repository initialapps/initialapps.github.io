
function loadSite() {

	(function () {
		'use strict';

		var width = window.innerWidth;  //window width
	
		// Preloader to show during site loading
  		$(window).load(function() {
	
			// will first fade out the loading animation 
			$("#status").fadeOut("slow"); 
		
			// will fade out the whole DIV that covers the website. 
			$("#preloader").delay(500).fadeOut("slow").remove();      
		
		}) 

		// Page scroll
		$('a.page-scroll').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top - 40
					}, 900);
					return false;
				}
			}
		});
		
		// Show Menu on Book
		$(window).bind('scroll', function() {
			var navHeight = $(window).height() - 100;
			if ($(window).scrollTop() > navHeight) {
				$('.navbar-default').addClass('on');
			} else {
				$('.navbar-default').removeClass('on');
			}
		});
		
		$('body').scrollspy({ 
			target: '.navbar-default',
			offset: 80
		})

		// Collapse Navbar
		var navbarCollapse = function() {
			if ($("#top-navbar").offset().top > 100) {
				$("#top-navbar").addClass("navbar-shrink");
			} else {
				$("#top-navbar").removeClass("navbar-shrink");
			}
		};
		// Collapse now if page is not at top
		navbarCollapse();
		// Collapse the navbar when page is scrolled
		$(window).scroll(navbarCollapse);

		$('.industries-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			fade:true,
			autoplay: true,
			cssEase: 'linear',
			arrows: false,
			autoplaySpeed: 2000
		});



	}());
}
loadSite();
