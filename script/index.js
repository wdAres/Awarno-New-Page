// Slider

$("#slider-box").slick({
  centerMode: true,
  // centerPadding: '60px',
  slidesToShow: 4,
  arrows: false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,

  responsive: [
    {
      breakpoint: 1300,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: "0px",
        slidesToShow: 1.9,
      },
    },
    {
      breakpoint: 550,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    }
  ],
});



$("#slider-2").slick({
  centerMode: true,
  // centerPadding: '60px',
  slidesToShow: 3,
  arrows: true,
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
