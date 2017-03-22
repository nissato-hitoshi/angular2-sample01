import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { UserInfoComponent }      from './user-info.component';
import { UserPasswordComponent }  from './user-password.component';
import { AuthGuard }              from '../services/auth-guard.service';

const routes: Routes = [
  { 
    path: 'user',
    canActivate: [ AuthGuard ], 
    children: [
      {
        path: '',
        redirectTo: '/user/info',
        pathMatch: 'full'
      },
      {
        path: 'info',
        canActivateChild: [ AuthGuard ], 
        component: UserInfoComponent
      },
      {
        path: 'password',
        canActivateChild: [ AuthGuard ], 
        component: UserPasswordComponent
      },
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class UserRoutingModule { }
