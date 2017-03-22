import { Component }        from '@angular/core';
import { Router }           from '@angular/router';
import { AuthService }      from '../services/auth.service';
import { Observable }       from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ResultModel }      from '../models/result.model';

@Component({
  moduleId: module.id,
  templateUrl: 'user-password.component.html',
  styleUrls: ['user-password.component.css']
})
export class UserPasswordComponent {

  old_password: string = '';
  new_password: string = '';
  new_password_conf: string = '';
  message: string = '';
  alertStr: string = '';

  /**
   * 初期処理
   */
  constructor(public authService: AuthService, public router: Router) {}

  onClick(): void {
    var result: ResultModel;

    this.alertStr = 'alert-danger';

    this.authService.changePassword(this.old_password, this.new_password)
      .subscribe(
        res => {
            this.message = res.message;
            if (res.status) {
              this.alertStr = 'alert-success';
            }
            console.log(this.message);
        },
        err => {
          this.message = err;
        }
      );
  }

}
