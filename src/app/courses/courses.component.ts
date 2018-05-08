import { Component, OnInit } from '@angular/core';
import { CourseService } from './courses.service';
import { Course } from './models/course.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import * as fromApp from '../store/app.reducer';
import { data } from './models/mockdata';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  // courses$: Observable<Course[]>;
  courses$: Course[];
  constructor(
    private courseService: CourseService,
    private store: Store<{ app: fromApp.State }>
  ) {}

  ngOnInit() {
    // this.courses$ = this.store.map(state => state.app.courses);
    this.courses$ = data as Course[];
    console.log(this.courses$);
  }
}