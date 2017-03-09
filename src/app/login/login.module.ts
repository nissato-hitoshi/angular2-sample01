import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { LoginComponent }       from './login.component';
import { LoginRoutingModule }   from './login-routing.module';
import { AuthGuard }            from '../services/auth-guard.service';
import { AuthService }          from '../services/auth.service';

@NgModule({
  imports: [ LoginRoutingModule, FormsModule ],
  declarations: [ LoginComponent ],
  providers: [ AuthGuard, AuthService ]
})
export class LoginModule {}
