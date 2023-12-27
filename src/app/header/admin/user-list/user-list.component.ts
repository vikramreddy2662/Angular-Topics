import { Component } from '@angular/core';
import { UserService } from '../../../Services/user.service';
import { User } from '../../../Models/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
 // providers:[UserService]
})
export class UserListComponent {


constructor(private userservice :UserService){

}

userlist = this.userservice.GetAllUsers();


}
