import { Course } from './models/course.model';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable()
export class CourseService {
  constructor(private http: HttpClient) {}

  API_URL = 'https://viniro-me.eadbox.com/api/courses';

  getCourses() {
    return this.http.get<Course[]>(this.API_URL);
    // .pipe(catchError((error: any) => Observable.throw(error.toJson())));
  }
}
