import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Iproduct } from './IProduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products : Iproduct[] = [];
  constructor() { }

  ngOnInit(): void {
    this.products = this.getProducts();
    console.log(this.products);
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
