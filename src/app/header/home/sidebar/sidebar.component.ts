import { Component } from '@angular/core';
import { Service } from './../../../Services/Services.service' ;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
 
  OnSubscribe(){

 
    
    let subService=new Service();
    subService.OnSubscribeClicked('daily');


  }

}
