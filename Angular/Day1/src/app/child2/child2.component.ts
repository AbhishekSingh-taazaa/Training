import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { Iproduct } from '../product/IProduct';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  price : number;

  product : Iproduct;

  constructor(private logservice : LogService) { }

  ngOnInit(): void {
    this.logservice.Pinr.subscribe(p=>{this.product=p})
  }

}
