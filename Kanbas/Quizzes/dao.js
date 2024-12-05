import model from "./model.js";
export function findQuizzesForCourse(courseId) {
  return model.find({ course: courseId });
}
export function findPublishedQuizzesForCourse(courseId) {
  return model.find({ course: courseId, published: true });
}
export function createQuiz(quiz) {
  delete quiz._id;
  return model.create(quiz);
}
export function deleteQuiz(quizId) {
  return model.deleteOne({ _id: quizId });
}
export function updateQuiz(quizId, quizUpdates) {
  return model.updateOne({ _id: quizId }, quizUpdates);
}
export function deleteAllQuizzesForCourse(courseId) {
  return model.deleteMany({ course: courseId });
}
