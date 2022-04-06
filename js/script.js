$(document).ready(function(){

    // a 태그 클릭시 상단으로 이동하는 기능 블록
    $("a[href='#']").click(function(e){
        e.preventDefault();
    });

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
        $(".main-box > .control-box > .page-box > .page-count").text("0"+(nextSlide+1))
    });

    $(".main-box > .control-box > .left-btn").click(function(){
        $(".main-slider").slick("slickPrev")
    })

    $(".main-box > .control-box > .right-btn").click(function(){
        $(".main-slider").slick("slickNext")
    })

    $(".main-slider-text-box").slick({
        arrows:false,
    })

    $(".main-slider-text-box").on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(".main-slider").slick("slickGoTo", nextSlide)
    });

})