import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Course } from '../models/course.model';
import { MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { CourseInfoComponent } from '../course-info/course-info.component';

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css']
})
export class CourseTableComponent implements OnInit {
  @Input() courses: Course[];
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog) {}

  displayedColumns = [
    'title',
    'category',
    'description',
    'price',
    'numLectures',
    'infos'
  ];
  dataSource: any;

  openDialog(course: Course) {
    this.dialog.open(CourseInfoComponent, {
      data: course
    });
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.courses);
    this.dataSource.sort = this.sort;
  }
}
