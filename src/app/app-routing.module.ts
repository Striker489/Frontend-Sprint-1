
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcourComponent } from './crud/addcour/addcour.component';
import { ModcourComponent } from './crud/modcour/modcour.component';
import { AddLessonComponent } from './crud/add-lesson/add-lesson.component';
import { AddquizComponent } from './crud/addquiz/addquiz.component';
import { AddchapterComponent } from './crud/addchapter/addchapter.component';
import { InstructorComponent } from './Frontcomponents/Dashboards/instructor/instructor.component';
import { HeaderComponent } from './Frontcomponents/header/header.component';
import { FrontComponent } from './Layout/front/front.component';
import { SigninComponent } from './Auth/signin/signin.component';
import { HeaderinstructorComponent } from './Frontcomponents/Dashboards/headerinstructor/headerinstructor.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { ForgotpasswordComponent } from './Auth/forgotpassword/forgotpassword.component';
import { ModlessonComponent } from './crud/modlesson/modlesson.component';
import { ModquizComponent } from './crud/modquiz/modquiz.component';
import { SettingsComponent } from './personel/settings/settings.component';
import { ProfileComponent } from './personel/profile/profile.component';
import path from 'path';
import { AllcoursComponent } from './crud/allcours/allcours.component';

const routes: Routes = [
  { path: '', component: FrontComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgot', component: ForgotpasswordComponent },
  { path: 'head', component: HeaderComponent },
 

  {
    path: 'instructor',
    component: InstructorComponent,
    children: [
      { path: 'settings', component: SettingsComponent },
      { path: 'profile', component: ProfileComponent },
      {
        path: '',component:AllcoursComponent},
    
      
          { path: 'modcour/:id', component: ModcourComponent },
          { path: 'modlesson/:id', component: ModlessonComponent },
          { path: 'modquiz/:id', component: ModquizComponent },
       
      {
        path: 'add',
        children: [
          { path: 'cour', component: AddcourComponent },
          { path: 'lesson/:id', component: AddLessonComponent },
          { path: 'quiz/:id', component: AddquizComponent },
          { path: 'chapter/:id', component: AddchapterComponent },
        ]
      },
    ]
  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
