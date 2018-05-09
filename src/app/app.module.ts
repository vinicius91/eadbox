import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/Material.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { CoursesComponent } from './courses/courses.component';
import { InfosComponent } from './infos/infos.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { CourseService } from './courses/courses.service';
import { appReducer } from './store/app.reducer';
import { CourseCardComponent } from './courses/course-card/course-card.component';
import { CourseTableComponent } from './courses/course-table/course-table.component';
import { CourseInfoComponent } from './courses/course-info/course-info.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CoursesComponent,
    InfosComponent,
    HeaderComponent,
    SidenavListComponent,
    CourseCardComponent,
    CourseTableComponent,
    CourseInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  entryComponents: [CourseInfoComponent],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule {}
