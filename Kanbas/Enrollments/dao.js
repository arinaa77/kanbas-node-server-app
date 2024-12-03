import model from "./model.js";
export function enrollUserInCourse(user, course) {
  return model.create({ user, course });
}
export function unenrollUserFromCourse(user, course) {
  return model.deleteOne({ user, course });
}
export function unenrollAllUsersFromCourse(course) {
  return model.deleteMany({ course });
}
export async function findCoursesForUser(user) {
  const enrollments = await model.find({ user }).populate("course");
  return enrollments.map((enrollment) => enrollment.course);
}
export async function findUsersForCourse(course) {
  const enrollments = await model.find({ course }).populate("user");
  return enrollments.map((enrollment) => enrollment.user);
}
