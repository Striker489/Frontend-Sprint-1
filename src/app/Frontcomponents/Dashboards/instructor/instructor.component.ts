import { Component } from '@angular/core';
import { CourService } from '../../../Services/cour.service';
import { Router } from '@angular/router';
import { Cour } from '../../../classes/Cour';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrl: './instructor.component.css'
})
export class InstructorComponent {
  cours:Cour [] =[];
constructor(private courService:CourService,private router:Router) {
  
}

ngOnInit(): void {
this.fetchcourses();
console.log(localStorage.getItem('token'));

  
}
fetchcourses(){
this.courService.getAllCours().subscribe((cours)=>{this.cours=cours;});

}
convert(imagedata:string) {

  return `data:image/png;base64,${imagedata}`
}
modifier(id:number){

  this.router.navigate(['/modcour/:id',id]);
}

}
