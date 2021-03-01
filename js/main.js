$(function(){

    $('.slider__content').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-left.svg" alt="Левая"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrow-right.svg" alt="Правая"></button>',
    
    });


    $(".star").rateYo({
        rating: "4.4",
        starWidth: "20px",
        ratedFill: "#FFC107"
         

    });


   

});


 
    
   
