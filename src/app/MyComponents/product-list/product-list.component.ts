import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

//importing array DISH which declared in shared folder

//import { dishes } from 'src/app/shared/dishes';     removing this and addding DishService from Services to gather info which we can 
                                                  // later connect with backend also

//import product array and ProductistService
import { product } from '../../shared/product';
import { ProductlistService } from 'src/app/service/productlist.service';

//import DISHarray and DishService
import { DISH } from '../../shared/dish';   // array DISH insertion
import { DishService } from '../../service/dish.service';     //importing service here
import { dishes } from 'src/app/shared/dishes';


//storing data here for service purpose
//made new variable of array type DISH to store information


//storing products for service purpose
//data has been shifted to shared modules in ts file


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
 //making an array of products having values inside it
 //movedd to local const variable


//new variable storing data of products
  products: product[] | undefined;
  
//creating new variable and storing value of dishes
//  dishes: DISH[] = dishes; -> removing this
  dishes: DISH[] | undefined ;
  selectDish: any;    //ask why it is not setting type as DISH


  onSelect(dish: DISH) {          // function onSelect displaying dish
    this.selectDish = dish;        //select function where it displays when user clicks on the dish
  }
  

  constructor(
    private dishService: DishService ,
     private productService: ProductlistService,
     private Location: Location ) { }


// INSIDE NGONINIT WE CAN ASK SERVICE TO FETCH INFORMATION
  ngOnInit(): void {
  //1. we were using service like this(down) 
 // this.dishes = this.dishService.getDishes();     //assigning dishSservice here
 // this.products = this.productService.getProducts();

  
  //after Promise (asssuming it always return)  
  this.dishService.getDishes()
  .then((dishes) => this.dishes = dishes);

  this.productService.getProducts()
  .then((products) => this.products = products);
  }
  
  show() {
    alert(this.products);
    console.log("'print out'");
  }

  goNext(): void {
    this.Location.forward();
    }
}


/*-----------------------------ISSUES----------------------------------*/
//data is not getting fetched by product id 