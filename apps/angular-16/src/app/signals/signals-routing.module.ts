import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignalsLayoutComponent } from './layout/signals-layout.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';
import { User15PageComponent } from './pages/user-15-page/user-15-page.component';
import { User16PageComponent } from './pages/user-16-page/user-16-page.component';
import { Counter15PageComponent } from './pages/counter-15-page/counter-15-page.component';
import { Counter16PageComponent } from './pages/counter-16-page/counter-16-page.component';

const routes: Routes = [
  {
    path: '',
    component: SignalsLayoutComponent,
    children: [
      { path: 'counter-15', component: Counter15PageComponent },
      { path: 'counter-16', component: Counter16PageComponent },
      { path: 'properties', component: PropertiesPageComponent },
      { path: 'user-info', component: UserInfoPageComponent },
      { path: 'user-15', component: User15PageComponent },
      { path: 'user-16', component: User16PageComponent },
      { path: '**', redirectTo: 'counter' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignalsRoutingModule {}
