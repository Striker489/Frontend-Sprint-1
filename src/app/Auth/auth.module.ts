import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';



@NgModule({
  declarations: [
    ForgotpasswordComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule,FormsModule
  ]
})
export class AuthModule { }
