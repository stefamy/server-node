const quizzes = require('./quizzes')

findAllQuizzes = () => quizzes
findQuizById = (quizId) =>
    quizzes.find(quiz => quiz._id === quizId)

module.exports = {
    findAllQuizzes,
    findQuizById
}
