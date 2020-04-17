const mongoose = require("mongoose");
const quizzesSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    questions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "QuestionsModel",
      },
    ],
  },
  { collection: "quizzes" }
);
module.exports = quizzesSchema;
