import { Injectable } from '@angular/core';
import { Observable, map, mergeMap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cour } from '../classes/Cour';

@Injectable({
  providedIn: 'root'
})
export class CourService {

  private baseUrl = 'http://localhost:3000/api/cours/';

  constructor(private http: HttpClient) { }
   reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  });
  getAllCours(): Observable<Cour[]> {
   
    return this.http.get<Cour[]>(this.baseUrl, { headers: this.reqHeader });
  }
  addLesson(courseId: number, lesson: number): Observable<Cour> {
    const url = `${this.baseUrl}/${courseId}`;
    
    // Fetch the course by its ID
    return this.getCourById(courseId).pipe(
      mergeMap(cour => {
        // Update the lessons array of the fetched course
        cour.lessons.push(lesson);
        
        // Send a PUT request to update the course with the new lesson
        return this.http.put<Cour>(url, cour,{ headers: this.reqHeader });
      })
    );
  }
  getAllCategories(): Observable<string[]> {
    return this.getAllCours().pipe(
      map((cours: Cour[]) => { 
        const categories: string[] = [];
        cours.forEach(cour => {
          if (!categories.includes(cour.category)) {
            categories.push(cour.category);
          }
        });
        return categories;
      })
    );
  }

  getCourById(id: number): Observable<Cour> {
    return this.http.get<Cour>(`${this.baseUrl}${id}`,{ headers: this.reqHeader });
  }

  addCour(cour: Cour): Observable<Cour> {
    return this.http.post<Cour>(this.baseUrl, cour);
  }

  updateCour(courId: number, cour: Cour): Observable<Cour> {
    const url = `${this.baseUrl}${courId}`;
    return this.http.put<Cour>(url, cour,{ headers: this.reqHeader });
  }
  
  deleteCour(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}${id}`,{ headers: this.reqHeader });
  }

  getCourByLessonId(lessonId: number): Observable<Cour> {
    return this.http.get<Cour>(`${this.baseUrl}/lesson/${lessonId}`,{ headers: this.reqHeader });
  }
}
  