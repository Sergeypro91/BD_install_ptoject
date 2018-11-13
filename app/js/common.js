$(".nav--search-show").click(function(){
	$(".nav--search-block").show();
});

$(".nav--search-hide").click(function(){
	$(".nav--search-block").hide();
});

$('.slider').owlCarousel({
    loop:true,
    margin:30,
    autoplay: true,
	slideSpeed: 300,
	paginationSpeed: 400,
	autoplayHoverPause: true,
    items: 1
})

$('.block-slider').owlCarousel({
    loop:true,
    margin:30,
    autoplay: true,
	slideSpeed: 300,
	paginationSpeed: 400,
    responsive:{
        0:{
            items:2
        },
        1200:{
            items:5
        },
        1600:{
            items:3
        }
    }
})