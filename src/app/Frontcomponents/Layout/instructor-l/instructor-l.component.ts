import { Component } from '@angular/core';
import { AuthService } from '../../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructor-l',
  templateUrl: './instructor-l.component.html',
  styleUrl: './instructor-l.component.css'
})
export class InstructorLComponent {
getSearch(arg0: string) {
throw new Error('Method not implemented.');
}
scrollToTop() {
throw new Error('Method not implemented.');
}
  constructor(private auth: AuthService, private route: Router) {}

  ngOnInit(): void {
    
    
  }
  logout() {
    this.auth.logout();
    this.route.navigate(['/admin/login']);
  }
}
