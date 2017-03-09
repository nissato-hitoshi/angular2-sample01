import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { UserInfoComponent }      from './user-info.component';
import { UserPasswordComponent }  from './user-password.component';
import { AuthGuard }              from '../services/auth-guard.service';

const routes: Routes = [
  { 
    path: 'user',
    children: [
      {
        path: 'info',
        component: UserInfoComponent,
        canActivateChild: [ AuthGuard ], 
      },
      {
        path: 'password',
        component: UserPasswordComponent,
        canActivateChild: [ AuthGuard ], 
      },
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class UserRoutingModule { }
