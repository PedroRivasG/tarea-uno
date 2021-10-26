import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router:Router) {
    
    const token = localStorage.getItem('ACCESS_TOKEN');
    const rol = localStorage.getItem('ROL');
    
    if(!token || rol!="user"){
      this.router.navigateByUrl('/auth/login');
    }
   }

  ngOnInit(): void {
  }

}
