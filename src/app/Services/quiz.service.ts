import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Answer, Question, Quiz } from '../classes/Quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private baseUrl = 'http://localhost:3000/api/quizzes/';

  constructor(private http: HttpClient) { }

  getAllQuizzes(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(this.baseUrl);
  }
  
  getQuizById(id: number): Observable<Quiz> {
    return this.http.get<Quiz>(`${this.baseUrl}/${id}`);
  }

  addQuiz(quiz: Quiz): Observable<Quiz> {
    return this.http.post<Quiz>(this.baseUrl, quiz);
  }

  updateQuiz(quizId: number, quiz: Quiz): Observable<Quiz> {
    const url = `${this.baseUrl}/${quizId}`;
    return this.http.put<Quiz>(url, quiz);
  }
  
  deleteQuiz(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getQuizByQuizId(quizId: number): Observable<Quiz> {
    return this.http.get<Quiz>(`${this.baseUrl}/quiz/${quizId}`);
  }
}
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

    private baseUrl = 'http://localhost:3000/api/questions/';
  
    constructor(private http: HttpClient) { }
  
    getAllQuestions(): Observable<Question[]> {
      return this.http.get<Question[]>(this.baseUrl);
    }
    
    getQuestionById(id: number): Observable<Question> {
      return this.http.get<Question>(`${this.baseUrl}/${id}`);
    }
  
    addQuestion(question: Question): Observable<Question> {
      return this.http.post<Question>(this.baseUrl, question);
    }
  
    updateQuestion(questionId: number, question: Question): Observable<Question> {
      const url = `${this.baseUrl}/${questionId}`;
      return this.http.put<Question>(url, question);
    }
    
    deleteQuestion(id: number): Observable<void> {
      return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }
  
    getQuestionByQuestionId(questionId: number): Observable<Question> {
      return this.http.get<Question>(`${this.baseUrl}/question/${questionId}`);
    }
  }
  
  @Injectable({
    providedIn: 'root'
  })
  
  
  export class AnswerService {

    private baseUrl = 'http://localhost:3000/api/answers/';
  
    constructor(private http: HttpClient) { }
  
    getAllAnswers(): Observable<Answer[]> {
      return this.http.get<Answer[]>(this.baseUrl);
    }
    
    getAnswerById(id: number): Observable<Answer> {
      return this.http.get<Answer>(`${this.baseUrl}/${id}`);
    }
  
    addAnswer(answer: Answer): Observable<Answer> {
      return this.http.post<Answer>(this.baseUrl, answer);
    }
  
    updateAnswer(answerId: number, answer: Answer): Observable<Answer> {
      const url = `${this.baseUrl}/${answerId}`;
      return this.http.put<Answer>(url, answer);
    }
    
    deleteAnswer(id: number): Observable<void> {
      return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }
  
    getAnswerByAnswerId(answerId: number): Observable<Answer> {
      return this.http.get<Answer>(`${this.baseUrl}/answer/${answerId}`);
    }
  }