import model from "./model.js";
export function enrollUserInCourse(user, course) {
  return model.create({ user, course });
}
export function unenrollUserFromCourse(user, course) {
  return model.deleteOne({ user, course });
}
export function findEnrollmentsForUser(user) {
  return model.find({ user });
}
export async function findCoursesForUser(user) {
  const enrollments = await model.find({ user }).populate("course");
  return enrollments.map((enrollment) => enrollment.course);
}
