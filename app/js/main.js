$(function () {
  
  var mixer = mixitup('.products__inner-box')
  
});

$('.rate-star').rateYo({
  rating: 5,
  starWidth: "12px",
  readOnly: true,
});

$('.followers-slider__inner').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  variableWidth: true,
  prevArrow: '<button class="slick-arrow slick-prev"><img src="images/slider/arrow-left.png" alt=""></button>',
  nextArrow: '<button class="slick-arrow slick-next"><img src="images/slider/arrow-right.png" alt=""></button>',
 
});

$('.products-slider__inner').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<button class="slick-arrow slick-prev"><img src="images/slider/arrow-left.png" alt=""></button>',
  nextArrow: '<button class="slick-arrow slick-next"><img src="images/slider/arrow-right.png" alt=""></button>',
 
});
