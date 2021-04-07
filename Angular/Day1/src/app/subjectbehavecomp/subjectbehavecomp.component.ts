import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubjectbehaviourService } from '../subjectbehaviour.service';

@Component({
  selector: 'app-subjectbehavecomp',
  templateUrl: './subjectbehavecomp.component.html',
  styleUrls: ['./subjectbehavecomp.component.css']
})
export class SubjectbehavecompComponent implements OnInit {

  title = 'RxJS Subjects Demo';
  observer1$: Subscription;
  observer2$: Subscription;
  observer3$: Subscription;
  // observer1 = [];
  // observer2 = [];
  // observer3 = [];
  showObserver1 = false;
  showObserver2 = false;
  showObserver3 = false;
  observer1: number[] = [];
  observer2: number[] = [];
  observer3: number[] = [];

  constructor(private subjectservice : SubjectbehaviourService) {

  }

  subscribe1() {
    this.subjectservice.count$.subscribe(
      data =>  {this.observer1.push(data)} ,
      null,
      () => { this.showObserver1 = true; }
    )
  }
  susbcribe2() {
    this.subjectservice.count$.subscribe(
      data => { this.observer2.push(data) },
      null,
      () => { this.showObserver2 = true; }
    )
  }
  susbcribe3() {
    this.subjectservice.count$.subscribe(
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
