import { Component } from '@angular/core';

import { CourService } from '../../Services/cour.service';
import { Cour } from '../../classes/Cour';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcour',
  templateUrl: './addcour.component.html',
  styleUrl: './addcour.component.css'
})
export class AddcourComponent {

  constructor(
    private courseService: CourService,
    private router: Router
  ) { }

  cour1:Cour={
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
  }


      
    
    
   
    
     
  ngOnInit(): void {
    this.fetchcategories();
    this.fetchcourses();
  }
   
  cancel(): void {
    this.router.navigate(['/dashboard']);
  }


 
  onSubmit() {
    
    this.courseService.addCour(this.cour1).subscribe(

      (response) => {
        console.log('Response after adding course:', response);
        if (confirm('Do you want to continue adding?')) {
          
          this.router.navigate(['/addcour:/'+response.id]);
        } else {
          this.router.navigate(['/dashboard']);
        }
        
      },
      (error) => {
        console.error('Error adding course:', error);
      }
    );
    
  }
  
//image
onFileSelected(event: any) {
  const file: File = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      // Remove the data URI prefix
      const imageDataWithoutPrefix = reader.result as string;
      const imageData = imageDataWithoutPrefix.replace(/^data:image\/\w+;base64,/, '');
      
      // Assign the image data to your property
      this.cour1.image = imageData;
    };
    reader.readAsDataURL(file);
  }
}


//categorie
categories!: string[] ; 
Selectedcategorie!:String;
customInputVisible = false;
customInputValue = '';
fetchcategories(){
  this.courseService.getAllCategories().subscribe((categories)=>{
    this.categories=categories;
  })
 }
 addCustomValue() {
  this.categories.push(this.customInputValue);
  this.customInputVisible = false;
  
  }
  onSelect(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    if (selectedValue === 'custom') {
      this.customInputVisible = true;
    } else {
      this.customInputVisible = false;
    }
    this.cour1.category = selectedValue;
  }
//recommandation
allcourses:Cour[]=[]
fetchcourses(){
  this.courseService.getAllCours().subscribe((courses)=>{
    this.allcourses=courses;
  })
}

}
