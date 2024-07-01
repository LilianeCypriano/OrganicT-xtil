const adiciona = () => {
  let carrinho = document.getElementsByClassName("botao");

  if (carrinho.length > 0) {
      alert("O item foi adicionado à sacola!");
      let sacola = "";
      for (let i = 0; i < carrinho.length; i++) {
          sacola += carrinho[i].innerText + "opa ";
      }
      console.log(sacola);
  }
}


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






// teste carrinho


// Descricao = CARD-TITLE e  valor de acordo com o index

