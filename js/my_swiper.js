$(document).ready(function(){

var swiper = new Swiper('.swiper-container', {

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true, 
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
 
  // Default parameters
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  dynamicMainBullets: 3,
  // Responsive breakpoints
  breakpoints: {
    // when window width is <= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
     375: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is <= 480px
    425: {
      slidesPerView: 1,
      spaceBetween:10,
    },
     500: {
      slidesPerView: 1,
      spaceBetween:11,
    },
    525: {
        slidesPerView: 1,
        spaceBetween:11,
    },
    // 530: {
    //   slidesPerView: 1,
    //   spaceBetween: 11
    // },
    560: {
      slidesPerView: 1,
      spaceBetween: 11,
    },

    // 760: {
    //   slidesPerView: 2,
    //   spaceBetween: 15

    // },
    // when window width is <= 640px
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    
    },
    //     788: {
    //   slidesPerView: 2,
    //   spaceBetween: 15
    
    // },
    725: {
      slidesPerView: 1,
      spaceBetween: 25,

    },
 
    //   991: {
    //   slidesPerView: 1,
    //   spaceBetween: 5
    
    // },
    959: {
      slidesPerView: 2,
      spaceBetween: 20,

    },

    //   991: {
    //   slidesPerView: 1,
    //   spaceBetween: 12
    
    // },
    

     1024: {
      slidesPerView: 2,
      spaceBetween: 35,
      
    },
       1288: {
      slidesPerView: 2,
      spaceBetween: 10
    },
      1188: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1193: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    
        1093: {
      slidesPerView: 2,
      spaceBetween: 20
    },
  
  }
})

  swiper.on('resize', function () {

    swiper.pagination.render();

    swiper.pagination.update();

  });
});
