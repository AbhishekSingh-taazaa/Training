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

 showdemo() : void{

 this.showDataDemo=true;
 this.showDirectiveDemo=false;

 }

 showdirectry() : void{

  this.showDataDemo=false;
  this.showDirectiveDemo=true;

 }

}
