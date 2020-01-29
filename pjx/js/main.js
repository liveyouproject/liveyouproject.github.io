
$(function(){
  // $('input[placeholder], textarea[placeholder]').placeholder();
  // $(".mask-phone").mask("+7 (999) 999-99-99");

  // add-open-class
  $('.burger-menu').click(function(){
   if($(this).parent().is('.menu-burger--opened')){
     $(this).parent().removeClass('menu-burger--opened');
     $('body').removeClass('menu-open-wrapper-page');
   }else{
     $(this).parent().addClass('menu-burger--opened');
     $('body').addClass('menu-open-wrapper-page');
   }
  });
//slider
  $('.connect__slider').slick({
    dots: true,
    arrows: false,
    slideToShow: 1,
    slidesToScroll: 1,
    appendArrows: '.connect__slider-buttons',
    nextArrow: '.slide-next',
    prevArrow: '.slide-prev',
    mobileFirst: true,
        responsive: [{
                breakpoint: 599,
                settings: {
                    arrows: true,
                }
            }
        ]
  });

  $('.partners__slider').slick({
    dots: true,
    arrows: false
  });

  //magnific
   $('.connect__link').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        image: {
            verticalFit: true
        }
    });
  //header
  $(window).scroll(function() {
  if ($(this).scrollTop() > $('.header').height()){  
    $('.fixed-panel-nav').addClass("sticky");
  }
  else{
    $('.fixed-panel-nav').removeClass("sticky");
  }
  });
  // price checkboxes
  var priceBlock = document.querySelector('.pricing__wrap');

  priceBlock.addEventListener('change', function (event) {
    var input = event.target;

    if (input.dataset.allChecked) {
      this.querySelectorAll('.check-hidden').forEach(function (item) {
        item.classList.remove('check-hidden');
      });
      return;
    }

    this.querySelectorAll('.check[data-hidden]').forEach(function (item) {
      item.classList.add('check-hidden');
    });
  });
});


