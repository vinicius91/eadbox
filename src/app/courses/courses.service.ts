import { Course } from './models/course.model';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
@Injectable()
export class CourseService {

  constructor(private store: Store<{ app: fromApp.State }>) {

  }

  private courses: Course[];

  getCourses() {
    this.courses = [];
  }

  getCourse(courseId: string) {
    this.courses = [];
  }
}
