import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataService } from '../data.service';
import { Iproduct } from './IProduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  titlesearch:string;
  pricesearch:number;

 public products : Iproduct[] = [];
  constructor(private dataservice : DataService) { }

  ngOnInit(): void {
    this.products = this.dataservice.getProducts();
    console.log(this.products);
  }

 
}
