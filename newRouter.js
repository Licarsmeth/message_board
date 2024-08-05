const { Router } = require("express");
const {messages} = require("./indexRouter");
const newRouter = Router();

newRouter.get("/", (req, res) => res.render("form"));
newRouter.post("/", (req, res) => {
    const user = req.body.name;
    const text = req.body.message;
    messages.push({text: text, user: user, added: new Date()});
    res.redirect("/");
})

module.exports = newRouter;
