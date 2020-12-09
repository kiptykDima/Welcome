
$(function(){  
  /*
1. slider-bottom
------------
*/
$('.blog__slider-bottom').slick({

    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    dots: true,
    
    responsive: [
      {
        breakpoint: 1161,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      },
      
    ]
  });

  /*
2. slider-top
------------
*/

  $('.blog__slider-top').slick({
    prevArrow:'<button class="slik-arrow slik-prev"><img src="images/blog/arrow/left-arrow.svg" alt=""></button>',
    nextArrow:'<button class="slik-arrow slik-next"><img src="images/blog/arrow/right-arrow.svg" alt=""></button>',
    arrows: true,
    dots: false,
  });
/*
3. fixed header
------------
*/
  $(window).scroll(function(){
    var sticky = $('.header__inner'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 200) sticky.addClass('sticky');
    else sticky.removeClass('sticky');
  });

/*
4. go to top
------------
*/
$(window).scroll(function() {
	if($(this).scrollTop() > 200) {
		$('#gotop').fadeIn();
	} else {
		$('#gotop').fadeOut();
	}
});

$('#gotop').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 'slow');
	return false;
});

/*
7. anchor link
--------------
*/

  
$('#nav a[href^="#"]').on('click', function(event) {
  $('.navActive').removeClass('navActive');
  $(this).addClass('navActive');
  
  var target = $(this.getAttribute('href'));; 
  if( target.length ) {
      event.preventDefault();

      console.log($("body").scrollTop, target.offset().top)
      $('html').animate({
        scrollTop: target.offset().top
      }, 1000);
  }

});



/*
10. text limit
--------------
*/
$('.blog .slider__bottom-box p').html(function(index, currentText) {
  var maxLength = $(this).attr('data-maxlength');

  if(currentText.length >= maxLength) {
    return currentText.substr(0, maxLength) + '...';
  } else {
    return currentText;
  }
});

  /*
11. show burger menu
--------------
  */
 $('.header__menu-btn').on('click', function(){
  $('.menu__list').slideToggle();
});



});
