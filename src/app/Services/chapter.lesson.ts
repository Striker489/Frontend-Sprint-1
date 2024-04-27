import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Chapter } from '../classes/chapter';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {

  private baseUrl = 'http://localhost:3000/api/chapters/';

  constructor(private http: HttpClient) { }

  getAllChapters(): Observable<Chapter[]> {
    return this.http.get<Chapter[]>(this.baseUrl);
  }
  
  getChapterById(id: number): Observable<Chapter> {
    return this.http.get<Chapter>(`${this.baseUrl}/${id}`);
  }

  addChapter(chapter: Chapter): Observable<Chapter> {
    return this.http.post<Chapter>(this.baseUrl, chapter);
  }

  updateChapter(chapterId: number, chapter: Chapter): Observable<Chapter> {
    const url = `${this.baseUrl}/${chapterId}`;
    return this.http.put<Chapter>(url, chapter);
  }
  
  deleteChapter(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getChapterByChapterId(chapterId: number): Observable<Chapter> {
    return this.http.get<Chapter>(`${this.baseUrl}/chapter/${chapterId}`);
  }
}
