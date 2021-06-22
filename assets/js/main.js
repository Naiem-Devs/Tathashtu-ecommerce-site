(function($) {
  "use strict";
  
  // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 


  $('Select').niceSelect();
 


  // Related_Products_slider
  $('.Related_Products_slider').owlCarousel({
    loop:true,
    margin:10,
    items:4,
    navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    nav:true,
    dots:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        768:{
            items:3
        },
        992:{
            items:4
        }
    }
})

  // Address_slider
  $('.Address_slider').owlCarousel({
    loop:true,
    margin:0,
    items:4,
    nav:false,
    dots:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
})

  // card_slider
  $('.card_slider').owlCarousel({
    loop:true,
    margin:0,
    items:4,
    nav:false,
    dots:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        550:{
            items:2
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
})


})(jQuery);
