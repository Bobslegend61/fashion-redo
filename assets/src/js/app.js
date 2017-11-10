let $ = require("jquery");
require("slick-carousel");
require("../scss/style.scss");

$(document).ready(function() {
    //////////// STYLING AND INTERACTION ------ START ----- ///////////////
    $("#product .product-display").slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "ease-in-out",
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                }
            }
        ]
    });

    $("#product .product-display img").on("click", (e) => {
        let imageSource = e.target.getAttribute("src");
        $("#product .main-display").attr("src", imageSource);
    });

    $("#slider").slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "ease-in-out",
        responsive: [
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            }
        ]
    })
    // hide navbar on init
    $("#mobile-nav, #mobile-search, #homepage #layout-nav").css({
        display: "none"
    });
    $("#homepage #layout-nav").css("position", "fixed");
    $("#layout-page #layout-nav").css("position", "fixed");

    // toggle navbar mobile menu
    $("#landing-page .fa-bars").on("click", () => {
        $("#mobile-nav").slideToggle("slow");
    });

    // toggle navbar layout menu
    $("#layout-nav .fa-bars").on("click", () => {
        // $("#layout-nav").toggleClass("layout-height");
        $("#layout-nav #menu-items").slideToggle("slow");
    });

    //  toggle navbar menu search input
    $(".search-icon .fa-search").on("click", () => {
        $("#mobile-search, #homepage #layout-nav #mobile-search").slideToggle();
        $("#mobile-search input").attr("autofocus", "autofocus");
    });

    // collaspe in mobile 
    $(".nav-item p").on("click", (e) => {
        $(e.currentTarget.nextSibling).slideToggle();
    });


    // check for scroll on home page
    $(window).on("scroll", () => {
        if($(this).width() <= 770) {
            if($(this).scrollTop() > 400) {
                $("#homepage #layout-nav").fadeIn("slow");
            }else{
                $("#homepage #layout-nav").fadeOut("slow");
            }
        }else {
            if($(this).scrollTop() > 2) {
                $("#desktop-nav").css("position", "fixed");
            }else {
                $("#desktop-nav").css("position", "static");
            }

            if($(this).scrollTop() > 200) {
                $("#homepage #desktop-nav").css("background-color", "#404041");
                $("#homepage #desktop-nav").css("z-index", 2);
                $("#homepage #brand-name, #homepage #desktop-nav #desktop-search input").css("opacity", 1);
            }else {
                $("#homepage #desktop-nav").css("background-color", "transparent");
                $("#homepage #brand-name, #homepage #desktop-nav #desktop-search input").css("opacity", 0);
            }
        }
    });


    // /// DESKTOP NAVBAR --- START --- /////////
  
    // /// DESKTOP NAVBAR --- END --- ////////

    //////////// STYLING AND INTERACTION ------ START ----- ///////////////


    /////////////////// WEBSITE LOGIC ----- START ------- //////////////// 

    /////////////////// WEBSITE LOGIC ----- END ------- ////////////////
});