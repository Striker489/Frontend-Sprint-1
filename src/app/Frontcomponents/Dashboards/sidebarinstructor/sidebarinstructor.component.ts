import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebarinstructor',
  templateUrl: './sidebarinstructor.component.html',
  styleUrl: './sidebarinstructor.component.css'
})
export class SidebarinstructorComponent {
changelocal(i:string) {
localStorage.setItem('header',i);}
constructor(private  router:Router) {
}
logout(){
localStorage.removeItem('token');
this.router.navigate(['/signin']);
}
gotoadd(){
this.router.navigate(['/instrucor/add/cour']);
}}