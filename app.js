const express = require("express");
const { indexRouter } = require("./indexRouter");
const newRouter = require("./newRouter");
const app = express();
const path = require("node:path");

//for ejs as view engine, looks for default path "views"
app.set("view engine", "ejs");

//for css and stuff
const assetPath = path.join(__dirname, "public");
app.use(express.static(assetPath));

//for the post methods to get url data in req.body
app.use(express.urlencoded({ extended: true }));

//configure the various routes
app.use("/", indexRouter);
app.use("/new", newRouter);

const port = process.env.PORT || 8080;
app.listen(port, "0.0.0.0", () => console.log(`Server running on port ${port}`));
