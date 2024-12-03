import model from "./model.js";
import enrollmentsModel from "../Enrollments/model.js";
export function findAllCourses() {
  return model.find();
}
export function createCourse(course) {
  delete course._id;
  return model.create(course);
}
export function deleteCourse(courseId) {
  enrollmentsModel.deleteMany({ course: courseId });
  return model.deleteOne({ _id: courseId });
}
export function updateCourse(courseId, courseUpdates) {
  return model.updateOne({ _id: courseId }, { $set: courseUpdates });
}
