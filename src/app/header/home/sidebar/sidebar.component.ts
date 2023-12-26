import { Component } from '@angular/core';
import { Service } from './../../../Services/Services.service' ;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  providers:[Service]
})
export class SidebarComponent {

  constructor(private subService:Service){}
 
  OnSubscribe(){

//let subService=new Service();
    this.subService.OnSubscribeClicked('daily');


  }

}
