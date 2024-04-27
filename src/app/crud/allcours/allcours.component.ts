import { Component } from '@angular/core';
import { Cour } from '../../classes/Cour';
import { CourService } from '../../Services/cour.service';

@Component({
  selector: 'app-allcours',
  templateUrl: './allcours.component.html',
  styleUrl: './allcours.component.css'
})

export class AllcoursComponent {
  cours!: Cour[];
  imageSrc!: string;
  constructor(private courService: CourService) { }

  ngOnInit(): void {
    this.getAllCourses(); 
  }

  getAllCourses(): void {
    this.courService.getAllCours()
      .subscribe(cours => this.cours = cours);
  }
  gettitle(id: number) {
    return this.courService.getCourById(id).subscribe(cour => cour.title);
  }
  
  
  convert(imagedata:string) {
   
  this.imageSrc = 'data:image/jpeg;base64,' + imagedata;
  return this.imageSrc;
  }
  
}
