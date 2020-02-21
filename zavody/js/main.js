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
   $('.search-icon-desktop').on('click', function () {
    $(this).parent().addClass('show-input');
   });

   //flowing-scroll
    $("a.scrollto").click(function () {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
    return false;
});
    // user-dropdown
    $('.user').on('click', function () {
      $(this).toggleClass('show-dropdown');
    });

   //tabs
   $('ul.soft-tabs').on('click', 'li:not(.current)', function() {

  $(this).addClass('current').siblings().removeClass('current')

    .parents('div.soft-tabs-wrap').find('div.box').eq($(this).index()).fadeIn(500).siblings('div.box').hide();

})
});
