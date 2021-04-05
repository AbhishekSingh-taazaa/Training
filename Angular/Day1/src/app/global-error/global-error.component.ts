import { Component, OnInit } from '@angular/core';
import { MyErrorHandlerService } from '../my-error-handler.service';

@Component({
  selector: 'app-global-error',
  templateUrl: './global-error.component.html',
  styleUrls: ['./global-error.component.css']
})
export class GlobalErrorComponent implements OnInit {

  data :any = undefined;

  constructor(private myerrorhandler : MyErrorHandlerService,) { }

  

  foo(){
    
    this.data.sort();
  
   }

  ngOnInit(): void {
  }

}
