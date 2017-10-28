// CORE PACKGES
const express = require("express");

// DEFINE ROUTER
const router = express.Router();

// DEFINE ROUTES --- ****START*****
    // GET ROUTES --- *****START***
        // home route
        router.get("/", (req, res) => {
            res.render("homepage", {pageTitle: "Homepage", img: "img/suit_businessman.jpeg"});
        });

        // about route
        router.get("/about", (req, res) => {
            res.render("about", {pageTitle: "About Us", img: {
                one: "img/shoes.jpg",
                two: "img/lenses.jpeg"
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
        })
    // GET ROUTES --- ****END****

    // POST ROUTES --- *****START***

    // POST ROUTES --- ****END****
// DEFINE ROUTES --- *****END*****


// EXPORT ROUTER
module.exports = router;