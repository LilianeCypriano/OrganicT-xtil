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
        // ]
    });
});

// $('#carrousel').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3
//   });