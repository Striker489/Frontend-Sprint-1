import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../classes/user';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  user:User=new User(0,'','','','');
  constructor(private authService: AuthService,private router:Router ,private route:ActivatedRoute) { }
  ngOnInit(): void {
    console.log(this.authService.getDecodedToken().sub);
    
    this.authService.getUserByEmail(this.authService.getDecodedToken().sub).subscribe((response)=>
      this.user=response
    
    )
    console.log(this.user);
    
  }
}
