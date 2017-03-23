import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent }      from './member.component';
import { AuthGuard }            from '../services/auth-guard.service';

const routes: Routes = [
  { 
    path: 'member',
    component: MemberComponent,
    canActivate: [ AuthGuard ], 
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class MemberRoutingModule { }
