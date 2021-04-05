import { Injectable } from '@angular/core';
import { Iproduct } from './product/IProduct';
import { Ipitem } from './purchase/PurchaseItemInterface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {

   

   }

  getPurchaseItem(): Ipitem[]
  {

    return[{PId:1,PName:"Microsun",PDate:"12-12-2021",Vname :"REX", Item : [ {
      Id :1,
      Title : "Pen",
      Price : 200,
      ExpiryDate : "12-03-2022",
      isStock : true,
      Quantity : 300

    }]},
   
    {PId:2,PName:"Fireflies",PDate:"12-12-2021",Vname :"PAUL", Item : [ {
      Id :3,
      Title : "Ball",
      Price : 150,
      ExpiryDate : "09-12-2022",
      isStock : false,
      Quantity : 0

    },
    {
      
      Id :4,
      Title : "Cutter",
      Price : 300,
      ExpiryDate : "04-05-2023",
      isStock : true,
      Quantity : 50

    }]},

    {PId:3,PName:"Dexter",PDate:"12-12-2021",Vname :"VILGEX", Item : [ {
      Id :5,
      Title : "Gel",
      Price : 500,
      ExpiryDate : "02-06-2021",
      isStock : false,
      Quantity : 0

    },
    {
      Id :6,
      Title : "Cardboard",
      Price : 220,
      ExpiryDate : "11-12-2022",
      isStock : true,
      Quantity : 80

    }]},

    {PId:4,PName:"Dome",PDate:"12-12-2021",Vname :"WOLVRINE", Item : [ {
      Id :2,
      Title : "Pencil",
      Price : 100,
      ExpiryDate : "02-12-2022",
      isStock : true,
      Quantity : 250

    },
    {
      Id :3,
      Title : "Ball",
      Price : 150,
      ExpiryDate : "09-12-2022",
      isStock : false,
      Quantity : 0

    }]},
   ];

 
  }


  getProducts(): Iproduct[]{
    return  [
      {
      Id :1,
      Title : "Pen",
      Price : 200,
      ExpiryDate : "12-03-2022",
      isStock : true,
      Quantity : 300

    },
    {
      Id :2,
      Title : "Pencil",
      Price : 100,
      ExpiryDate : "02-12-2022",
      isStock : true,
      Quantity : 250

    },
    {
      Id :3,
      Title : "Ball",
      Price : 150,
      ExpiryDate : "09-12-2022",
      isStock : false,
      Quantity : 0

    },
    {
      Id :4,
      Title : "Cutter",
      Price : 300,
      ExpiryDate : "04-05-2023",
      isStock : true,
      Quantity : 50

    },
    {
      Id :5,
      Title : "Gel",
      Price : 500,
      ExpiryDate : "02-06-2021",
      isStock : false,
      Quantity : 0

    },
    {
      Id :6,
      Title : "Cardboard",
      Price : 220,
      ExpiryDate : "11-12-2022",
      isStock : true,
      Quantity : 80

    }
    ];

  }


}
