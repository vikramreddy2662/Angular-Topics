import { Component,Inject } from '@angular/core';
import { UserService } from '../../../Services/user.service';
import { User } from '../../../Models/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
 // providers:[UserService]
})
export class UserListComponent {


constructor(@Inject('USER_SERVICE') private userservice :UserService){

}

userlist = this.userservice.GetAllUsers();


}
//here we are using string as a unique identifier to get the instance of that class 