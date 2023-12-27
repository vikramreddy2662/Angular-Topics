import { Component } from '@angular/core';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
  providers:[UserService]
})
export class AdminComponent {

constructor(private userService:UserService){}


name:string=' ';
gender:string='male';
subType:string='yearly';
status:string='active';

CreateNewUser(){

  this.userService.createUser(this.name,this.gender,this.subType,this.status);
  console.log(this.userService.users);
  

}



}
