import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router:Router) { }
onSearchSubmit() {
throw new Error('Method not implemented.');
}
gotosignin() {
  this.router.navigate(['/signin']);
}
}
