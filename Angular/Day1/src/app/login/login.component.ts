import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { IUser } from './Iuser';

function ageRangeValidator(min:number , max:number) : ValidatorFn
{
   return (control : AbstractControl) : {[key : string] : boolean } | null =>
   {
     if(control.value !== undefined && isNaN(control.value) || control.value<min || control.value > max)
     {
       return {'myageRange' : true};
     }
     return null;
   };

}



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  user : IUser = {

    email:"xbenchers@gmail.com",
    password : "1212323"

  }

  min = 21;
  max=45;


  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({

        email : new FormControl(this.user.email,[Validators.required]),
        password : new FormControl(this.user.password,[Validators.required,Validators.minLength(6)]),
        age : new FormControl(null,[ageRangeValidator(this.min,this.max)]),
        phonenumber : new FormControl(null,[]),
        notification : new FormControl('email',[])
    });
      this.formcontrolValueChanged();
  }

  login(){

    console.log(this.loginForm.value);
    console.log(this.user);

  }

  cancel(){
    this.loginForm.reset;
  }
 
  formcontrolValueChanged(){

    const phoneControl = this.loginForm?.get('phonenumber');
    this.loginForm.get('notification')?.valueChanges.subscribe((data : string)=>
    {
      console.log(data);
      if(data ==='phone'){
            phoneControl?.setValidators([Validators.required]);
      }
      else if(data === 'email'){
        phoneControl?.clearValidators();
      }
      phoneControl?.updateValueAndValidity();
    });
  }

}
