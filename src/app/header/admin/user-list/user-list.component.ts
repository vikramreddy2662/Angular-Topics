import { Component,Inject } from '@angular/core';
import { UserService } from '../../../Services/user.service';
import {USER_TOKEN} from './../../../app.module';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
 // providers:[UserService]
})
export class UserListComponent {


constructor(@Inject(USER_TOKEN) private userservice :UserService){

}

userlist = this.userservice.GetAllUsers();


}
//here we are using string as a unique identifier to get the instance of that class 