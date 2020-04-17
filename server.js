const ​bodyParser ​= require(​"body-parser");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/amysample", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});
app​.​use​(​bodyParser​.​urlencoded​({ ​extended​: ​false ​}))
app​.​use​(​bodyParser​.​json​())

require(​'./controllers/quizzes.controller.server'​)(​app​)
require("./controllers/quiz.controller.server")(app);
require(​'./controllers/quiz-attempts.controller.server'​)(​app​)
require(​'./controllers/questions.controller.server'​)(​app​)
require("./controllers/question.controller.server")(app);

app.listen(process.env.PORT || 3000);
