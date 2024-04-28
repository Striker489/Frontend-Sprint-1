import { Component } from '@angular/core';
import { Lesson } from '../../classes/Lesson';
import { LessonService } from '../../Services/lesson.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-lesson',
  templateUrl: './add-lesson.component.html',
  styleUrl: './add-lesson.component.css'
})
export class AddLessonComponent {
lesson:Lesson = {
  title: '',
  description: '',
  chapters: [],
 
  id: 0,
  cour:0
}
constructor(private lessonservice:LessonService, private router:Router,private route:ActivatedRoute) { }

  onSubmit() {
    this.lesson.cour = Number(this.route.snapshot.paramMap.get('id'));
console.log(Number(this.route.snapshot.paramMap.get('id')))
    console.log('aze',this.lesson);
console.log(this.lesson.cour)
    this.lessonservice.addLesson(this.lesson).subscribe(

      (response) => {
        console.log('Response after adding lesson:', response);
        if (confirm('Do you want to continue adding?')) {
          console.log(this.lesson);
          this.router.navigate(['instructor/add/quiz/'+response.id]);
        } else {
          this.router.navigate(['/dashboard']);
          console.log(this.lesson);
        }
        console.log(this.lesson);
      }
      

    )

  }

}
