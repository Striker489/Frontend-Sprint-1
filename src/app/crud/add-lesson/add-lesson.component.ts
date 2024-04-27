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
  quiz: 0,
  id: 0,
  cour: 0
}
constructor(private lessonservice:LessonService, private router:Router,private route:ActivatedRoute) { }

  onSubmit() {
this.lesson.cour = Number(this.route.snapshot.paramMap.get('id'));

    this.lessonservice.addLesson(this.lesson).subscribe(

      (response) => {
        console.log('Response after adding lesson:', response);
        if (confirm('Do you want to continue adding?')) {
          
          this.router.navigate(['/add-chapter:/'+response.id]);
        } else {
          this.router.navigate(['/dashboard']);
        }
      }

    )

  }

}
