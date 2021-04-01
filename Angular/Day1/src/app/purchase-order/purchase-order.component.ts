import { Component, Input, OnInit } from '@angular/core';
import {Ipitem} from '../purchase/PurchaseItemInterface';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit {

  @Input() Purchaseitem : Ipitem ;
  price = 0;

  constructor() { }

  ngOnInit(): void {

    console.log(this.Purchaseitem);
    this.Purchaseitem.Item.forEach(i =>{
      this.price=this.price+i.Price;
    })

  }

}
