const {Router} = require("express");
const indexRouter = Router();

indexRouter.get("/", (req,res) => 
res.send("started")
);

module.exports = indexRouter;