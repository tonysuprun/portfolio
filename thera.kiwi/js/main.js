$(document).ready(function () {
  $(window).on('scroll', function () {
    checkHeight();
  });

  checkHeight();

  function checkHeight() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 50) {
      $('body').addClass('scrolling');
    }
    else {
      $('body').removeClass('scrolling');
    }
  }
  $(".anchor-link").click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $('.anchor-link').removeClass('active');
    $(this).addClass('active');
    $('html,body').animate({scrollTop: $('[data-scroll="' + aid + '"]').offset().top},'slow');
  });

  $('.header .wrapper .nav-menu ul a').on('click', function () {
		$('.hamburger').removeClass('opened');
		$('body').removeClass('show-menu');
	});

  document.querySelectorAll('.f_button').forEach(button => button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>');
  $('.f_button div span').each(function() {
    if($(this).text() == ' ') {
        $(this).html("&nbsp;");
    }
  });

  let rdNum1 = Math.floor((Math.random() * 20) + 5);
  let rdNum2 = Math.floor((Math.random() * 20) + 5);
  let rdNum3 = Math.floor((Math.random() * 20) + 5);
  let rdNum4 = Math.floor((Math.random() * 20) + 5);

  $('body').mousemove(function(e){

    var star1x = -(e.pageX + this.offsetLeft) / parseInt(rdNum1);
    var star1y = -(e.pageY + this.offsetTop) / parseInt(rdNum1);
    var star2x = -(e.pageX + this.offsetLeft) / parseInt(rdNum2);
    var star2y = -(e.pageY + this.offsetTop) / parseInt(rdNum2);
    var star3x = -(e.pageX + this.offsetLeft) / parseInt(rdNum3);
    var star3y = -(e.pageY + this.offsetTop) / parseInt(rdNum3);
    var star4x = -(e.pageX + this.offsetLeft) / parseInt(rdNum4);
    var star4y = -(e.pageY + this.offsetTop) / parseInt(rdNum4);

    $(".star-1").css('transform', 'translate(' + star1x + 'px,' + star1y + 'px)');
    $(".star-2").css('transform', 'translate(' + star2y + 'px,' + star2x + 'px)');
    $(".star-3").css('transform', 'translate(' + star3x + 'px,' + star3y + 'px)');
    $(".star-4").css('transform', 'translate(' + star4y + 'px,' + star4x + 'px)');
  });

  // Custom modal
	$('.modal-toggle').on('click', function(e) {
	  e.preventDefault();
	  var this_data_modal = $(this).data('modal');
  	$('body').addClass('open-modal');
	  $('.modal#' + this_data_modal).addClass('is-visible');
	});

	$('[data-close="close"]').on('click', function(e) {
		e.preventDefault();
		$('body').removeClass('open-modal');
	  $(this).closest('.modal').removeClass('is-visible');
	});
	// end

  //change price
  var elem_price1 = $('.swiper-slide:nth-child(1) .item-price'),
      elem_price2 = $('.swiper-slide:nth-child(2) .item-price'),
      elem_price3 = $('.swiper-slide:nth-child(3) .item-price');

  $('input[type=radio][name=switcher]').on('change', function() {
    switch ($(this).val()) {
      case 'monthly':
         var dfl_price_1 = elem_price1.data('dfl-price'),
             dfl_price_2 = elem_price2.data('dfl-price'),
             dfl_price_3 = elem_price3.data('dfl-price');

         elem_price1.find('b').text(dfl_price_1);
         elem_price2.find('b').text(dfl_price_2);
         elem_price3.find('b').text(dfl_price_3);
         $('.swiper-slide .item-price').find('i').text('mth');
        break;
      case 'yearly':
          var dfl_price_1 = elem_price1.data('dfl-price'),
              dfl_price_2 = elem_price2.data('dfl-price'),
              dfl_price_3 = elem_price3.data('dfl-price');

          var sum_price1 = dfl_price_1 * 12,
              sum_price2 = dfl_price_2 * 12,
              sum_price3 = dfl_price_3 * 12;

          elem_price1.find('b').text(sum_price1);
          elem_price2.find('b').text(sum_price2);
          elem_price3.find('b').text(sum_price3);
          $('.swiper-slide .item-price').find('i').text('yrl');
        break;
    }
  });

});
