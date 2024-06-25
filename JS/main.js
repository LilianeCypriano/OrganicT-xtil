
$(document).ready(function(){
    $('.partedecima').slick({
        slidesToShow: 2,  // Quantidade de slides visíveis por vez
        slidesToScroll: 1,  // Quantidade de slides a serem rolados por vez
        autoplay: true,  // Autoplay
        autoplaySpeed: 2000,  // Velocidade do autoplay em milissegundos
        dots: true,  // Exibir pontos de navegação
        // variableWidth: true,
       
        
        // responsive: [
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             slidesToShow: 2
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             slidesToShow: 1
        //         }
        //     }
//         // ]
    });
});

// $('#carrousel').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3
//   });


$(".slider").slick({

// normal options...
infinite: false,

// the magic
responsive: [{

    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      infinite: true
    }

  }, {

    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      dots: true
    }

  }, {

    breakpoint: 300,
    settings: "unslick" // destroys slick

  }]
});

// On swipe event
$('.your-element').on('swipe', function(event, slick, direction){
console.log(direction);
// left
});

// On edge hit
$('.your-element').on('edge', function(event, slick, direction){
console.log('edge was hit')
});

// On before slide change
$('.your-element').on('beforeChange', function(event, slick, currentSlide, nextSlide){
console.log(nextSlide);
});


// Add a slide
$('.your-element').slick('slickAdd',"<div></div>");

// Get the current slide
var currentSlide = $('.your-element').slick('slickCurrentSlide');

// Manually refresh positioning of slick
$('.your-element').slick('setPosition');

$(element).slick({
dots: true,
speed: 500
});

$(element).slick('slickSetOption', 'speed', 5000, true);

$(element).slick('unslick');




