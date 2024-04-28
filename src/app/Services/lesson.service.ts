import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Lesson } from '../classes/Lesson';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  private baseUrl = 'http://localhost:3000/api/lessons/';

  constructor(private http: HttpClient) { }

  getAllLessons(): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(this.baseUrl);
  }
  
  getLessonById(id: number): Observable<Lesson> {
    return this.http.get<Lesson>(`${this.baseUrl}${id}`);
  }

  addLesson(lesson: Lesson): Observable<Lesson> {
    return this.http.post<Lesson>(this.baseUrl, lesson);
  }

  updateLesson(lessonId: number, lesson: Lesson): Observable<Lesson> {
    const url = `${this.baseUrl}${lessonId}`;
    return this.http.put<Lesson>(url, lesson);
  }
  
  deleteLesson(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}${id}`);
  }

  getLessonByLessonId(lessonId: number): Observable<Lesson> {
    return this.http.get<Lesson>(`${this.baseUrl}/lesson${lessonId}`);
  }
  getLessonNameById(id: number): Observable<string> {
    return this.http.get<Lesson>(`${this.baseUrl}${id}`).pipe(
      map(Lesson => Lesson.title)
    );
  }
}
