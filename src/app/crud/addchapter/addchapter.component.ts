import { Component } from '@angular/core';
import { Chapter } from '../../classes/chapter';
import { ChapterService } from '../../Services/chapter.lesson';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addchapter',
  templateUrl: './addchapter.component.html',
  styleUrl: './addchapter.component.css'
})
export class AddchapterComponent {
  constructor(private chapterService: ChapterService, private router: Router,private route:ActivatedRoute) { }

  editorContent = '';
 
  
  deleteCourseContent(index: number) {
    this.chapter1.coursesContent.splice(index, 1);
  }

  addCourseContent() {
    this.chapter1.coursesContent.push('');
  }
    chapter1: Chapter = new Chapter(1,1,'', '', '',[]);
  basevideo:string='';
  
    onVideoSelected(event: any) {
      const file: File = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.basevideo = reader.result as string;
         
           
          this.chapter1.video=this.basevideo.replace(/^data:video\/\w+;base64,/, '');
        };
        reader.readAsDataURL(file);
      }
    }
    
    trackByIndex(index: number, obj: any): any {
      return index;
    }
  
    onSubmit() {
      console.log("out", this.chapter1.video);
      console.log("in", this.chapter1.video);
     
      this.chapter1.description = this.editorContent;
      console.log(this.chapter1);
      this.chapter1.lesson = Number(this.route.snapshot.paramMap.get('id'));
      this.chapterService.addChapter(this.chapter1).subscribe(
        (response:any) => {
          this.router.navigate(['/addchapter:' + response.id]);
          console.log('Chapter added:', response);
        },
        (error) => {
          console.error('Error adding chapter:', error);
        }
      );
    }
    
  }
  