import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';
import { UserDetailComponent } from './layout/userDetail/UserDetail.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'tables',
        loadChildren: () => import('./demo/pages/tables/tables.module').then((m) => m.TablesModule)
      }
    ]
  },
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./demo/pages/authentication/authentication.module').then((m) => m.AuthenticationModule)
      }
    ]
  },
  {
    path: 'users/:id',
    component: UserDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
