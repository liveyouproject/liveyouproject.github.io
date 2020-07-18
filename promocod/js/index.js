const menuButton = document.querySelector('[data-menu-button]')

if (menuButton) {
  menuButton.addEventListener('click', () => {
    document.body.classList.toggle('menu_opened')
  })
}


// destroy desctop carousel
function mobileCarousel() {
  const checkWidth = $(window).width()
  const owlD = $(".owl-carousel-desk-destroy")
  if (checkWidth > 979) {
    if(typeof owlD.data('owl.carousel') != 'undefined'){
      owlD.data('owl.carousel').destroy() 
    }
    owlD.removeClass('owl-carousel')
  } else if (checkWidth < 980) {
    owlD.addClass('owl-carousel')
    owlD.owlCarousel({
      loop: true,
      autoWidth: true,
      dots: true
    })
  }
}

mobileCarousel()
$(window).resize(mobileCarousel)	