import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { LogService } from '../log.service';
import { Iproduct } from '../product/IProduct';


// function ageRangeValidator(min:number , max:number) : ValidatorFn
// {
//    return (control : AbstractControl) : {[key : string] : boolean } | null =>
//    {
//      if(control.value !== undefined && isNaN(control.value) || control.value<min || control.value > max)
//      {
//        return {'Pricevalidater' : true};
//      }
//      return null;
//    };

// }

function priceCheckValidater(min :number , max:number) : ValidatorFn
{

  return(pricecheck : AbstractControl) : {[key : string] : boolean} | null =>
  {
    if(pricecheck.value !== undefined && Number.isNaN(pricecheck.value) || pricecheck.value<=min || pricecheck.value>max)
    {
      return {'pricevalidater' : true}
    }
    return null;
  };

}

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor(private logservice : LogService) { }


  productForm : FormGroup;

 price : number;

  color : string;
 
  product : Iproduct;

 min=0;
 max=1000;

  ngOnInit(): void {

    this.logservice.Pinr.subscribe(data=>{
      this.product = data})
    this.productForm = new FormGroup({

      Id : new FormControl(this.product.Id,[Validators.required]),
      Title : new FormControl(this.product.Title,Validators.required),
      Price : new FormControl(this.product.Price,[priceCheckValidater(this.min,this.max)]),
     ExpiryDate : new FormControl(this.product.ExpiryDate,Validators.required),
     isStock : new FormControl(this.product.isStock,Validators.required),
     Quantity : new FormControl(this.product.Quantity,Validators.required),
    
  });
   
  }
  UpdateProduct(){

    this.logservice.updateProduct(this.productForm.value);
  }

}
