import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from '../data.service';
import { Ipitem } from './PurchaseItemInterface';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  panelOpenState = true
  showPurchaseOrder=true;

  public IItem : Ipitem[]=[];

  constructor(private dataservice : DataService) { }

  @Output() MyEvent = new EventEmitter();

  ngOnInit(): void {
   this.IItem= this.dataservice.getPurchaseItem();
  }



 Eventdd(data : string){

  this.MyEvent.emit("Doneeeeeeeeee");

 }




 

}
 //   return[
  //     {
  //       PurchaseId:121,
  // PurchaseName:"REx",
  // PurchaseDate: 02-12-2021,
  // VandorName : Firefox,
  // Item : Iproduct[ {
  //   Id :1,
  //   Title : "Pen",
  //   Price : 200,
  //   ExpiryDate : "12-03-2022",
  //   isStock : true,
  //   Quantity : 300

  // },
  // {
  //   Id :2,
  //   Title : "Pencil",
  //   Price : 100,
  //   ExpiryDate : "02-12-2022",
  //   isStock : true,
  //   Quantity : 250

  // },
  // {
  //   Id :3,
  //   Title : "Ball",
  //   Price : 150,
  //   ExpiryDate : "09-12-2022",
  //   isStock : false,
  //   Quantity : 0

  // }]

  //     },

  //   ]