let $ = require("jquery");
require("../scss/style.scss");

$(document).ready(function() {
    //////////// STYLING AND INTERACTION ------ START ----- ///////////////


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