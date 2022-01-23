import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';               //ROUTING USE , PARAMS GIVE ACCESS TO ROUTER PARAMETER
import { Location } from '@angular/common';             //helps to track location of my Page from history of browser
import { DISH } from '../../shared/dish';               //get array of type DISH
import { DishService } from 'src/app/service/dish.service';                //service
import { dishes } from '../../shared/dishes';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})
export class DishDetailComponent implements OnInit {

 // @Input()              //used to take dishes as input then we use @Input
                          //now we are getting input as router
  dish: DISH|any;  

  //used to initialze service 
  constructor(
    private dishService: DishService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  /*
   ------------------------------------------------------- NOT WORKING ASK SIR TO HELP WITH THIS ---------------------------------------------------
  */
  //used to fetch data
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.dish = dishes.find(dish => dish.id === productIdFromRoute);

    //let id = this.route.snapshot.params['id'];      // eg. -- /dishdetail/1
    //this.dish = this.dishService.getDish(id);
  }

  goBack(): void {
    this.location.back();    //go back function on location of page
  }

  goNext(): void {
  this.location.forward();
  }

}


// ------------------------ISSUESS----------------------------------//

/*
not fetching data
*/