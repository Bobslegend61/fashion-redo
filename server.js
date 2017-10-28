// REQUIRE CORE PACKAGES
const express = require("express"),
      path = require("path"),
      bodyParser = require("express");

// REQUIRE LOCAL FILES 
const route = require("./routes/routes");
const apiRoute = require("./routes/apiRoutes");

// DEFINE APP
const app = express();

// DEFINE PORT
const PORT = process.env.PORT || 3000;

// SET ENGINE
app.set("view engine", "pug");
//  SET VIEW
app.set("views", path.join(__dirname, "views"));

// USE ROUTES
app.use("/", route);
// USE API ROUTES
app.use("/api", apiRoute);
// SET STATIC FOLDER
app.use(express.static(path.join(__dirname, "assets")));
// DEFINE ERROR OR UNKNOWN ROUTE
app.get("*", (req, res) => {
    res.render("errorpage");
})



// LISTEN TO APP
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})