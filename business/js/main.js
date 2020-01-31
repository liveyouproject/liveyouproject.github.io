jQuery(function($){

  $('input[placeholder], textarea[placeholder]').placeholder();

  // add-open-class
  $('.menu-icon').click(function(){
   if($(this).parent().is('.menu-mobile-open')){
     $(this).parent().removeClass('menu-mobile-open');
     $('body').removeClass('menu-open-wrapper-page');
   }else{
     $(this).parent().addClass('menu-mobile-open');
     $('body').addClass('menu-open-wrapper-page');
   }
  });


  $('.menu-link').click(function(){
     $('.head-menu').removeClass('menu-mobile-open');
     $('body').removeClass('menu-open-wrapper-page');
  });


 $('#fullpage').fullpage({
      verticalCentered: true,
      css3:false,
      scrollingSpeed: 900,
      navigation: true,
      navigationPosition: 'left',
      normalScrollElements: '.menu-open-wrapper-page',
      responsiveWidth:1300,
      responsiveHeight:640,
      anchors: ['section1-screen', 'section2-screen', 'section3-screen', 'section4-screen', 'section5-screen', 'section6-screen', 'section7-screen'],
      menu: '#menu'
    });



  $(".mask-phone").mask("+7 (999) 999-99-99");

  $('.sell-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: '<button type="button" class="slide-next"></button>',
  prevArrow: '<button type="button" class="slide-prev"></button>'
});

$('.review-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: '<button type="button" class="slide-next"></button>',
  prevArrow: '<button type="button" class="slide-prev"></button>'
});

$('.project-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: '<button type="button" class="slide-next"></button>',
  prevArrow: '<button type="button" class="slide-prev"></button>',
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 479,
      settings: {
        slidesToShow: 2
      }
    }
  ]
});

$('.fabrication_slider__img-wrap').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: '<button type="button" class="slide-next"></button>',
  prevArrow: '<button type="button" class="slide-prev"></button>',
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2
      }
    }
  ]
});
$('.project-box').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: '<button class="project__btn">Следующий проект</button>',
  prevArrow: '',
  swipe: false
});

 $('.open-modal').magnificPopup({
        type: 'inline',
        showCloseBtn: false
    });

$('.fabrication__slider__link').magnificPopup({
      type: 'image',
      closeOnContentClick: true
    });

$('.popup-youtube').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
});
$('.pop-up-close').click(function(){
    $.magnificPopup.close();
});
$('.project-slider__video-link').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
});
//form submission
  $("form").submit(function() {
  var e = $(this);
  return $.ajax({
   type: e.attr("method"),
   url: e.attr("action"),
   data: e.serialize()
   }).done(function() {
   alert("Thank you!"), setTimeout(function() {
     e.trigger("reset");
   }, 1e3)
   }).fail(function() {
   alert("Ошибка отправки, попробуйте позже");
  }), !1
 });
 
$('.js-video').on('click', () => {
  $('.project-slider').removeClass('project-slider_img').addClass('project-slider_video');
});

$('.js-img').on('click', () => {
  $('.project-slider').removeClass('project-slider_video').addClass('project-slider_img');
});

/*preloader*/
var hellopreloader = document.getElementById("hellopreloader_preload");function fadeOutnojquery(el){el.style.opacity = 1;var interhellopreloader = setInterval(function(){el.style.opacity = el.style.opacity - 0.05;if (el.style.opacity <=0.05){ clearInterval(interhellopreloader);hellopreloader.style.display = "none";}},16);}window.onload = function(){setTimeout(function(){fadeOutnojquery(hellopreloader);},1000);};
//tabs
// $(".project-box").slick('reinit');
 $('ul.project-tabs').on('click', 'li:not(.current)', function() {
  $(this).addClass('current').siblings().removeClass('current')
    .parents('div.project-tabs-wrap').find('div.project-box').eq($(this).index()).addClass('visible').siblings('div.project-box').removeClass('visible');

});

 // $('.project__btn').on('click', function() {
 //   $('ul.project-tabs li.current').removeClass('current').next().addClass('current');
 //   $('.project-box.visible').removeClass('visible').next().addClass('visible');
 // });

  $('ul.fabrication-tabs').on('click', 'li:not(.current)', function() {

  $(this).addClass('current').siblings().removeClass('current')

    .parents('div.fabrication-tabs-wrap').find('div.fabrication-box').eq($(this).index()).addClass('visible').siblings('div.fabrication-box').removeClass('visible');
    
});
// $(".project-box").slick('setPosition', 0);
});


