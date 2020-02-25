$(function() {
  // $('input[placeholder], textarea[placeholder]').placeholder();
  // $(".mask-phone").mask("+7 (999) 999-99-99");

  // add-open-class
  $('.burger-menu').click(function() {
    if ($(this).parent().is('.menu-burger--opened')) {
      $(this).parent().removeClass('menu-burger--opened');
      $('body').removeClass('menu-open-wrapper-page');
    } else {
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
    buttonText: 'Прикрепить файл',
    placeholderText: ''
   });

  jcf.setOptions('Select', {
    wrapNative: false,
    multipleCompactStyle: true,
    maxVisibleItems: 14,
    useCustomScroll: false
  });

  jcf.replaceAll();
  //magnific
  $('.open-modal').magnificPopup();

  // show-input
  // $('.search-icon-desktop').on('click', function() {
  //   $(this).parent().addClass('show-input');
  // });
  // $('.header-search-form__btn').on('click', function() {
  //   $(this).parent().removeClass('show-input');
  // });
  $('.search-btn').on('click', function() {
    $('.menu-wrapper-fixed').toggleClass('show-search-field')
  });

  //flowing-scroll
  $(".company-head-mobile-menu a, .company-head-menu a").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 800);
    return false;
  });

  //company-head-mobile-menu
 $('.company-head-mobile-menu__title').on('click', function() {
    $(this).parent().addClass('show-dropdown-menu');
  });
  // user-dropdown
  $('.user').on('click', function() {
    $(this).toggleClass('show-dropdown');
  });

  //tabs
  $('ul.soft-tabs').on('click', 'li:not(.current)', function() {

    $(this).addClass('current').siblings().removeClass('current')

      .parents('div.soft-tabs-wrap').find('div.box').eq($(this).index()).fadeIn(500).siblings('div.box').hide();

  })
});
//file-upload
(function( $ ) {
   
   $.fn.uploader = function( options ) {
     var settings = $.extend({
       MessageAreaText: "Файлы не выбраны.",
       MessageAreaTextWithFiles: "Список файлов:",
       DefaultErrorMessage: "Невозможно открыть этот файл.",
       BadTypeErrorMessage: "На данный момент этот файл не поддерживается.",
       acceptedFileTypes: ['jpg', 'jpeg', 'png']
     }, options );
  
     var uploadId = 1;
     //update the messaging 
      $('.file-uploader__message-area p').text(options.MessageAreaText || settings.MessageAreaText);
     
     //create and add the file list and the hidden input list
     var fileList = $('<ul class="file-list"></ul>');
     var hiddenInputs = $('<div class="hidden-inputs hidden"></div>');
     $('.file-uploader__message-area').after(fileList);
     $('.file-list').after(hiddenInputs);
     
    //when choosing a file, add the name to the list and copy the file input into the hidden inputs
     $('.file-chooser__input').on('change', function(){
        var file = $('.file-chooser__input').val();
        var fileName = (file.match(/([^\\\/]+)$/)[0]);

       //clear any error condition
       $('.file-chooser').removeClass('error');
       $('.error-message').remove();
       
       //validate the file
       var check = checkFile(fileName);
       if(check === "valid") {
         
         // move the 'real' one to hidden list 
         $('.hidden-inputs').append($('.file-chooser__input')); 
       
         //insert a clone after the hiddens (copy the event handlers too)
         $('.file-chooser').append($('.file-chooser__input').clone({ withDataAndEvents: true})); 
       
         //add the name and a remove button to the file-list
         $('.file-list').append('<li style="display: none;"><span class="file-list__name">' + fileName + '</span><button class="removal-button" data-uploadid="'+ uploadId +'"></button></li>');
         $('.file-list').find("li:last").show(800);
        
         //removal button handler
         $('.removal-button').on('click', function(e){
           e.preventDefault();
         
           //remove the corresponding hidden input
           $('.hidden-inputs input[data-uploadid="'+ $(this).data('uploadid') +'"]').remove(); 
         
           //remove the name from file-list that corresponds to the button clicked
           $(this).parent().hide("puff").delay(10).queue(function(){$(this).remove();});
           
           //if the list is now empty, change the text back 
           if($('.file-list li').length === 0) {
             $('.file-uploader__message-area').text(options.MessageAreaText || settings.MessageAreaText);
           }
         });
       
         //so the event handler works on the new "real" one
         $('.hidden-inputs .file-chooser__input').removeClass('file-chooser__input').attr('data-uploadId', uploadId); 
       
         //update the message area
         $('.file-uploader__message-area').text(options.MessageAreaTextWithFiles || settings.MessageAreaTextWithFiles);
         
         uploadId++;
         
       } else {
         //indicate that the file is not ok
         $('.file-chooser').addClass("error");
         var errorText = options.DefaultErrorMessage || settings.DefaultErrorMessage;
         
         if(check === "badFileName") {
           errorText = options.BadTypeErrorMessage || settings.BadTypeErrorMessage;
         }
         
         $('.file-chooser__input').after('<p class="error-message">'+ errorText +'</p>');
       }
     });
     
     var checkFile = function(fileName) {
       var accepted          = "invalid",
           acceptedFileTypes = this.acceptedFileTypes || settings.acceptedFileTypes,
           regex;

       for ( var i = 0; i < acceptedFileTypes.length; i++ ) {
         regex = new RegExp("\\." + acceptedFileTypes[i] + "$", "i");

         if ( regex.test(fileName) ) {
           accepted = "valid";
           break;
         } else {
           accepted = "badFileName";
         }
       }

       return accepted;
    };
  }; 
}( jQuery ));

//init 
$(document).ready(function(){
  $('.fileUploader').uploader({
    MessageAreaText: "No files selected. Please select a file."
  });
});