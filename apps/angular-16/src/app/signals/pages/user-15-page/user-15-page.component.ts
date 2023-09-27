import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';
import { UsersService } from '../../services/users-service.service';
import { filter } from 'rxjs';

@Component({
  selector: 'signals-user-15-page',
  templateUrl: './user-15-page.component.html',
  styles: [],
})
export class User15PageComponent implements OnInit {
  private _users: User[] = [];
  private _currentPage = 1;

  public get users(): User[] {
    return this._users;
  }

  public get currentPage(): number {
    return this._currentPage;
  }

  public get labelTotalUsers(): string {
    return `Total de usuarios ${this.users.length}`;
  }

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.loadPage(this.currentPage);
  }

  loadPage(page: number) {
    this.usersService
      .loadPage(page)
      .pipe(filter((users) => users.length > 0))
      .subscribe((users) => {
        console.log(users);
        this._currentPage = page;
        this._users = [...this.users, ...users];
      });
  }
}
