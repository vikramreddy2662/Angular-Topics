import { Component } from '@angular/core';
import { error } from 'console';
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

    // observer.next([1, 21, 34, 53, 21, 56]); to emit whole data at once.

    setTimeout(() => { observer.next(11) }, 1000);
    setTimeout(() => { observer.next(43) }, 2000)
    setTimeout(() => { observer.next(87) }, 3000)
    setTimeout(() => { observer.error(new Error('Something went wrong please try again later')) }, 5000)//after 3 seconds execution gets stops error message gets displayed.
    /*when we use error method and set time out data up to that that message will be displayed after errror method gets
     executed be other nethod gets executed
      */
    setTimeout(() => { observer.next(96) }, 5000)
    setTimeout(() => { observer.next(1) }, 7000)
    setTimeout(() => { observer.complete() }, 4000)

    //emmitting data in chunks 


  });

  //observables emits 3 types of events next error complete. emits data as call back.

  //observer also takes or recieves 3 types of callbacks as data next,error & complete.recieves data as call back 
  GetAsyncData() {

    /*this.myObservable.subscribe((val: any) => {

      //this.data=val; to get whole data at once from array

      this.data.push(val);
    },

      (err) => {
        alert(err.message);
      },
      () => {

        alert('all the data is transferred');
      });*/

    this.myObservable.subscribe({
      next: (val: any) => {
        this.data.push(val);

      },

      error(err) {
        alert(err.message);
      },
      complete() {
        alert('all the data get streamed');
      }
    });
  }
}