import { Component } from '@angular/core';
import { LessonService } from '../../Services/lesson.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Lesson } from '../../classes/Lesson';
import { ChapterService } from '../../Services/chapter.lesson';
import { log } from 'console';
import { QuizService } from '../../Services/quiz.service';
import { response } from 'express';

@Component({
  selector: 'app-modlesson',
  templateUrl: './modlesson.component.html',
  styleUrl: './modlesson.component.css'
})
export class ModlessonComponent {
confirmDelete() {
this.LessonService.deleteLesson(this.lesson.id).subscribe(
  
  
  (response)=>{
    console.log(response)
    console.log("deleted");
    
    
  }
    
)

}
saveChanges() {
  this.LessonService.updateLesson(this.lesson.id,this.lesson).subscribe( 
  response => {
    console.log(response);
    this.Router.navigate(['/modcour/:'+this.lesson.cour]);
  }
  
  )
    
  
  
  }
cancelEdit() {
  this.editMode = false;}
cancel() {
this.Router.navigate(['/instructor']);}
toggleEditLessonMode() {
this.editMode = true;
}
editquiz() {
this.Router.navigate(['/modquiz/:'+ this.lesson.quiz]);

}
editMode:boolean= false;
editchapter(i: number) {
this.Router.navigate(['/modchapter/:'+ this.lesson.chapters[i]]);
}
constructor( private route:ActivatedRoute, private LessonService: LessonService,private Router:Router,private ChapterService: ChapterService,private qService: QuizService) { }
realchapters: string[] = [];
realquizs!: string;
lesson: Lesson= {
  id: 0,
  cour: 0,
  title: '',
  description: '',
  chapters: [],
  quiz: 0
};
fetchlesson(){
  this.LessonService.getLessonById(this.route.snapshot.params['id']).subscribe(
    (lesson: Lesson) => {
      this.lesson = lesson;
      console.log(this.lesson);
    }
  )
} 
ngOnInit(): void {
  this.fetchlesson();
  this.fetchchapternames();
 this.fetchquizzesnames();
}
  fetchchapternames() {
    /** 
    for (let index = 0; index < this.lesson.chapters.length; index++) {
      this.ChapterService.getchapterbyname(this.lesson.chapters[index]).subscribe(
        (chapterName: string) => {
          this.realchapters[index] = chapterName; 
    })    
  }**/ }
    fetchquizzesnames() {
      
        /*
          this.qService.getquizbyname(this.lesson.quiz).subscribe(
            (quizName: string) => {
              this.realquizs = quizName;
            }
          )
            
  **/
     
      }
  

}