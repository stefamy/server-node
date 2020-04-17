const mongoose = require('mongoose')
const questionsSchema = require('./questions.schema.server')
const questionsModel = mongoose.model(
    'QuestionModel',
    questionsSchema
)
module.exports = questionsModel
