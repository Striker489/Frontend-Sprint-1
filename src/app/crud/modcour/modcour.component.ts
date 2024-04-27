import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourService } from '../../Services/cour.service';
import { Cour } from '../../classes/Cour'
@Component({
  selector: 'app-modcour',
  templateUrl: './modcour.component.html',
  styleUrl: './modcour.component.css'
})
export class ModcourComponent {
  courId!: number;
  cour: Cour = {
    title: '',
    description: '',
    difficulty: 1,
    premium: false,
    recommendedLevel: '',
    recommendedCourses: [],
    image: '',
    category: '',
    lessons: [],
    id: 0
  };
lessons: number[] = this.cour.lessons;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courService: CourService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courId = +params['id'];
      this.fetchCour();
    });
  }

  fetchCour(): void {
    this.courService.getCourById(this.courId).subscribe(
      (cour: Cour) => {
        this.cour = cour;
      },
      (error) => {
        console.error('Error fetching course:', error);
      }
    );
  }
  fetchlesson(): void {
    
  }

  onSubmit(): void {
    this.courService.updateCour(this.courId, this.cour).subscribe(
      () => {
        console.log('Course updated successfully');
        this.router.navigate(['/dashboard']); // Navigate after successful update
      },
      (error) => {
        console.error('Error updating course:', error);
      }
    );
  }  imageSrc!: string;

  convert(imagedata:string) {
   
    this.imageSrc = 'data:image/jpeg;base64,' + imagedata;
    return this.imageSrc;
    }
    
  cancel(): void {
    this.router.navigate(['/dashboard']);
  }
}
