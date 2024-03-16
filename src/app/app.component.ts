import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';
import { IFilterOption } from './interfaces/filter-options.interface';
import { filterUsersList } from './utils/filter-users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  usersList: IUser[] = [];
  usersListFiltered: IUser[] = [];
  userSelected: IUser = {} as IUser;
  showUserDetails: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.usersList = UsersList;
      this.usersListFiltered = this.usersList;
    }, 1);
  }
  
  onUserSelected(user: IUser) {
    this.userSelected = user;
    this.showUserDetails = true; 
  }

  onFilter(filterOptions: IFilterOption) {
    this.usersListFiltered = filterUsersList(filterOptions, this.usersList);
  }
  
}
