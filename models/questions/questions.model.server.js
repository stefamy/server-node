const mongoose = require("mongoose");
const questionsSchema = require("./questions.schema.server");
const questionsModel = mongoose.model("QuestionsModel", questionsSchema);
module.exports = questionsModel;
