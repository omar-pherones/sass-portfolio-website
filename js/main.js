window.addEventListener('scroll', function () {
    let header = document.querySelector('nav');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// var mixer = mixitup('.PortfolioContainer');

$('#bar1').barfiller();
$('#bar2').barfiller();
$('#bar3').barfiller();


// services
new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});

$('.js-tilt').tilt({
    max: 25,
    speed: 400
})


// counter

$('.count').each(function () {
    $(this)
        .prop('Counter', 0)
        .animate(
            {
                Counter: $(this).text(),
            },
            {
                duration: 3000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                },
            }
        );
});


// testimonial
$('.testimonialContainer').slick({
    dots: true,
    mobileFirst: true,
    autoplaySpeed: 4000,
    infinite: true,
    autoplay:true,
    speed: 300,
    arrows:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });

  var mixer = mixitup('.portfolioContainer');