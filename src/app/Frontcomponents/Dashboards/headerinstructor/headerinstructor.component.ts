import { Component } from '@angular/core';

@Component({
  selector: 'app-headerinstructor',
  templateUrl: './headerinstructor.component.html',
  styleUrl: './headerinstructor.component.css'
})
export class HeaderinstructorComponent {
  local: string = '';
  ngOnInit(): void {
  this.local= localStorage.getItem('header') || '';
    
  }
  
}
