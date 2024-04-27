import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService, AnswerService, QuestionService } from '../../Services/quiz.service';
import { Quiz, Answer, Question } from '../../classes/Quiz';

@Component({
  selector: 'app-addquiz',
  templateUrl: './addquiz.component.html',
  styleUrl: './addquiz.component.css'
})
export class AddquizComponent {
  constructor(
    private router: Router,
    private quizService: QuizService,
    private answerService: AnswerService,
    private questionService: QuestionService
    ,private route:ActivatedRoute
  ) {}

  x: number = 0;
  quiz: Quiz = new Quiz(0, 0, '', '', [], 0, this.x);
  answers: Answer[][] = [];
  questions: Question[] = [];
  currentquest: Question = new Question(0, 0, '', []);
  currentanswer: Answer = new Answer(0, '', false, 0);

  addAnswer(x: number) {
    this.answers[x].push(new Answer(0, '', false, 0));
  }

  removeQuestion(x: number) {
    this.questions.splice(x, 1);
    this.answers.splice(x, 1);
  }

  addQuestion() {
    this.questions.push(new Question(0, 0, '', []));
    this.answers.push([]);
    this.x++;
  }

  submitQuiz() {
    this.quiz.Lesson=Number(this.route.snapshot.paramMap.get('id'));

    this.quiz.score=this.x;
    this.quizService.addQuiz(this.quiz).subscribe(
      (response: any) => {
        console.log('New Quiz ID:', response.id);
        this.router.navigate(['/Dashboard']);
      },
      (error: any) => {
        console.error('Error adding quiz:', error);
      }
    );
    for (let index = 0; index < this.x; index++) {
      this.currentquest = this.questions[index];
      for (let index2 = 0; index2 < this.answers[index].length; index2++) {
        this.currentanswer = this.answers[index][index2];
        this.answerService.addAnswer(this.currentanswer).subscribe(
          (response: any) => {
            console.log('New Answer ID:', response.id);
            this.currentquest.options.push(response.id);
          },
          (error: any) => {
            console.error('Error adding answer:', error);
          }
        );
      }
      this.questionService.addQuestion(this.currentquest).subscribe(
        (response: any) => {
          console.log('New Question ID:', response.id);
          this.quiz.questions.push(response.id);
        }
      );
    }
    console.log(this.quiz);
    
  }
}

