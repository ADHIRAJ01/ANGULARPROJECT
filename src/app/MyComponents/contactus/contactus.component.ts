import { feedback } from './../../shared/feedbackform';
import { Component, OnInit } from '@angular/core';
import { ContactType  } from 'src/app/shared/feedbackform';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  
  feedbackForm: FormGroup|any;

  Feedback: feedback|any;
  contacttype= ContactType;

  
  constructor(private formbuider: FormBuilder) {
    this.createdForm();
     }
   

  ngOnInit(): void {
    /*this.feedbackForm=this.formbuider.group({
      f_name: ['',Validators.required],
      l_name: ['',Validators.required]
    });*/
  }

  createdForm() {
    this.feedbackForm=this.formbuider.group({
      f_name: ['',Validators.required],
      l_name: ['',Validators.required],
      tel:  ['',Validators.required],
      email:  ['',[Validators.required, Validators.email]],
      agree: false,
      message : ''
    });
  }

  Submit() {
    this.Feedback = this.feedbackForm.value;
    console.log("hii");
    this.feedbackForm.reset();
  }

}


// ------------------------ISSUESS----------------------------------//

/*
NOT GETTING OUTPUT ON CONSOLE
*/