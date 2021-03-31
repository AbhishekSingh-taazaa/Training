import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ANGULAR DEMO';

 showDataDemo=true;
 showDirectiveDemo=false;
 showProductsTable=false;

 showdemo() : void{

 this.showDataDemo=true;
 this.showDirectiveDemo=false;
 this.showProductsTable=false;

 }

 showdirectry() : void{

  this.showDataDemo=false;
  this.showDirectiveDemo=true;
  this.showProductsTable=false;

 }

 showproducts():void{

  this.showDataDemo=false;
  this.showDirectiveDemo=false;
  this.showProductsTable=true;

 }

}