//Plugin placeholder
(function(b,f,i){function l(){b(this).find(c).each(j)}function m(a){for(var a=a.attributes,b={},c=/^jQuery\d+/,e=0;e<a.length;e++)if(a[e].specified&&!c.test(a[e].name))b[a[e].name]=a[e].value;return b}function j(){var a=b(this),d;a.is(":password")||(a.data("password")?(d=a.next().show().focus(),b("label[for="+a.attr("id")+"]").attr("for",d.attr("id")),a.remove()):a.realVal()==a.attr("placeholder")&&(a.val(""),a.removeClass("placeholder")))}function k(){var a=b(this),d,c;placeholder=a.attr("placeholder");
b.trim(a.val()).length>0||(a.is(":password")?(c=a.attr("id")+"-clone",d=b("<input/>").attr(b.extend(m(this),{type:"text",value:placeholder,"data-password":1,id:c})).addClass("placeholder"),a.before(d).hide(),b("label[for="+a.attr("id")+"]").attr("for",c)):(a.val(placeholder),a.addClass("placeholder")))}var g="placeholder"in f.createElement("input"),h="placeholder"in f.createElement("textarea"),c=":input[placeholder]";b.placeholder={input:g,textarea:h};!i&&g&&h?b.fn.placeholder=function(){}:(!i&&g&&
!h&&(c="textarea[placeholder]"),b.fn.realVal=b.fn.val,b.fn.val=function(){var a=b(this),d;if(arguments.length>0)return a.realVal.apply(this,arguments);d=a.realVal();a=a.attr("placeholder");return d==a?"":d},b.fn.placeholder=function(){this.filter(c).each(k);return this},b(function(a){var b=a(f);b.on("submit","form",l);b.on("focus",c,j);b.on("blur",c,k);a(c).placeholder()}))})(jQuery,document,window.debug);


/* mask input*/
(function(e){function t(){var e=document.createElement("input"),t="onpaste";return e.setAttribute(t,""),"function"==typeof e[t]?"paste":"input"}var n,a=t()+".mask",r=navigator.userAgent,i=/iphone/i.test(r),o=/android/i.test(r);e.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},dataName:"rawMaskFn",placeholder:"_"},e.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&(n=this.createTextRange(),n.collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(t,r){var c,l,s,u,f,h;return!t&&this.length>0?(c=e(this[0]),c.data(e.mask.dataName)()):(r=e.extend({placeholder:e.mask.placeholder,completed:null},r),l=e.mask.definitions,s=[],u=h=t.length,f=null,e.each(t.split(""),function(e,t){"?"==t?(h--,u=e):l[t]?(s.push(RegExp(l[t])),null===f&&(f=s.length-1)):s.push(null)}),this.trigger("unmask").each(function(){function c(e){for(;h>++e&&!s[e];);return e}function d(e){for(;--e>=0&&!s[e];);return e}function m(e,t){var n,a;if(!(0>e)){for(n=e,a=c(t);h>n;n++)if(s[n]){if(!(h>a&&s[n].test(R[a])))break;R[n]=R[a],R[a]=r.placeholder,a=c(a)}b(),x.caret(Math.max(f,e))}}function p(e){var t,n,a,i;for(t=e,n=r.placeholder;h>t;t++)if(s[t]){if(a=c(t),i=R[t],R[t]=n,!(h>a&&s[a].test(i)))break;n=i}}function g(e){var t,n,a,r=e.which;8===r||46===r||i&&127===r?(t=x.caret(),n=t.begin,a=t.end,0===a-n&&(n=46!==r?d(n):a=c(n-1),a=46===r?c(a):a),k(n,a),m(n,a-1),e.preventDefault()):27==r&&(x.val(S),x.caret(0,y()),e.preventDefault())}function v(t){var n,a,i,l=t.which,u=x.caret();t.ctrlKey||t.altKey||t.metaKey||32>l||l&&(0!==u.end-u.begin&&(k(u.begin,u.end),m(u.begin,u.end-1)),n=c(u.begin-1),h>n&&(a=String.fromCharCode(l),s[n].test(a)&&(p(n),R[n]=a,b(),i=c(n),o?setTimeout(e.proxy(e.fn.caret,x,i),0):x.caret(i),r.completed&&i>=h&&r.completed.call(x))),t.preventDefault())}function k(e,t){var n;for(n=e;t>n&&h>n;n++)s[n]&&(R[n]=r.placeholder)}function b(){x.val(R.join(""))}function y(e){var t,n,a=x.val(),i=-1;for(t=0,pos=0;h>t;t++)if(s[t]){for(R[t]=r.placeholder;pos++<a.length;)if(n=a.charAt(pos-1),s[t].test(n)){R[t]=n,i=t;break}if(pos>a.length)break}else R[t]===a.charAt(pos)&&t!==u&&(pos++,i=t);return e?b():u>i+1?(x.val(""),k(0,h)):(b(),x.val(x.val().substring(0,i+1))),u?t:f}var x=e(this),R=e.map(t.split(""),function(e){return"?"!=e?l[e]?r.placeholder:e:void 0}),S=x.val();x.data(e.mask.dataName,function(){return e.map(R,function(e,t){return s[t]&&e!=r.placeholder?e:null}).join("")}),x.attr("readonly")||x.one("unmask",function(){x.unbind(".mask").removeData(e.mask.dataName)}).bind("focus.mask",function(){clearTimeout(n);var e;S=x.val(),e=y(),n=setTimeout(function(){b(),e==t.length?x.caret(0,e):x.caret(e)},10)}).bind("blur.mask",function(){y(),x.val()!=S&&x.change()}).bind("keydown.mask",g).bind("keypress.mask",v).bind(a,function(){setTimeout(function(){var e=y(!0);x.caret(e),r.completed&&e==x.val().length&&r.completed.call(x)},0)}),y()}))}})})(jQuery);

