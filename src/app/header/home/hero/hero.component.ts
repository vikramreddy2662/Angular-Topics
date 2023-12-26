import { Component, inject } from '@angular/core';
import { Service } from './../../../Services/Services.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  providers: [Service]
})
export class HeroComponent {

  constructor(private subService:Service){

  }

  OnSubscribe() {

    //let subService = new Service();
    this.subService.OnSubscribeClicked('yearly');


  }

} 