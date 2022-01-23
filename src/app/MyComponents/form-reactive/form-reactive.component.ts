import { feedback } from './../../shared/feedbackform';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.scss']
})
export class FormReactiveComponent implements OnInit {

  feedbackform:feedback|any;

  constructor(
    private fb:FormBuilder) {
      //this.createform();
     }

  ngOnInit(): void {
    this.feedbackform=this.fb.group({
      firstname: ['']
    });
  }

 

  /*createform() {
  }*/
}
   
  
