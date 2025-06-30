$(document).ready(function () {
  //form styler

    $('select').styler({
      withNano: true
    });
  //

  //menu
  $('.menu-burger').on('click', function () {
    $(this).toggleClass('active').closest('body').toggleClass('show-menu');
  });
  //end

  nanoScrollerInit();
  function nanoScrollerInit() {
    $("textarea.nano-content").on('keyup cut paste', function () {
      $(this).closest('.nano').nanoScroller();
    });
    $('div.nano').nanoScroller();
  }

  //fancybox
  Fancybox.bind("[data-fancybox]", {
    Thumbs : false,
    Toolbar: {
      display: {
        left: ["infobar"],
        middle: [],
        right: ["close"],
      },
    },
  });
  //end

  // SLIDERS
  if ($('.team-section .slider-collab').length) {
    var collabSwiper = new Swiper('.team-section .slider-collab', {
      slidesPerView: 'auto',
      loop: true,
      speed: 2000,
      spaceBetween: 20,
      freeMode: true,
      watchOverflow: true,
      centeredSlides: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      breakpoints: {
        767: {
          spaceBetween: 60,
        }
      }
    })
  }

  if ($('.team-section .slider-finance').length) {
    var financeSwiper = new Swiper('.team-section .slider-finance', {
      slidesPerView: 'auto',
      loop: true,
      speed: 2000,
      spaceBetween: 20,
      freeMode: true,
      watchOverflow: true,
      centeredSlides: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      breakpoints: {
        767: {
          spaceBetween: 60,
        }
      }
    })
  }

  if ($('.item-page-section').length) {
    var swiperHIWthumb = new Swiper(".swiper-item-thumb", {
      slidesPerView: 5,
      spaceBetween: 13,
      navigation: {
        nextEl: '.item-page-section .swiper-button-next',
        prevEl: '.item-page-section .swiper-button-prev',
      },
      breakpoints: {
        1025: {
          slidesPerView: 8,
        }
      }
    });
    var swiperHIWimg = new Swiper(".swiper-item-big", {
      spaceBetween: 10,
      slidesPerView: 1,
      thumbs: {
        swiper: swiperHIWthumb,
      }
    });

    swiperHIWthumb.on("slideChange", () => {
      swiperHIWimg.slideTo(swiperHIWthumb.activeIndex);
    });
  }

  //end

  //anchor
  $(".anchor-link").click(function(e) {
    e.preventDefault();
    if($(window).width() > 767) {
      var biblTopBlock = $(".bibliography-section .top-block").outerHeight();
    } else {
      biblTopBlock = $(".bibliography-section .top-block").outerHeight();
      var scrolleBlockH = $(".bibliography-section .scrolled-block").outerHeight();
    }

    var header = $(".header").outerHeight();
    var aid = $(this).attr("href");
    $('.anchor-link').removeClass('active');
    $(this).addClass('active');
    if($('.bibliography-section').length) {
      if($('.bibliography-section').hasClass('scrolled')) {
        var biblTopBlock = $(".bibliography-section .top-block").outerHeight();
        if($(window).width() > 767) {
          $('html,body').animate({scrollTop: ($('[data-anchor="' + aid + '"]').offset().top) + header - biblTopBlock - 6}, 'slow');
        } else {
          $('html,body').animate({scrollTop: ($('[data-anchor="' + aid + '"]').offset().top) - scrolleBlockH - 63}, 'slow');
        }
      } else {
        if($(window).width() > 767) {
          $('html,body').animate({scrollTop: ($('[data-anchor="' + aid + '"]').offset().top) + 26 - biblTopBlock + 30}, 'slow');
        } else {
          $('html,body').animate({scrollTop: ($('[data-anchor="' + aid + '"]').offset().top) - scrolleBlockH - 83}, 'slow');
        }
      }

    } else {
      $('html,body').animate({scrollTop: ($('[data-anchor="' + aid + '"]').offset().top) - header}, 'slow');
    }
  });
  //end anchor

  var windowW, windowH, headerH, biblTopBlock, biblScrolledBlockH, deskScrollBHeight, mobScrollBHeight;

	function myVar() {
      windowW = $(window).width();
      windowH = $(window).height();
      headerH = $(".header").outerHeight();
      biblTopBlock = $(".bibliography-section .top-block").outerHeight();
      biblScrolledBlockH = $(".bibliography-section .scrolled-block").outerHeight();
      deskScrollBHeight = biblTopBlock + headerH - biblScrolledBlockH - 26;
      mobScrollBHeight = biblTopBlock + headerH - biblScrolledBlockH - 60;
	}

  function controllScroll(scrollo) {
      if(windowW > 767) {
        if (scrollo > deskScrollBHeight) {
          $('.bibliography-section').addClass('scrolled');
        } else {
          $('.bibliography-section').removeClass('scrolled');
        }
      } else {
        if (scrollo > mobScrollBHeight) {
          $('.bibliography-section').addClass('scrolled');
        } else {
          $('.bibliography-section').removeClass('scrolled');
        }
      }
  }

  $(window).scroll(function (e) {
    myVar();
    controllScroll($(document).scrollTop());
  });

  myVar();
  controllScroll($(document).scrollTop());

  // ACCORDION
  $(".accordion").on("click", ".accordion-header", function() {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active').next().slideUp('100');
    } else {
      $('.accordion .accordion-header').removeClass('active').next().slideUp('100');
      $(this).toggleClass("active").next().slideToggle('100');
    }
  });
  // END ACCORDION
});
