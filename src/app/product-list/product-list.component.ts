import { Component } from '@angular/core';


@Component({
  selector: 'app-product2',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class Product2 {
 title = "application ";
 sayHelloId =1;
 fontColor='lightblue';
 quantity=5;
 price=10;

canClick = true;

 person={firstName:'afrw',lastName:'Doesss'};
 nums=[1,2,3,4,5];
 names=[
  {
    name:'Jani',
    country:'Norway',
    desc: 'this is jani'
  },
  {
    name:'Hege',
    country:'Sweden'
  },
  {
    name:'Kai',
    country:'Denmark',
    desc: 'this is jani'
  }
] 
  sayMessage() {
    alert(this.names + "has been shared");
  }
  
}