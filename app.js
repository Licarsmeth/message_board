const express = require('express');
const indexRouter = require('./indexRouter');
const newRouter = require('./newRouter');
const app = express();
const path = require("node:path");
const exp = require('node:constants');
app.set("view engine", "ejs");
const assetPath = path.join(__dirname, "public");
app.use((express.static(assetPath)));

app.use("/", indexRouter);
app.use("/new", newRouter);

app.listen(8000, () => console.log("8000 listening"))