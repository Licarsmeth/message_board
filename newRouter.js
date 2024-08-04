const { Router } = require("express");
const newRouter = Router();

newRouter.get("/", (req, res) => res.send("new messages"));

module.exports = newRouter;
