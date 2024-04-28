import { Component } from '@angular/core';
import { Cour } from '../../classes/Cour';
import { CourService } from '../../Services/cour.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrl: './cours.component.css'
})
export class CoursComponent {
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
  
    this.router.navigate(['/modcour/',id]);
  }
  
}
