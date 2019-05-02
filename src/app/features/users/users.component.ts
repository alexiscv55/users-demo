import { Component } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  protected users$ = this.usersService.getUsers();

  constructor(private readonly usersService: UsersService) { }

}
