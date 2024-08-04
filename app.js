const express = require('express');
const indexRouter = require('./indexRouter');
const newRouter = require('./newRouter');
const app = express();

app.use("/", indexRouter);
app.use("/new", newRouter);

app.listen(8000, () => console.log("8000 listening"))