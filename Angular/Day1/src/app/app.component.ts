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
 showPuschase=false;
 showchild1=false;
 showchild2=false;


 showdemo() : void{

 this.showDataDemo=true;
 this.showDirectiveDemo=false;
 this.showProductsTable=false;
 this.showPuschase=false;


 }

 showdirectry() : void{

  this.showDataDemo=false;
  this.showDirectiveDemo=true;
  this.showProductsTable=false;
  this.showPuschase=false;
 

 }

 showproducts():void{

  this.showDataDemo=false;
  this.showDirectiveDemo=false;
  this.showProductsTable=true;
  this.showPuschase=false;


 }
 showMaster():void{

  this.showDataDemo=false;
  this.showDirectiveDemo=false;
  this.showPuschase=true;
  
  this.showProductsTable=false;

 }

 showsahredata(){
  this.showchild1=true;
  this.showchild2=true;

 }

}
