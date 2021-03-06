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
    });

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
                $("#desktop-nav").css("z-index", 2);
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
    // set cart function
    function setCart(opt) {
        if(localStorage.getItem("cart") && JSON.parse(localStorage.getItem("cart")).length > 0) {
            let num = 0;
            let subtotal = 0;
            let listItems = JSON.parse(localStorage.getItem("cart"));
            if(opt != "load") { $(".cart .cart-info .info").html("");}
            for(let i = 0; i < listItems.length; i++) {
                num += Number(listItems[i].quantity);
                subtotal += (Number(listItems[i].price) * Number(listItems[i].quantity));
                $(".cart .cart-info .info").append(`<div class="item">
                                                <a href=/product/${listItems[i].brandName}>
                                                    <div>
                                                        <div class="img">
                                                            <img src=${listItems[i].pix}>
                                                        </div>
                                                        <div class="item-info">
                                                            <p><strong>${listItems[i].brandName}</strong></p>
                                                            <p><strong>&#x20A6;${listItems[i].price}</strong></p>
                                                            <p><strong>${listItems[i].color}</strong></p>
                                                            <p><strong>${listItems[i].size}</strong></p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div class="item-number">${listItems[i].quantity}</div>
                                                <div class="close">&times</div>
                                            </div>`);
            }
            $(".cart .cart-item-number").html(`<span>${num}</span>`);
            $(".cart .cart-info .total").html(`<p>subtotal: <span>&#x20A6;${subtotal}</span></p>`);
        }else {
            $(".cart .cart-item-number").html("<span>0</span>");
            $(".cart .cart-info").html("<p>You have no item in your shopping cart</p>");
        }
    }
    // set cart
    setCart("load");
    // add listener to close
    $(document).on("click", ".cart .cart-info .info .close", (e) => {
        let brandName= e.target.offsetParent.firstElementChild.firstElementChild.lastElementChild.firstElementChild.innerText;
        let size= e.target.offsetParent.firstElementChild.firstElementChild.lastElementChild.lastElementChild.innerText;
        let color= e.target.offsetParent.firstElementChild.firstElementChild.lastElementChild.children[2].innerText;
        let listItem = JSON.parse(localStorage.getItem("cart"));
        for(let i =0; i < listItem.length; i++) {
            if(listItem[i].brandName.toLowerCase() == brandName.toLowerCase() && listItem[i].color.toLowerCase() == color.toLowerCase() && listItem[i].size.toLowerCase() == size.toLowerCase()) {
                listItem.splice(i, 1);
            }
        }
        localStorage.setItem("cart", JSON.stringify(listItem));
        setCart("remove");
    })

    // /// DESKTOP NAVBAR --- START --- /////////
  
    // /// DESKTOP NAVBAR --- END --- ////////

    //////////// STYLING AND INTERACTION ------ START ----- ///////////////


    /////////////////// WEBSITE LOGIC ----- START ------- //////////////// 
    // check for changes on inputs for add to cart
    // $("#product .color-and-size select[name='productColor'], #product .color-and-size select[name='productSize'], #product .add-to-cart input").on("change", () => {
    //     $("#product .error").text("");
    // })
    // add to cart
    $(document).on("click","#product .add-to-cart button", () => {
        $("#product #error div").text("Please wait...");
        let color = $("#product .color-and-size select[name='productColor']").val();
        let size = $("#product .color-and-size select[name='productSize']").val();
        let brandName = window.location.pathname.split("/")[2];
        let pix = $("#product .images .main-display").attr("src");
        let quantity = $("#product .add-to-cart input").val();
        let price = $("#product .info .name h3 span").text();
        if(color.toUpperCase() === "CHOOSE A COLOR" || size.toUpperCase() === "CHOOSE A SIZE" || quantity == "") {
            $("#product #error div").html("<i class='fa fa-exclamation-circle'></i><span>&nbsp;Please select an option(color and size) and quantity</span>").removeClass("success").addClass("error");
        }else {
            if(localStorage.getItem("cart") && !JSON.parse(localStorage.getItem("cart")).length < 1 && typeof JSON.parse(localStorage.getItem("cart")) === "object") {
                let cartItems = JSON.parse(localStorage.getItem("cart"));
                let itemFound = "No";
                for(let i = 0; i < cartItems.length; i++) {
                    if(cartItems[i].brandName == brandName && cartItems[i].size == size && cartItems[i].color.toUpperCase() == color.toUpperCase()) {
                        itemFound = "Yes"
                        cartItems[i].quantity = Number(cartItems[i].quantity) + Number(quantity);
                        break;
                    }
                }
                if(itemFound === "No") {
                    cartItems.push({
                        brandName, pix, size, quantity, color, price
                    });
                }

                localStorage.setItem("cart", JSON.stringify(cartItems));
            }else {
                let cartItem = [{
                    brandName, pix, size, quantity, color, price
                }];
                localStorage.setItem("cart", JSON.stringify(cartItem));
            }
            $("#product #error div").html("<i class='fa fa-check'></i><span>&nbsp;Item has been added to cart</span>").removeClass("error").addClass("success");
            if(!$(".cart .cart-info").hasClass("info")) {
                $(".cart .cart-info").html(`<div class='info'></div>
                                            <div class="total"></div>
                                            <div class="checkout">
                                                <a href="/cart">View Cart</a>
                                                <span>&nbsp;</span>
                                                <a href="/checkout">Checkout</a>
                                            </div>`);
            }
            setCart("remove");
        }
    })

    // /cart ROUTE
    function cartRoute() {
        if(window.location.pathname === "/cart") {
            if(!localStorage.getItem("cart") || JSON.parse(localStorage.getItem("cart")).length < 1 || typeof JSON.parse(localStorage.getItem("cart")) != "object") {
                $("#cart-display .cart-body").html(`<div class='no-item-error'>
                                                    <p><i class="fa fa-exclamation-circle"></i><span>&nbsp;You've not added any item to your shopping cart</span></p>
                                                    </div>
                                                    <div class='delivery-time-info'>
                                                    <p><i class="fa fa-calendar-o"></i><span>&nbsp;Checkout is not available whilst your cart is empty.</span></p>
                                                    </div>
                                                    <div class="return-to-shop">
                                                        <p>Your cart is currently empty</p>
                                                        <a href="/shop">Return to shop</a>
                                                    </div>`)
            }else {
                let cartItems = JSON.parse(localStorage.getItem("cart"));
                let grandTotal = 0
                $("#cart-display .cart-body .cart-product-info").html("");
                $("#cart-display .cart-body .cart-product-total-info").html("");
                cartItems.forEach((item) => {
                    grandTotal += Number(item.quantity) * Number(item.price);
                    $("#cart-display .cart-body .cart-product-info").prepend(`<div class="row">
                                                                                <div class="col-sm-4 col-md-2 col-lg-2">
                                                                                    <img src=${item.pix} >
                                                                                </div>
                                                                                <div class="col-sm-8 col-md-10 col-lg-10">
                                                                                    <p><strong>${item.brandName.toUpperCase()}
                                                                                    </strong></p>
                                                                                    <div class="row">
                                                                                        <div class="col-sm-6 col-md-12 col-lg-12">
                                                                                            <p>${item.color}</p>
                                                                                            <p>${item.size}</p>
                                                                                        </div>
                                                                                        <div class="col-sm-6 col-md-12 col-lg-12">
                                                                                            <p>${item.quantity} &times; &#x20A6;${item.price}</p>
                                                                                            <p>Subtotal: <span>&#x20A6;${Number(item.quantity) * Number(item.price)}</span></p>
                                                                                            <button type="button" style="float:right;">Remove</button>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>`)
                });
                $("#cart-display .cart-body .cart-product-total-info").html(`<div>
                                                                                <p><strong>Shipping</strong><span>There are no shipping methods available. Please double check your address, or contact us if you need any help.</span></p>
                                                                                <p class="grand-total"><strong>Total</strong><span>&#x20A6;${grandTotal}</span></p>
                                                                                <hr>
                                                                                <a href="/checkout">Proceed to checkout</a>
                                                                            </div>`)
            }
        }
    }

    // run cart route function
    cartRoute();

    // check if remove on /cart page
    $(document).on("click", "#cart-display .cart-body .cart-product-info button", (e) => {
        let color = e.target.parentElement.parentElement.firstElementChild.children[0].innerText.trim();
        let size = e.target.parentElement.parentElement.firstElementChild.children[1].innerText.trim();
        let brandName = e.target.parentElement.parentElement.parentElement.firstElementChild.innerText.trim();
        let listItem = JSON.parse(localStorage.getItem("cart"));
        for(let i =0; i < listItem.length; i++) {
            if(listItem[i].brandName.toLowerCase() == brandName.toLowerCase() && listItem[i].color.toLowerCase() == color.toLowerCase() && listItem[i].size.toLowerCase() == size.toLowerCase()) {
                listItem.splice(i, 1);
            }
        }
        localStorage.setItem("cart", JSON.stringify(listItem));
        cartRoute();
    }) 

    // /checkout ROUTE
    if(window.location.pathname === "/checkout") {
        if(!localStorage.getItem("cart") || JSON.parse(localStorage.getItem("cart")).length < 1 || typeof JSON.parse(localStorage.getItem("cart")) != "object") {
            window.location = "/cart";
        }else {
            let cartItems = JSON.parse(localStorage.getItem("cart"));
            let orderTotal = 0
            cartItems.forEach((item) => {
                orderTotal += Number(item.quantity) * Number(item.price)
                $("#checkout .order-details table tbody").prepend(`<tr class="t">
                                                                    <td>${item.brandName.toUpperCase()} &times; ${item.quantity}</td>
                                                                    <td>&#x20A6;${Number(item.quantity) * Number(item.price)}</td>
                                                                   </tr>`)
            });
            $("#checkout .order-details table tbody").append(`<tr>
            <td><strong>ORDER TOTAL</strong></td>
            <td><strong>&#x20A6;${orderTotal}</strong></td>
           </tr>`)
        }
    }

    // place order
    $(document).on("click","#checkout .billing-and-order-details button", () => {
        let userInfoPassedSecurityCheck = true;
        let userInfo = {
            firstname: $("#checkout .billing-and-order-details input[name='firstname']").val(),
            lastname: $("#checkout .billing-and-order-details input[name='lastname']").val(),
            email: $("#checkout .billing-and-order-details input[name='email']").val(),
            phonenumber: $("#checkout .billing-and-order-details input[name='phonenumber']").val(),
            streetaddress: $("#checkout .billing-and-order-details input[name='streetaddress']").val(),
            town_city: $("#checkout .billing-and-order-details input[name='town_city']").val(),
            companyname: $("#checkout .billing-and-order-details input[name='companyname']").val(),
            postal: $("#checkout .billing-and-order-details input[name='postal']").val(),
            country: $("#checkout .billing-and-order-details select[name='country']").val(),
            state: $("#checkout .billing-and-order-details select[name='state']").val(),
            terms: document.getElementById("terms").checked 
        }
        
        // check emptiness of field
        Object.keys(userInfo).forEach(key => {
            if(key == "terms") {
                if(userInfo[key] == false) {
                    $(`#checkout .billing-and-order-details .order-details .no-item-error span`).html("&nbsp; Ooops!!! You must accept our <a href='/terms-and-condition'>Terms & Conditions</a>");
                    $(`#checkout .billing-and-order-details .order-details .no-item-error`).css("display","block");
                    userInfoPassedSecurityCheck = false;
                }else {
                    $(`#checkout .billing-and-order-details .order-details .no-item-error`).css("display","none");
                }
            }else {
                if(!userInfo[key] || userInfo[key].trim() == "") {
                    $(`#checkout .billing-and-order-details input[name=${key}] + .no-item-error span`).html("&nbsp; Field is required");
                    $(`#checkout .billing-and-order-details input[name=${key}] + .no-item-error`).css("display","block");
                    userInfoPassedSecurityCheck = false;
                }else {
                    $(`#checkout .billing-and-order-details input[name=${key}] + .no-item-error`).css("display","none");
                }
            }
        })

        // validate email
        if(userInfo.email) {
            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!re.test(userInfo.email)) {
                $(`#checkout .billing-and-order-details input[type="email"] + .no-item-error span`).html("&nbsp; Invalid Email Address");
                $(`#checkout .billing-and-order-details input[type=email] + .no-item-error`).css("display","block");
                userInfoPassedSecurityCheck = false;
            }
        }

        if(userInfoPassedSecurityCheck) {
            let orderItems = JSON.parse(localStorage.getItem("cart"));
            let randomText = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"+userInfo.firstname.toUpperCase()+userInfo.lastname.toUpperCase()+userInfo.phonenumber;
            let orderId = "";
            for(let i = 0; i <= 6; i++) {
                let randomNumber = Math.ceil(Math.random() * (randomText.length - 1));
                orderId += randomText[randomNumber];
            }
            let userCompleteInfo = {
                userInfo,
                orderId,
                orderItems
            }
            console.log(userCompleteInfo);
            window.location = "/";
        }
    })

    // /shop and search ROUTE
    if(window.location.pathname == "/shop") {
        if(window.location.search.trim() != "" && window.location.search.indexOf("?s=") != -1) {
            $("#layout-page.all-page #layout-nav #mobile-search").css("display", "block");
        }
    }

    // listen for search form submit
    $("#layout-nav #mobile-search form, #mobile-nav #mobile-search form, #desktop-nav #desktop-search form, #landing-page-form form").on("submit", (e) => {
        if(e.target.children[0].value.trim() == "") {
            e.preventDefault();
        }
    })
    /////////////////// WEBSITE LOGIC ----- END ------- ////////////////
});