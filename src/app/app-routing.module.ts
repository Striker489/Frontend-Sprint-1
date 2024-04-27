
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

const routes: Routes = [
  
  {path:'',component:FrontComponent},
    {path:'signin',component:SigninComponent},

  
  
  
  
  
  {path:'instructor',component:InstructorComponent },{path:'header',component:HeaderComponent}, 
  
  
  { path:"addcour",component:AddcourComponent},{path:"modcour/:id",component:ModcourComponent},{path:"addlesson/:id",component:AddLessonComponent},{path:"",component:AddquizComponent},{path:"quiz",component:AddquizComponent},{path:"addchapter",component:AddchapterComponent}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
