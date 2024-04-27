import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  formData = {
    email: '',
    password: ''
  };
  constructor(private authService: AuthService,private router:Router ) { }

  onSubmit() {
    console.log('Logging in with:', this.formData);
    
    this.authService.login(this.formData.email, this.formData.password).subscribe(
      (response:any) => { 
        console.log('Login successful');
        
        if ( response) {
          const token = response;
          localStorage.setItem('token', response);
          console.log(response);
       this.router.navigate(['/instructor']);
        
          
        } else {
          console.error('Token not found in response:', response);
        }
      },
      (error) => {
        console.error('Login failed:', error);
      }
    );
  }
}

