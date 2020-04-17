const quizAttemptsDao = require("../daos/quiz-attempts.dao.server");

const createAttempt = (qid, attempt) =>
  quizAttemptsDao.createAttempt(qid, attempt);
const findAttemptsForQuiz = (qid) => quizAttemptsDao.findAttemptsForQuiz(qid);

module.exports = { createAttempt, findAttemptsForQuiz };
