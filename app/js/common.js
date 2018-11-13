$(".nav--search-show").click(function(){
  $(".nav--search-block").show();
});

$(".nav--search-hide").click(function(){
  $(".nav--search-block").hide();
});

$( document ).ready(function() {
  var owl = $('.slider');
  owl.owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:1000,
    margin:30,
    nav:true,
    dots:true,
    items:1
  })
  owl.on('translate.owl.carousel',function(e){
    $('.owl-item video').each(function(){
      $(this).get(0).pause();
    });
  });
  owl.on('translated.owl.carousel',function(e){
    $('.owl-item.active video').get(0).play();
  })
  if(!isMobile()){
    $('.owl-item .item').each(function(){
      var attr = $(this).attr('data-videosrc');
      if (typeof attr !== typeof undefined && attr !== false) {
        console.log('hit');
        var videosrc = $(this).attr('data-videosrc');
        $(this).prepend('<video muted><source src="'+videosrc+'" type="video/mp4"></video>');
      }
    });
    $('.owl-item.active video').attr('autoplay',true).attr('loop',true).attr('playsinline',true);
  }
});


function isMobile(width) {
    if(width == undefined){
        width = 719;
    }
    if(window.innerWidth <= width) {
        return false;
    } else {
        return false;
    }
}

// $('.slider').owlCarousel({
//     loop:true,
//     margin:30,
//     autoplay: true,
//     autoplayTimeout:86000,
//     autoplayHoverPause: true,
//     items: 1
// });

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