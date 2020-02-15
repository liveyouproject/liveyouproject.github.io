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

  // add-open-class
  $('.menu-item__link--dd-open').click(function(){
   if($(this).parent().is('.menu-item--dd-opened')){
    $(this).parent().removeClass('menu-item--dd-opened');
   }else{
    $(this).parent().addClass('menu-item--dd-opened');
   }
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
});
