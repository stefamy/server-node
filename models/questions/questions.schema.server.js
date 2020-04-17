const mongoose = require("mongoose");
const questionsSchema = mongoose.Schema(
  {
    title: { type: String, default: "New Question" },
    question: { type: String, required: true },
    correct: String,
    type: { type: String, enum: ["TRUE_FALSE", "MULTIPLE_CHOICE", "ESSAY"] },
    choices: [String],
  },
  { collection: "questions" }
);
module.exports = questionsSchema;
