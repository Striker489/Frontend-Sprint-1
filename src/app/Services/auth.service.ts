import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { jwtDecode } from "jwt-decode";
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private apiUrl = 'http://localhost:3000/api/v1/auth';
  private baseUrl2 = 'http://localhost:3000/api/v1/user';

  constructor(private http: HttpClient) { }

  signup(firstname: string, lastname: string, email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signup`, { firstname, lastname, email, password });
  }

  login(email: string, password: string): Observable<boolean> {
    return this.http.post<any>(`${this.apiUrl}/signin`, { email, password })
      

  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  getDecodedToken(): any {
   
    const token = localStorage.getItem('token');
    
    if (token) {
      try {
        return  jwtDecode(token); // Use 'default' property
      } catch (error) {
        console.error('Error decoding token:', error);
        return null;
      }
    }
    return null;
  }
  
  getTokenExpirationDate(): Date | null {
    const decodedToken = this.getDecodedToken();
    if (decodedToken && decodedToken.exp) {
      // Convert the expiration time from seconds to milliseconds
      return new Date(decodedToken.exp * 1000);
    }
    return null;
  }

  isTokenExpired(): boolean {
    const expirationDate = this.getTokenExpirationDate();
    return expirationDate ? expirationDate < new Date() : true;
  }
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl2}/${id}`);
  }
  
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl2);
  }
  
  getUserByEmail(email: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl2}/email/${email}`);
  }
  
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl2}/${id}`);
  }
  
  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl2}/${user.id}`, user);
  }
  
}
