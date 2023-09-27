import { Component, signal } from '@angular/core';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
})
export class SideMenuComponent {
  public menuItems = signal<MenuItem[]>([
    { title: 'Counter 15', route: 'counter-15' },
    { title: 'Counter 16', route: 'counter-16' },
    { title: 'Mutations 16', route: 'properties' },
    { title: 'User 16', route: 'user-info' },
    { title: 'List 15', route: 'user-15' },
    { title: 'List 16', route: 'user-16' },
  ]);
}
