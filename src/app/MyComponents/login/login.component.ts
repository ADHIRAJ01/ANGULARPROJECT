import { Component, OnInit } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //here we store information 
  user = {username: '' , password: '' , remember: false};

  

  constructor(
    
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    
  }
}
