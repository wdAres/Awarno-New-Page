// Slider

$("#slider-box").slick({
  centerMode: true,
  slidesToShow: 4,
  arrows: false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 8000,
  pauseOnHover: false,
  cssEase: 'linear',

  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1.9,
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
      },
    }
  ],
});



$("#slider-2").slick({
  centerMode: true,
  // centerPadding: '60px',
  slidesToShow: 4,
  arrows: true,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
      },
    },
    // {
    //   breakpoint: 700,
    //   settings: {
    //     slidesToShow: 1,
    //   },
    // },
    {
      breakpoint: 550,
      settings: {
        // centerMode : false ,
        slidesToShow: 2,
        arrows : false 
      },
    },
    {
      breakpoint: 410,
      settings: {
        slidesToShow: 1,
        arrows : false 
      },
    }
  ],
});
