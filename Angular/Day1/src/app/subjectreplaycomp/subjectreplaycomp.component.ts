import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubjectreplayService } from '../subjectreplay.service';

@Component({
  selector: 'app-subjectreplaycomp',
  templateUrl: './subjectreplaycomp.component.html',
  styleUrls: ['./subjectreplaycomp.component.css']
})
export class SubjectreplaycompComponent implements OnInit {

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

  constructor(private subjectreplayservice : SubjectreplayService) {

  }

  subscribe1() {
    this.subjectreplayservice.count$.subscribe(
      data =>  {this.observer1.push(data)} ,
      null,
      () => { this.showObserver1 = true; }
    )
  }
  susbcribe2() {
    this.subjectreplayservice.count$.subscribe(
      data => { this.observer2.push(data) },
      null,
      () => { this.showObserver2 = true; }
    )
  }
  susbcribe3() {
    this.subjectreplayservice.count$.subscribe(
      data => { this.observer3.push(data) },
      null,
      () => { this.showObserver3 = true; }
    )
  }

  ngOnInit() {

  }
  ngOnDestroy() {

  }

}
