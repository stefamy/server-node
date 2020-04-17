const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://heroku_1zvwwvfp:k96ca8q1uk0oio389ju9s43ho1@ds127938.mlab.com:27938/heroku_1zvwwvfp",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const bodyParser = require("body-parser");

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
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./controllers/quiz-attempts.controller.server")(app);
require("./controllers/quizzes.controller.server")(app);
require("./controllers/questions.controller.server")(app);

app.listen(process.env.PORT || 3000);
