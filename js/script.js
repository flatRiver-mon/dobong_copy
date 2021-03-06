$(document).ready(function(){

    let tabContentNum = 0;

    // a 태그 클릭시 상단으로 이동하는 기능 블록
    $("a[href='#']").click(function(e){
        e.preventDefault();
    });
    $("#menu > li > a").mouseover(function(){
        $("#menu > li > ul").hide()
        $(this).siblings("ul").stop().slideDown()
    })
    $("#menu > li > ul").mouseleave(function(){
        $(this).hide()
    })
    
    $(".search-wrap .search-box .search-input").focus(function(){
        $(".search-wrap .search-box").addClass("focusing")
    })
    $(".search-wrap .search-box .search-input").blur(function(){
        $(".search-wrap .search-box").removeClass("focusing")
    })
    $("#page-nav > ul > li").click(function(){
        let indexNum = $(this).index()
        fullpage_api.moveTo(indexNum+1);
        if(indexNum == 0){
            $("#page-nav > ul").removeClass("blue")
            $("#page-nav > ul").removeClass("black")
        }else if(indexNum == 1){
            $("#page-nav > ul").addClass("blue")
            $("#page-nav > ul").removeClass("black")
        }else if(indexNum >= 2 || indexNum < 6){
            $("#page-nav > ul").removeClass("blue")
            $("#page-nav > ul").addClass("black")
        }
        $(this).siblings("li").find("a").removeClass("active")
        $(this).find("a").addClass("active")
    })
    $(".fullpage").fullpage({
        afterLoad: function(origin, destination, direction){
            $("#page-nav > ul > li").eq(destination.index).trigger("click")
            if( destination.index == 1 ){
                $(".section02 .background-logo-box").addClass("active")
                $(".section02 .intro-title").addClass("active")
                $(".section02 .left-tab").addClass("active")
                $(".section02 .tab-btn-box").addClass("active")
                $(".section02 .info-title").addClass("active")
                $(".section02 .info-text").addClass("active")
                $(".section02 .view-btn").addClass("active")
            }else if( destination.index == 2){
                $(".section03 .title-box h3").addClass("active")
                $(".section03 .title-box p").addClass("active")
                $(".section03 .gover-slider-wrap").addClass("active")
            }else if( destination.index == 3){
                $(".section04 .title-box h3").addClass("active")
                $(".section04 .title-box p").addClass("active")
                $(".section04 .board-wrap > .left").addClass("active")
                $(".section04 .board-wrap > .right").addClass("active")
            }else if( destination.index == 4){
                $(".section05 .title-box h3").addClass("active")
                $(".section05 .title-box p").addClass("active")
                $(".section05 .board-wrap > .left").addClass("active")
                $(".section05 .board-wrap > .right").addClass("active")
            }else if( destination.index == 5){
                $("#page-nav").fadeOut()
                $("#header-nav-wrap").fadeOut()
            }
        },
        onLeave: function(origin, destination, direction){
            if(destination.index >= 1){
                $(".header-nav").addClass("black")
            }else if(destination.index == 0){
                $(".header-nav").removeClass("black")
            }
            if(origin.index == 5){
                $("#page-nav").fadeIn()
                $("#header-nav-wrap").fadeIn()
            }
        },
    })
    
    $(".main-slider").slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:4000,
        asNavFor:".main-slider-text-box",
    })

    $(".main-slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(".main-box > .control-box > .page-box > .page-count").text("0"+(nextSlide+1))
    });
    $(".main-slider").on('afterChange', function(event, slick, currentSlide){
        $(".main-slider-text-box .main-text-box").find("p").removeClass("active")
        $(".main-slider-text-box .main-text-box").eq(currentSlide).find("p").addClass("active")
    });

    $(".main-box > .control-box > .left-btn").click(function(){
        $(".main-slider").slick("slickPrev")
    })

    $(".main-box > .control-box > .right-btn").click(function(){
        $(".main-slider").slick("slickNext")
    })

    $(".main-slider-text-box").slick({
        arrows:false,
        fade:true,
        asNavFor:".main-slider",
    })
    
    $(".section02 .tab-box > .left-tab > .year-box > li").click(function(){
        let indexNum = $(this).index()
        tabContentNum = indexNum
        // 자신에게 active 부여 및 다른 active 없앰
        $(".section02 .tab-box > .left-tab > .year-box > li").find(".react-text").removeClass("active")
        $(this).find(".react-text").addClass("active")

        // 자신의 indexNum 에 맞는 tab-content 활성화
        $(".section02 .tab-box > .right-tab > .tab-content").removeClass("active")
        $(".section02 .tab-box > .right-tab > .tab-content").eq(indexNum).addClass("active")

        // 좌측 탭 변경시 우측 탭을 초기화 상태로 변경
        $(".section02 .tab-box > .right-tab > .tab-content").find(".tab-btn").removeClass("active")
        $(".section02 .tab-box > .right-tab > .tab-content").find(".tab-info").removeClass("active")
        $(".section02 .tab-box > .right-tab > .tab-content").eq(indexNum).find(".tab-btn").eq(0).addClass("active")
        $(".section02 .tab-box > .right-tab > .tab-content").eq(indexNum).find(".tab-info").eq(0).addClass("active")
    })

    $(".section02 .tab-box > .right-tab > .tab-content > .tab-btn-box > .tab-btn").click(function(){
        let indexNum = $(this).index()

        // 자신에게 active 부여 및 다른 active 없앰
        $(this).siblings().removeClass("active")
        $(this).addClass("active")

        $(".section02 .tab-box > .right-tab > .tab-content").find(".tab-info").removeClass("active")
        $(".section02 .tab-box > .right-tab > .tab-content").eq(tabContentNum).find(".tab-info").eq(indexNum).addClass("active")
    })

    $(".gover-slider").slick({
        arrows:false,
        slidesToShow:3,
        autoplay:true,
        autoplaySpeed:4000,
    })
    $(".section03 .gover-slider-wrap .btn-box > .left-btn").click(function(){
        $(".gover-slider").slick("slickPrev")
    })
    $(".section03 .gover-slider-wrap .btn-box > .right-btn").click(function(){
        $(".gover-slider").slick("slickNext")
    })

    $(".book-slider").slick({
        arrows:false,
        slidesToShow:2,
        autoplay:true,
        autoplaySpeed:4000,
    })
    $(".section05 .book-slider-wrap .btn-box .left-btn").click(function(){
        $(".book-slider").slick("slickPrev")
    })
    $(".section05 .book-slider-wrap .btn-box .right-btn").click(function(){
        $(".book-slider").slick("slickNext")
    })

    $(".related-sites-btn").click(function(){
        if($(this).hasClass("active")){
            $(this).removeClass("active")
            $(".footer-wrap .footer-top .related-sites-box ul").slideToggle()
        }else if(!$(this).hasClass("active")){
            $(this).addClass("active")
            $(".footer-wrap .footer-top .related-sites-box ul").slideToggle()
        }
    })
})