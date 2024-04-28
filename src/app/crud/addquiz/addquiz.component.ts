import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService, AnswerService, QuestionService } from '../../Services/quiz.service';
import { Quiz, Answer, Question } from '../../classes/Quiz';
import { error } from 'console';

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
  nblesson =Number(this.route.snapshot.paramMap.get('id'));

  quiz: Quiz = new Quiz(0, this.nblesson, '', '', [], 0, this.x);
  answers: Answer[][] = [];
  questions: Question[] = [];
  currentquest: Question = new Question(0, 0, '', []);
  currentanswer: Answer = new Answer(0, '', false, 0);
  quizid:number=1;
  Questionid!:number;
  addAnswer(x: number) {
    this.answers[x].push(new Answer(0, '', false, 1));
  }

  removeQuestion(x: number) {
    this.questions.splice(x, 1);
    this.answers.splice(x, 1);
  }

  addQuestion() {
    this.questions.push(new Question(0, 1, '', []));
    this.answers.push([]);
    this.x++;
    
  }

  submitQuiz() {
    // Add quiz
    this.quiz.score = this.x;
    this.quizService.addQuiz(this.quiz).subscribe(
      (response: any) => {
        console.log('New Quiz ID:', response);
        this.quizid = response.id;
        
        // Loop through questions
        for (let index = 0; index < this.x; index++) {
          // Add question
          this.currentquest = this.questions[index];
          this.currentquest.quiz = this.quizid;
          this.questionService.addQuestion(this.currentquest).subscribe(
            (response3: any) => {
              this.Questionid = response3.id;
              console.log('Question:',response3);
              
              
              // Loop through answers for each question
              for (let index2 = 0; index2 < this.answers[index].length; index2++) {
                this.currentanswer = this.answers[index][index2];
                this.currentanswer.question = this.Questionid;
      
                // Add answer
                this.answerService.addAnswer(this.currentanswer).subscribe(
                  (response2: any) => {
                    console.log('Answer:', this.currentanswer);
                    console.log('New Answer ID:', response2.id);
                  },
                  (error: any) => {
                    console.error('Error adding answer:', error);
                  }
                );
              }
            },
            (error3: any) => {
              console.error('Error adding question:', error3);
            }
          );
        }
        
        console.log('Quiz:', this.quiz);
        this.router.navigate(['/Dashboard']);
      },
      (error: any) => {
        console.error('Error adding quiz:', error);
      }
    );
  }
  



   
      
}

