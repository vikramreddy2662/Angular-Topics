import { Component, ViewEncapsulation,Inject } from '@angular/core';
import { Service } from '../Services/SubScribeServices.service' ;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation:ViewEncapsulation.None,
 // providers:[Service]//=>tells angular what to provide
})
export class HeaderComponent {

//=>tells angular how to provide.
constructor(@Inject('USER_SERVICE') private subService:Service){

}

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

 
    
    //let subService=new Service();
   this.subService.OnSubscribeClicked('monthly');


  }
}