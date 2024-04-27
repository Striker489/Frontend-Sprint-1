import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
 
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { AddcourComponent } from './crud/addcour/addcour.component';
import { ModcourComponent } from './crud/modcour/modcour.component';
import { AddLessonComponent } from './crud/add-lesson/add-lesson.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './Extras/dialog/dialog.component';
import { AddchapterComponent } from './crud/addchapter/addchapter.component';
import { AddquizComponent } from './crud/addquiz/addquiz.component';

import { AllcoursComponent } from './crud/allcours/allcours.component';
import { InstructorLComponent } from './Frontcomponents/Layout/instructor-l/instructor-l.component';
import { ModlessonComponent } from './crud/modlesson/modlesson.component';
import { ModquizComponent } from './crud/modquiz/modquiz.component';
import { ChapterComponent } from './crud/chapter/chapter.component';
import { SidebarComponent } from './Frontcomponents/sidebar/sidebar.component';
import { InstructorComponent } from './Frontcomponents/Dashboards/instructor/instructor.component';
import { HeaderComponent } from './Frontcomponents/header/header.component';
import { SidebarinstructorComponent } from './Frontcomponents/Dashboards/sidebarinstructor/sidebarinstructor.component';
import { HeaderinstructorComponent } from './Frontcomponents/Dashboards/headerinstructor/headerinstructor.component';
import { FrontComponent } from './Layout/front/front.component';
import { SigninComponent } from './Auth/signin/signin.component';
import { InterceptorService } from './Services/interceptor.service';
import { MatIconModule } from '@angular/material/icon';
import { SignupComponent } from './Auth/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    AddcourComponent,
    ModcourComponent,
    AddLessonComponent,
    DialogComponent,
    AddchapterComponent,
    AddquizComponent,
    
    AllcoursComponent,
          InstructorLComponent,
          ModlessonComponent,
          ModquizComponent,
          ChapterComponent,
          SidebarComponent,
          InstructorComponent,
          HeaderComponent,
          SidebarinstructorComponent,
          HeaderinstructorComponent,
          FrontComponent,SigninComponent,SignupComponent
      
   

  ],
  imports: [
    BrowserModule,FormsModule,MatFormFieldModule,
    AppRoutingModule,HttpClientModule,CommonModule, MatDialogModule,MatButtonModule,ReactiveFormsModule,MatIconModule

  ],
  providers: [
    provideClientHydration(),{ provide: HTTP_INTERCEPTORS, useClass:InterceptorService , multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
