import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Iproduct } from '../product/IProduct';

@Component({
  selector: 'app-material-table-product',
  templateUrl: './material-table-product.component.html',
  styleUrls: ['./material-table-product.component.css']
})
export class MaterialTableProductComponent implements OnInit {

  public products : Iproduct[] = [];
  constructor(private dataservice : DataService) { }

  ngOnInit(): void {
    this.products = this.dataservice.getProducts();
    console.log(this.products);
  }


}
