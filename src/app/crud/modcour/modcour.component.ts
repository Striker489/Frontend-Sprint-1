import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourService } from '../../Services/cour.service';
import { Cour } from '../../classes/Cour'
import { Lesson } from '../../classes/Lesson';
import { LessonService } from '../../Services/lesson.service';
import { log } from 'console';

@Component({
  selector: 'app-modcour',
  templateUrl: './modcour.component.html',
  styleUrl: './modcour.component.css'
})
export class ModcourComponent {


  courId = Number(this.route.snapshot.paramMap.get('id'));
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

  confirmDelete() {
    this.courService.deleteCour(this.courId).subscribe(
      
    )
    }
    lessons: number[] = this.cour.lessons;
    reallessons: string[] = [];
    
    getLessonNames(lessons: number[]) {
      console.log('started');
    
      for (let index = 0; index < lessons.length; index++) {
        const lessonIndex = index; 
        this.lessonService.getLessonNameById(lessons[index]).subscribe(
          (lessonName: string) => {
            console.log('Lesson name:', lessonName);
            this.reallessons[lessonIndex] = lessonName; 
            console.log('Lesson name:', lessonName);
          },
          (error) => {
            console.error('Error fetching lesson name:', error);
          }
        );
      }
    }
    
    
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courService: CourService,private lessonService: LessonService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courId = +params['id'];
      this.fetchCour();
      this.fetchcategories();
      this.fetchcourses();
      this.getLessonNames(this.lessons);
      console.log(this.cour);
    });
  }
  allcourses:Cour[]=[]
fetchcourses(){
  this.courService.getAllCours().subscribe((courses)=>{
    this.allcourses=courses;
  }) 
 
  
}
  onSelect(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    if (selectedValue === 'custom') {
      this.customInputVisible = true;
    } else {
      this.customInputVisible = false;
    }
    this.cour.category = selectedValue;
  }
  addCustomValue() {
    this.categories.push(this.customInputValue);
    this.customInputVisible = false;
    
    }
  categories!: string[] ; 
Selectedcategorie!:String;
customInputVisible = false;
customInputValue = '';
  fetchcategories(){
    this.courService.getAllCategories().subscribe((categories)=>{
      this.categories=categories;
    })
   }
  fetchCour(): void {
    this.courService.getCourById(this.courId).subscribe(
      (cour: Cour) => {
        this.cour = cour;
        this.lessons = this.cour.lessons;

       console.log(this.cour);
      },
      (error) => {
        console.error('Error fetching course:', error);
      }
    );
  
  }
  
  editMode: boolean = false;
  toggleEditMode(): void {
    this.editMode = !this.editMode;
  }
  cancelEdit(): void {
    this.fetchCour(); 
    this.toggleEditMode(); 
  }
 
  saveChanges(): void {
    this.courService.updateCour(this.courId, this.cour).subscribe(
      () => {
        console.log('Course updated successfully');
        this.router.navigate(['/dashboard']); 
        console.log(this.cour);
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
    
  


  onimageselected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        
        const imageDataWithoutPrefix = reader.result as string;
        const imageData = imageDataWithoutPrefix.replace(/^data:image\/\w+;base64,/, '');
        
        this.cour.image = imageData;
      };
      reader.readAsDataURL(file);
    }
  }
  addlesson() {
    this.router.navigate(['instructor/add/lesson/' + this.courId]);
    }
    cancel() {
      this.router.navigate(['/instructor']);
    }
    editlesson(i: number) {
      
      console.log(i);
      this.router.navigate(['instructor/modlesson/'+ this.cour.lessons[i-1]]);
    
    }
}
