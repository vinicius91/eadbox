import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {
  course: Course;
  constructor(@Inject(MAT_DIALOG_DATA) public data: Course) {}

  ngOnInit() {
    this.course = this.data;
  }
}
