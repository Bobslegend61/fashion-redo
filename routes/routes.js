// CORE PACKGES
const express = require("express");
const Geonames = require("geonames.js");
let geonames = new Geonames({username:"alabi", lan: "en", encoding: "JSON"});


// DATA
const data = [
    {
        brandName: "rrr",
        category: "women",
        type: "black",
        color: ["Black"],
        description: ["collared", "concealed side pocket","fuly lined","long sleeve","sleeve button"],
        sizes: [2.4, 5.8],
        inStock: 10,
        displayPixLink: "img/b.jpg",
        showCaseLink: ["img/b1.jpg", "img/b2.jpg", "img/b3.jpg", "img/b4.jpg", "img/b5.jpg", "img/b6.jpg", "img/b7.jpg"],
        details: "Hello",
        price: 7500
    },
    {
        brandName: "crusaders",
        category: "women",
        type: "mixed",
        color: ["Red"],
        sizes: [2.4, 5.8],
        inStock: 10,
        description: ["collared", "concealed side pocket","fuly lined","long sleeve","sleeve button"],
        displayPixLink: "img/f.jpg",
        showCaseLink: ["img/f1.jpg","img/f2.jpg", "img/f3.jpg","img/f4.jpg","img/f5.jpg","img/f6.jpg","img/f7.jpg"],
        details: "Hello",
        price: 4000
    },
    {
        brandName: "Nick",
        category: "shoes",
        type: "nick",
        color: ["White"],
        sizes: [2.4, 5.8],
        inStock: 10,
        description: ["collared", "concealed side pocket","fuly lined","long sleeve","sleeve button"],
        displayPixLink: "img/n.jpg",
        showCaseLink: ["img/n1.jpg","img/n2.jpg", "img/n3.jpg","img/n4.jpg","img/n5.jpg","img/n6.jpg","img/n7.jpg"],
        details: "Hello",
        price: 4000
    },
    {
        brandName: "Diamond",
        category: "women",
        type: "white",
        color: ["White"],
        sizes: [2.4, 5.8],
        inStock: 10,
        description: ["collared", "concealed side pocket","fuly lined","long sleeve","sleeve button"],
        displayPixLink: "img/l.jpg",
        showCaseLink: ["img/l1.jpg","img/l2.jpg", "img/l3.jpg","img/l4.jpg","img/l5.jpg","img/l6.jpg","img/l7.jpg"],
        details: "Hello",
        price: 8000
    },
    {
        brandName: "Fins",
        category: "shoes",
        type: "hills",
        color: ["Red"],
        sizes: [2.4, 5.8],
        inStock: 10,
        description: ["collared", "concealed side pocket","fuly lined","long sleeve","sleeve button"],
        displayPixLink: "img/s.jpg",
        showCaseLink: ["img/s1.jpg","img/s2.jpg", "img/s3.jpg","img/s4.jpg","img/s5.jpg","img/s6.jpg","img/s7.jpg"],
        details: "Hello",
        price: 750
    },
    {
        brandName: "ii",
        category: "women",
        type: "sleeveless",
        color: ["Red"],
        sizes: [2.4, 5.8],
        inStock: 10,
        description: ["collared", "concealed side pocket","fuly lined","long sleeve","sleeve button"],
        displayPixLink: "img/r.jpg",
        showCaseLink: ["img/r1.jpg","img/r2.jpg", "img/r3.jpg","img/r4.jpg","img/r5.jpg","img/r6.jpg","img/r7.jpg"],
        details: "Hello",
        price: 750
    },
    {
        brandName: "hhh",
        category: "women",
        type: "jeans",
        color: ["Blue"],
        sizes: [2.4, 5.8],
        description: ["collared", "concealed side pocket","fuly lined","long sleeve","sleeve button"],
        inStock: 10,
        displayPixLink: "img/t.jpg",
        showCaseLink: ["img/t1.jpg","img/t2.jpg", "img/t3.jpg","img/t4.jpg","img/t5.jpg","img/t6.jpg"],
        details: "Hello",
        price: 750
    },
    {
        brandName: "D&G",
        category: "women",
        type: "Gown",
        color: ["White"],
        sizes: [2.4, 5.8],
        inStock: 10,
        description: ["collared", "concealed side pocket","fuly lined","long sleeve","sleeve button"],
        displayPixLink: "img/w.jpg",
        showCaseLink: ["img/w1.jpg","img/w2.jpg", "img/w3.jpg","img/w4.jpg","img/w5.jpg","img/w6.jpg","img/w7.jpg"],
        details: "Hello",
        price: 750
    },
    {
        brandName: "Gucci",
        category: "bags",
        type: "clutch",
        color: ["Choose a color","Red","blue"],
        sizes: ["choose a size","Size 10 (UK)", "Size 12 (UK)"],
        inStock: 10,
        description: ["collared", "concealed side pocket","fuly lined","long sleeve","sleeve button"],
        displayPixLink: "img/z.jpg",
        showCaseLink: ["img/z1.jpg","img/z2.jpg", "img/z3.jpg","img/z4.jpg","img/z5.jpg","img/z6.jpg","img/z7.jpg"],
        details: "Hello",
        price: 750
    }
]
let countries = ["Afghanistan", "USA", "Italy", "Nigeria", "Ghana", "Algeria", "Zambia", "Kenya", "Russia"];

