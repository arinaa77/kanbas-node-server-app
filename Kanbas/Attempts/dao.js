import model from "./model.js";
export function createAttempt(attempt) {
  delete attempt._id;
  return model.create(attempt);
}
export function deleteAllAttemptsOfQuiz(quizId) {
  return model.deleteMany({ quiz: quizId });
}
export function findAttemptsForUser(user) {
  return model.find({ user });
}
export function updateAttempt(attemptId, attemptUpdates) {
  return model.updateOne({ _id: attemptId }, attemptUpdates);
}
