import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignalsRoutingModule } from './signals-routing.module';
import { SignalsLayoutComponent } from './layout/signals-layout.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';
import { User15PageComponent } from './pages/user-15-page/user-15-page.component';
import { Counter15PageComponent } from './pages/counter-15-page/counter-15-page.component';
import { Counter16PageComponent } from './pages/counter-16-page/counter-16-page.component';

@NgModule({
  declarations: [
    SignalsLayoutComponent,
    SideMenuComponent,
    PropertiesPageComponent,
    UserInfoPageComponent,
    User15PageComponent,
    Counter15PageComponent,
    Counter16PageComponent,
  ],
  imports: [CommonModule, SignalsRoutingModule],
})
export class SignalsModule {}
