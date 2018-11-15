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
      $(this).get(0).play();
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
});

// Block--counter
var target_date = new Date().getTime() + (1000*3600*48); // set the countdown date
var days, hours, minutes, seconds; // variables for time units

var countdown = document.getElementById("tiles"); // get tag element

getCountdown();

setInterval(function () { getCountdown(); }, 1000);

function getCountdown(){

  // find the amount of "seconds" between now and target
  var current_date = new Date().getTime();
  var seconds_left = (target_date - current_date) / 1000;

  days = pad( parseInt(seconds_left / 86400) );
  seconds_left = seconds_left % 86400;
     
  hours = pad( parseInt(seconds_left / 3600) );
  seconds_left = seconds_left % 3600;
      
  minutes = pad( parseInt(seconds_left / 60) );
  seconds = pad( parseInt( seconds_left % 60 ) );

  // format countdown string + set tag value
  countdown.innerHTML = "<span>" + days + "</span><span>:</span><span>" + hours + "</span><span>:</span><span>" + minutes + "</span><span>:</span><span>" + seconds + "</span>"; 
}

function pad(n) {
  return (n < 10 ? '0' : '') + n;
}

