const questionsService = require("../services/question.service.server");
module.exports = function (app) {
  app.get("/api/quizzes/:qzid/questions", (req, res) =>
    res.json(questionsService.findQuestionsForQuiz(req.params["qzid"]))
  );
};
