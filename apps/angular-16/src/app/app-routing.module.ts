import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

export const routes: Route[] = [
  {
    path: 'signals',
    loadChildren: () =>
      import('./signals/signals.module').then((m) => m.SignalsModule),
  },
  {
    path: '**',
    redirectTo: 'signals',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
