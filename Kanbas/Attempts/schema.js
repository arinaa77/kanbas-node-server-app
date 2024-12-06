import mongoose from "mongoose";
const attemptSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel" },
    quiz: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel" },
    date: Date,
    score: Number,
    answers: [
      {
        question: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "QuestionModel",
        },
        answer: String,
      },
    ],
    remainingAttempts: Number,
  },
  { collection: "attempts" }
);
export default attemptSchema;
