import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-dataretrival',
  templateUrl: './dataretrival.component.html',
  styleUrls: ['./dataretrival.component.css']
})
export class DataretrivalComponent implements OnInit {

  constructor() { }

  Products: Product[]=[];

  ngOnInit(): void {

    this.Products=this.getProducts();
  }
  getProducts() : Product[]{
    return[
      {
        ID :1,
        Title:"Pen",
        Color:"Red",
        Price: 200,
        ExpiryDate :"1-3-2021"
      },
      {
        ID :2,
        Title:"Pencil",
        Color:"Green",
        Price: 250,
        ExpiryDate :"2-2-2021"
      },
      {
        ID :3,
        Title:"Ball",
        Color:"Black",
        Price: 300,
        ExpiryDate :"12-6-2021"
      },
      {
        ID :4,
        Title:"Hockey Stick",
        Color:"Grey",
        Price: 400,
        ExpiryDate :"10-1-2021"
      },
      {
        ID :5,
        Title:"Laptop",
        Color:"White",
        Price: 20000,
        ExpiryDate :"05-09-2021"
      }
    
    
    
    
    
    ]
  } 
}
