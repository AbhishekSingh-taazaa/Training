import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubjectasyncService } from '../subjectasync.service';

@Component({
  selector: 'app-subjectasynccomp',
  templateUrl: './subjectasynccomp.component.html',
  styleUrls: ['./subjectasynccomp.component.css']
})
export class SubjectasynccompComponent implements OnInit {

  title = 'RxJS Subjects Demo';
  observer1$: Subscription;
  observer2$: Subscription;
  observer3$: Subscription;
  observer1:number[] = [];
  observer2 :number [] = [];
  observer3 :number[]  = [];
  showObserver1 = false;
  showObserver2 = false;
  showObserver3 = false;

  constructor(private asyncservice : SubjectasyncService) {

  }

  subscribe1() {
    this.asyncservice.count$.subscribe(
      data =>  {this.observer1.push(data)} ,
      null,
      () => { this.showObserver1 = true; }
    )
  }
  susbcribe2() {
    this.asyncservice.count$.subscribe(
      data => { this.observer2.push(data) },
      null,
      () => { this.showObserver2 = true; }
    )
  }
  susbcribe3() {
    this.asyncservice.count$.subscribe(
      data => { this.observer3.push(data) },
      null,
      () => { this.showObserver3 = true; }
    )
  }

  ngOnInit() {

  }
  ngOnDestroy() : void {
   
   
  }

}
