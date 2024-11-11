import { Routes } from '@angular/router';
import { UsersLegacyComponent } from './users/pages/users-legacy/users-legacy.component';
import { UsersSignalsComponent } from './users/pages/user-signals/users-signals.component';

export const routes: Routes = [
  {
    path: 'user-legacy',
    component: UsersLegacyComponent,
  },
  {
    path: 'user-signals',
    component: UsersSignalsComponent,
  },
  { path: '', redirectTo: '/user-legacy', pathMatch: 'full' },
];
