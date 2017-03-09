import { Component,Input }  from '@angular/core';
import { Router }           from '@angular/router';
import { AuthService }      from '../services/auth.service';
import { Observable }       from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  moduleId:     module.id,
  templateUrl:  './login.component.html',
  styleUrls:    ['./login.component.css'] 
 })
export class LoginComponent {
  email: string = '';
  password: string = '';

  /**
   * 初期処理
   */
  constructor(public authService: AuthService, public router: Router) {}

  /**
   * ログイン処理
   */
  login() {

    this.authService.login(this.email, this.password).subscribe(() => {

      if (this.authService.isLoggedIn) {
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/home';
        this.router.navigate([redirect]);
      } else {
        console.log('login error !!');
      }
    });
  }

  /**
   * ログアウト処理
   */
  logout() {
    this.authService.logout();
  }

  /**
   * 入力チェック処理
   */
  checkInputValue():boolean {
    var disabled = ( !this.email || !this.password );
    return disabled;
  }
}
