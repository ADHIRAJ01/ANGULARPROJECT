import { Injectable } from '@angular/core';

import { Promotion } from '../shared/promotion';
import { PROMOTION } from '../shared/Promotions';

@Injectable({
  providedIn: 'root'
})


export class PromotionsService {

  constructor() { }

  getPromotions(): Promotion[] {
    return PROMOTION;
  }

  
  getPromotion(id: number): Promotion {
    return PROMOTION.filter((promo) => { promo.id === id })[0];
  }

  
  getfeaturedPromotion(): Promotion {
    return PROMOTION.filter((promo) => promo.featured)[0]; 
  }

}

//we are sending as a service now will be adding data on the component
//after all add Service in providers area in app.module.ts section