import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersService } from '../../services/users-service.service';
import { User } from '../../interfaces/user-request.interface';
import { filter } from 'rxjs';

@Component({
  selector: 'signals-user-16-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-16-page.component.html',
})
export class User16PageComponent implements OnInit {
  private usersService = inject(UsersService);

  private _users = signal<User[]>([]);
  private _currentPage = signal(1);

  public users = computed(() => this._users());
  public currentPage = computed(() => this._currentPage());
  public labelTotalUsers = computed(
    () => `Total de usuarios ${this.users().length}`
  );

  ngOnInit(): void {
    this.loadPage(this.currentPage());
  }

  loadPage(page: number) {
    this.usersService
      .loadPage(page)
      .pipe(filter((users) => users.length > 0))
      .subscribe((newUsers) => {
        console.log(newUsers);
        this._currentPage.set(page);
        this._users.update((currentUsers) => [...currentUsers, ...newUsers]);
      });
  }
}
