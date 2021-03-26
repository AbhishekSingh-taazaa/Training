import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  num1 : number =0;
   num2 : number =0;
   op : string ='op';
   result:number=0;
  h1:number=50;
  w1:number=150;

  constructor() { }
  add(){
    this.op='+';
    this.result=this.num1+this.num2;
 
  }
  subtract(){
    this.op='-';
    this.result=this.num1-this.num2;
  }
  multiply(){
    this.op='*';
    this.result=this.num1*this.num2;
  }
  divide(){
    this.op='/';
    this.result=this.num1/this.num2;
    if(Number.isNaN(this.result)){
      this.result=0;
    }
  }
  modulus(){
    this.op='%';
    this.result=this.num1%this.num2;
    if(Number.isNaN(this.result)){
      this.result=0;
    }
  }
  clear(){
    this.num1=0;
    this.num2=0;
    this.op="op";
    this.result=0;
  }

  ngOnInit(): void {
  }

}
