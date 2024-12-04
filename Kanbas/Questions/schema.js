import mongoose from "mongoose";
const questionSchema = new mongoose.Schema(
  {
    type: String,
    title: String,
    points: Number,
    question: String,
    possibleAnswers: [String],
    correctAnswer: String,
    quiz: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel" },
  },
  { collection: "questions" }
);
export default questionSchema;