// DEFINE ROUTER
const router = express.Router();

router.get("/country", (req, res) => {
    geonames.countryInfo({}) 
    .then(function(countries){
    //   return geonames.children({geonameId: countries.geonames[0].geonameId})
    res.json(countries);
    })
})

// DEFINE ROUTES --- ****START*****
    // GET ROUTES --- *****START***
        // home route
        router.get("/", (req, res) => {
            res.render("homepage", {pageTitle: "Ladies Fashion and Accessories - Shop Online at Debras Grace ★", img: "img/suit_businessman.jpeg", data: data});
        });

        // about route
        router.get("/about", (req, res) => {
            res.render("about", {pageTitle: "About Us", img: {
                one: "img/w6.jpg",
                two: "img/w7.jpg"
            }})
        });

        // policy page
        router.get("/policy", (req, res) => {
            res.render("policy", {pageTitle: "Online Policy"});
        });

        // terms and condition
        router.get("/terms-and-condition", (req, res) => {
            res.render("terms", {pageTitle: "Terms and conditions"});
        });

        // contact form
        router.get("/contact-form", (req, res) => {
            res.render("contact", {pageTitle: "Contact Us"})
        });

        // shop
        router.get("/shop", (req, res) => {
            if(req.query.s) {
                let searchTerm = req.query.s;
                let product = data.filter(value => {
                    return value.brandName.indexOf(searchTerm) != -1 || value.category.indexOf(searchTerm) != -1 || value.type.indexOf(searchTerm) != -1
                })
                res.render("all", {pageTitle: "Shop all products", searchTerm, product: product});
            }else {
                res.render("all", {pageTitle: "Shop all products", product: data});
            }
        })
       
        // /product/name
        router.get("/product/:name", (req, res) => {
            let name = req.params.name.replace(/-/g, " ");
            let product = data.filter((value) => {
                return value.brandName == name
            }); 
            res.render("product", {pageTitle: name, product: product[0]});
        });

        // product-category/:category
        router.get("/product-category/:category", (req, res) => {
            if(req.query.productname) {
                let productName = req.query.productname;
                let product = data.filter((value) => {
                    return value.type == productName;
                });
                res.render("product-category-type", {pageTitle: productName, product: product})
            }else {
                let category = req.params.category;
                let product = data.filter((value) => {
                    return value.category == category;
                });
                res.render("product-category", {pageTitle: category, product: product})
            }
        })

        // cart
        router.get("/cart", (req, res) => {
            res.render("cart-display", {pageTitle: "Shopping Cart"});
        })

        // checkout
        router.get("/checkout", (req, res) => {
            countries.sort();
            res.render("checkout", {pageTitle: "Checkout Page", countries});
        })
    // GET ROUTES --- ****END****

    // POST ROUTES --- *****START***

    // POST ROUTES --- ****END****
// DEFINE ROUTES --- *****END*****


// EXPORT ROUTER
module.exports = router;