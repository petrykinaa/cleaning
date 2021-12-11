$(function () {

  $(".header__nav a, .go-top").on("click", function (event) {   
    event.preventDefault();    
    var id = $(this).attr('href'),     
      top = $(id).offset().top;    
    $('body,html').animate({scrollTop: top}, 1500);
  });

  var mixer = mixitup('.projects__list');

  $('.solution__slider').slick({

    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrows-left.png" alt=""></button>',

    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrows-right.png" alt=""></button>'

  });


});

