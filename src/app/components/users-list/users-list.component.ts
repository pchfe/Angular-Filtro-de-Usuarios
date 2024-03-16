import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';
// import { UsersList } from '../../data/users-list';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  displayedColumns: string[] = ['name','date', 'status'];
  // usersList: IUser[] = UsersList;

  @Input({ required: true }) usersList: IUser[] = [];

  @Output('userSelected') userSelectedEmitt = new EventEmitter<IUser>();

  onUserSelected(user: IUser) {
    this.userSelectedEmitt.emit(user);
  }
}
