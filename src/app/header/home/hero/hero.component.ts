import { Component, inject } from '@angular/core';
import { Service } from '../../../Services/SubScribeServices.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  //providers: [Service]//what to provide
})
export class HeroComponent {


  //how to provide
  constructor(private subService:Service){

  }

  OnSubscribe() {

    //let subService = new Service();
    this.subService.OnSubscribeClicked('yearly');


  }

} 