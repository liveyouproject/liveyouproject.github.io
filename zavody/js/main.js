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

   // product-gallery
  $(".product-info-thumbs__item").on('click', function() {
    event.preventDefault();
    var mainImage = $(this).index(); 
    $('.product-info-img__item').removeClass('active');
    $('.product-info-img__item').eq(mainImage).addClass('active'); 
  });
  //js custom-form
  jcf.setOptions('File', {
    buttonText: 'Загрузить',
    placeholderText: ''
  });
  
  jcf.setOptions('Select', {
    wrapNative: false,
    wrapNativeOnMobile: true,
    multipleCompactStyle: true,
    maxVisibleItems: 14,
    useCustomScroll: false
  });

  jcf.replaceAll();
   //magnific
   $('.open-modal').magnificPopup();

   // show-input
   $('.header-search-form__btn').on('click', function () {
    event.preventDefault();
    $(this).parent().addClass('show-input');
   });
});
