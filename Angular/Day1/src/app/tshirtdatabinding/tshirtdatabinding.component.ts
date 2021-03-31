import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tshirtdatabinding',
  templateUrl: './tshirtdatabinding.component.html',
  styleUrls: ['./tshirtdatabinding.component.css']
})
export class TshirtdatabindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  h=500;
  w=500;
  imgSource='../assets/t2.jpg';
 
   setParameters():void{
 
 this.h=100;
 this.w=100;
 
   }
 changeEnter():void{
 
   this.imgSource='../assets/t3.jpg';
 }
 changeLeave():void{
 
   this.imgSource='../assets/t2.jpg';
 }
 

}
