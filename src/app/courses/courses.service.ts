import { Course } from './models/course.model';

export class CourseService {

  private courses: Course[];

  getCourses() {
    this.courses = [];
  }

  getCourse(courseId: string) {
    this.courses = [];
  }
}
