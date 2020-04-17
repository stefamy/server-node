const quizzesService = require('../services/quizzes.service.server')

module.exports = function (app) {
    app.get('/api/quizzes/:qid', (req, res) =>
        quizzesService.findQuizById(req.params['qid'])
            .then(quiz => res.json(quiz)))
    app.get('/api/quizzes', (req, res) =>
        quizzesService.findAllQuizzes()
            .then(allQuizzes => res.send(allQuizzes)))
}
