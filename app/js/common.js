//Product-page image listener
  var current = document.querySelector('#current');
  var imgs = document.querySelectorAll('.product-page--imgs img');
  imgs.forEach(img => img.addEventListener('click', imgClick));

  function imgClick(e) {
    current.src = e.target.src; // Add fade in class
    current.classList.add('fade-in'); // Add fade in class
    setTimeout(() => current.classList.remove('fade-in'), 500); // Remove fade-in class after .5 seconds
  }

// Show, hide search on mobile
  $(".nav--search-show").click(function(){
    $(".nav--search-block").show();
  });

  $(".nav--search-hide").click(function(){
    $(".nav--search-block").hide();
  });

// Show/hide description and tehnical info on product page
  var texnical = $(".product-page--texnical");
  var descr = $(".product-page--descr");
  var texnicalButton = $(".product-page--texnical-button");
  var descrButton = $(".product-page--descr-button");

  $(texnicalButton).click(function(){
    $(descr).css("display", "none");
    $(texnical).css("display", "block");
    $(texnicalButton).addClass("product-page--texnical-button__active");
    $(descrButton).removeClass("product-page--descr-button__active");
  });

  $(descrButton).click(function(){
    $(descr).css("display", "block");
    $(texnical).css("display", "none");
    $(descrButton).addClass("product-page--descr-button__active");
    $(texnicalButton).removeClass("product-page--texnical-button__active");
  });

// Main slider
  $( document ).ready(function() {
    var owl = $('.slider');
    owl.owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 83000,
      margin: 30,
      nav: false,
      dots: true,
      items: 1
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

// Partners, clients - slider
  $('.block-slider').owlCarousel({
      loop:true,
      margin:30,
      autoplay: true,
      slideSpeed: 300,
      paginationSpeed: 400,
      nav: false,
      dots: false,
      responsive:{
          0:{
              items:2
          },
          800:{
              items:3
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
  var target_date = new Date("Jan 31, 2019 23:59:00").getTime(); // set the countdown date
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

  //Heder scroll efect
  // Hide Header on on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('header').outerHeight();

  $(window).scroll(function(event){
      didScroll = true;
  });

  setInterval(function() {
      if (didScroll) {
          hasScrolled();
          didScroll = false;
      }
  }, 250);

  function hasScrolled() {
      var st = $(this).scrollTop();
      
      // Make sure they scroll more than delta
      if(Math.abs(lastScrollTop - st) <= delta)
          return;
      
      // If they scrolled down and are past the navbar, add class .header-up.
      // This is necessary so you never see what is "behind" the navbar.
      if (st > lastScrollTop && st > navbarHeight){
          // Scroll Down
          $('header').removeClass('header').addClass('header-up');
      } else {
          // Scroll Up
          if(st + $(window).height() < $(document).height()) {
              $('header').removeClass('header-up').addClass('header');
          }
      }
      
      lastScrollTop = st;
  }

// Ayax search
  jQuery(document).ready(function($){
    $('.nav--search').keypress(function(eventObject){
      var searchTerm = $(this).val();
      // проверим, если в поле ввода более 2 символов, запускаем ajax
      if(searchTerm.length > 2){
        $.ajax({
          url : 'wp-admin/admin-ajax.php',
          type: 'POST',
          data:{
            'action':'codyshop_ajax_search',
            'term'  :searchTerm
          },
          success:function(result){
            $('.codyshop-ajax-search').fadeIn().html(result);
            $('.codyshop-ajax-search').css("display", "flex");
          }
        });
      }
    });
  });