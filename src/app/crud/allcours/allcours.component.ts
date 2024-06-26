import { Component } from '@angular/core';
import { Cour } from '../../classes/Cour';
import { CourService } from '../../Services/cour.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allcours',
  templateUrl: './allcours.component.html',
  styleUrl: './allcours.component.css'
})

export class AllcoursComponent {
fill(num: number): any {
  
    return Array(num).fill(0).map((x, i) => i);
  
}
 
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
  
    this.router.navigate(['instructor/modcour/'+id]);
  }
  
}
