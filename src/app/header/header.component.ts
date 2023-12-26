import { Component, ViewEncapsulation } from '@angular/core';
import { Service } from './../Services/Services.service' ;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation:ViewEncapsulation.None
})
export class HeaderComponent {
  selectedTab: string = 'home';

  //When HOME Link is clicked
  HomeClicked(){
    this.selectedTab = 'home';
  }

  //When Admin Link is clicked
  AdminClicked(){
    this.selectedTab = 'admin';
  }
  OnSubscribe(){

 
    
    let subService=new Service();
    subService.OnSubscribeClicked('monthly');


  }
}