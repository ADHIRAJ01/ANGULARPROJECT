import { Component, OnInit } from '@angular/core';

//import array type and service here
import { DISH } from 'src/app/shared/dish';
import { DishService } from 'src/app/service/dish.service';

import { Promotion } from 'src/app/shared/promotion';
import { PromotionsService } from '../../service/promotions.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public dish: DISH | any;
    public promo: Promotion | any;

  //inside constructor we inject services here 
  constructor( 
    private dishService: DishService,
    private promoService: PromotionsService ) { }

  //inside ngOnInit we fetch the data from services
  ngOnInit(): void {
    this.dish = this.dishService.getfeaturedDish();
    this.promo = this.promoService.getfeaturedPromotion();
  }

}
