import { Component, OnInit } from '@angular/core';
import { MyErrorHandlerService } from '../my-error-handler.service';

@Component({
  selector: 'app-tshirtdatabinding',
  templateUrl: './tshirtdatabinding.component.html',
  styleUrls: ['./tshirtdatabinding.component.css'],
  providers:[]
})
export class TshirtdatabindingComponent implements OnInit {

  constructor(private myerrorhandler : MyErrorHandlerService,) { }

  ngOnInit(): void {

  }
  data :any = undefined;

 foo(){
    //this.myerrorhandler.handleError("error");
   this.data.sort();
 
  }
  h=500;
  w=500;
  imgSource='../assets/newt11.jpg';
 
   setParameters():void{
 
 this.h=100;
 this.w=100;
 
   }
 changeEnter():void{
 
   this.imgSource='../assets/newt22.jpg';
 }
 changeLeave():void{
 
   this.imgSource='../assets/newt11.jpg';
 }
 

}
