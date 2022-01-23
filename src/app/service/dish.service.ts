import { Injectable } from '@angular/core';

//passing information which we will be sending as service
import { DISH } from './../shared/dish';  //array DISH insertion
import { dishes } from '../shared/dishes';   //dishes data




//using this injectable we are making service injectable into application
@Injectable({     
  providedIn: 'root'
})

//here e made class DishService which will provide service
export class DishService {
  dishes: DISH|any;

  constructor() { }

  
  //from here we are sending our service , made getDishes() function returning array
  //containing information of all the dishes
//BELOW THIS THE SIMPLE SERVICE RETURNING DATA FROM SHARED SECTION. 
 /* 
  getDishes(): DISH[] {
    return dishes;
  }
  */
 //NOW WE ARE GOING TO MAKE IT IN PROMISE SO IT CAN BECOME ASYNCHRONOUS

 getDishes(): Promise<DISH[]> {
  return Promise.resolve(dishes);   //here we will give direct result without delay
}

  //from here we will get particular dish only
  getDish(id: number):  Promise<DISH> {
    return Promise.resolve(dishes.filter((dish) => { dish.id === id })[0]);
  }

  //this will return the featured array dish
  getfeaturedDish():  Promise<DISH> {
    return Promise.resolve(dishes.filter((dish) => dish.featured)[0]); 
  }
}



//after all make changes in module