import { Course } from './models/course.model';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable()
export class CourseService {
  constructor(private http: Jsonp) {}

  API_URL = 'https://viniro-me.eadbox.com/api/courses&callback=JSONP_CALLBACK';

  getCourses() {
    return this.http
      .request(this.API_URL)
      .pipe(catchError((error: any) => Observable.throw(error.toJson())));
  }
}
