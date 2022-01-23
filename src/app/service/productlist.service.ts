import { Injectable } from '@angular/core';

//import array and data
import { product } from '../shared/product';
import { Product } from '../shared/product-list';

@Injectable({
  providedIn: 'root'
})

export class ProductlistService {

  product= Product;
  

  constructor() { }

  //getProducts function type array product[]
  getProducts(): Promise<product[]> {
    return new Promise(resolve => {
      setTimeout(()=> resolve(this.product = Product),2000);   //return data of Product stored in it
  })
}
}

//after all add Service in providers area in app.module.ts section