$(".nav--search-show").click(function(){
	$(".nav--search-block").show();
});

$(".nav--search-hide").click(function(){
	$(".nav--search-block").hide();
});

$(document).ready(function() {
	var owlHeader = $('.slider');
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

$('.block-slider').owlCarousel({
    loop:true,
    margin:30,
    autoplay: true,
	slideSpeed: 300,
	paginationSpeed: 400,
    responsive:{
        0:{
            items:1
        },
        1200:{
            items:5
        },
        1600:{
            items:3
        }
    }
})