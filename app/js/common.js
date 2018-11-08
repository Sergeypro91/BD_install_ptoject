$(document).ready(function() {
	var owlHeader = $('.main--slider');
	owlHeader.owlCarousel({
		loop: true,
		autoplay: true,
		slideSpeed: 300,
		paginationSpeed: 400,
		autoplayHoverPause: true,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		nav: true,
		navText : ["<img src='img/slider_arrow_l.png'>","<img src='img/slider_arrow_r.png'>"],
		dots: true,
		items: 1
	});
})