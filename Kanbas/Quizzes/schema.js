import mongoose from "mongoose";
const quizSchema = new mongoose.Schema(
  {
    title: String,
    type: String,
    points: Number,
    assignmentGroup: String,
    shuffleAnswers: Boolean,
    timeLimit: Number,
    multipleAttempts: Boolean,
    attempts: Number,
    showCorrectAnswers: Boolean,
    accessCode: String,
    oneQuestionAtATime: Boolean,
    webcamRequired: Boolean,
    lockAnsweredQuestions: Boolean,
    published: Boolean,
    dueDate: Date,
    availableDate: Date,
    untilDate: Date,
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
  },
  { collection: "quizzes" }
);
export default quizSchema;
