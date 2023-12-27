import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Observables';

  data: any[] = [];

  //creating observables

  myObservable = new Observable((observer) => {

    observer.next([1, 21, 34, 53, 21, 56]);

  });

  //observables emits 3 types of events next error complete. emits data as call back.

  //observer also takes or recieves 3 types of callbacks as data next,error & complete.recieves data as call back 
  GetAsyncData() {

    this.myObservable.subscribe((val: any) => {

      this.data = val;


    });

  }
}