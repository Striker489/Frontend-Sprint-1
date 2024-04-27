import { Component } from '@angular/core';
  import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
  import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  
  
  
    userForm: FormGroup=new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
    });
  
    constructor(private formBuilder: FormBuilder,private authService: AuthService,private router:Router) { }
  
    ngOnInit(): void {
      this.userForm = this.formBuilder.group({
        firstname: ['', [Validators.required, Validators.maxLength(100)]],
        lastname: ['', [Validators.required, Validators.maxLength(100)]],
        email: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
        password: ['', [Validators.required, Validators.maxLength(100)]],
      });
    }
  
    onSubmit(): void {
      if (this.userForm.valid) {
        const formData = this.userForm.value;
        
        console.log('Form submitted with data:', formData);
        this.authService.signup(formData.firstname,formData.lastname,formData.email,formData.password).subscribe(
          (response) => {
            console.log('Signup successful',response);
            this.router.navigate(['/signin']);
            
          }
        )
      } else {
        console.log('Form is invalid');
      }
    }
  }
  

