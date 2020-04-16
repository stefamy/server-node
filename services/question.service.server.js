const questions = require('./questions')

findAllQuestions = () => questions
findQuestionById = (qid) =>
    questions.find(question =>
        question._id === qid)
findQuestionsForQuiz = (qzid) =>
    questions.filter(question =>
        question.quizId === qzid
    )
module.exports = {
    findAllQuestions,
    findQuestionById,
    findQuestionsForQuiz
}
