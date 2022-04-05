$(document).ready(function(){

    $(".fullpage").fullpage({

    })

    $(".main-slider").slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:4000,
    })

    $(".main-slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(".main-slider-text-box").slick("slickGoTo", nextSlide)
        $(".main-slider-text-box .main-text-box").find("p").removeClass("active")
        $(".main-slider-text-box .main-text-box").eq(nextSlide+1).find("p").addClass("active")
    });

    $(".main-slider-text-box").slick({
        arrows:false,
    })

    $(".main-slider-text-box").on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(".main-slider").slick("slickGoTo", nextSlide)
    });

})