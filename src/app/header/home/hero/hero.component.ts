import { Component, inject } from '@angular/core';
import { Service } from './../../../Services/Services.service' ;

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  OnSubscribe(){

 
    
    let subService=new Service();
    subService.OnSubscribeClicked('yearly');


  }

} 