import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Iproduct } from './product/IProduct';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  logdata : string;


  product :Iproduct = {

    Id : 121,
    Title: "Pen",
    Price : 200,
    ExpiryDate : "02-12-2021",
    isStock : true,
    Quantity : 50


    
  };

  Pinr : BehaviorSubject<Iproduct>;




  


  getdata(){


  }

  setdata(){


  }
  
  constructor() {

    this.Pinr = new BehaviorSubject(this.product);



   }

   setPrice(price : number){

    this.product.Price = price;
    this.Pinr.next(this.product);

   }

   updateProduct(p : Iproduct){

    this.product = {
      ...p
    }
    this.Pinr.next(this.product);
   }
}
