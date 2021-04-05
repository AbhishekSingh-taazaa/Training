import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyErrorHandlerService implements ErrorHandler {

  handleError(error : any){
   
    console.log("My Error Handler" + error);
    
    
  }

  constructor() { }
}
