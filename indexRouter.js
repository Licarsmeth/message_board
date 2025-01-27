const {Router} = require("express");
const indexRouter = Router();

const messages = [
    {
      text: "You've grown so much. You took all the blame.",
      user: "Rachel",
      added: new Date().toISOString()
    },
    {
      text: "WE WERE ON A BREAK!!!",
      user: "Ross",
      added: new Date().toISOString()
    }
  ];

indexRouter.get("/", (req,res) => 
res.render("index", {title: 'Mini messegeboard', messages : messages})
);

module.exports = {indexRouter, messages};