import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Course } from '../models/course.model';
import { MatDialog } from '@angular/material';
import { CourseInfoComponent } from '../course-info/course-info.component';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
@Injectable()
export class CourseCardComponent implements OnInit {
  @Input() course: Course;
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(CourseInfoComponent, {
      data: this.course
    });
  }

  ngOnInit() {}
}
