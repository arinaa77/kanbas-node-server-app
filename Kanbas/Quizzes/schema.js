import mongoose from "mongoose";
const quizSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    type: String,
    points: Number,
    numQuestions: Number,
    assignmentGroup: String,
    shuffleAnswers: Boolean,
    timeLimit: Number,
    multipleAttempts: Boolean,
    maxAttempts: Number,
    showCorrectAnswers: Boolean,
    accessCode: String,
    oneQuestionAtATime: Boolean,
    webcamRequired: Boolean,
    lockAnsweredQuestions: Boolean,
    published: Boolean,
    dueDate: Date,
    availableFromDate: Date,
    availableUntilDate: Date,
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
  },
  { collection: "quizzes" }
);
export default quizSchema;
