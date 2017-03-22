import { Component }    from '@angular/core';
import { AuthService }  from '../services/auth.service';
import { UserModel }    from '../models/user.model';

@Component({
  moduleId: module.id,
  templateUrl: 'user-info.component.html',
  styleUrls: ['user-info.component.css']
})
export class UserInfoComponent {
  user: UserModel;

  /**
   * コンストラクタ
   * @param authService 認証サービス
   */
  constructor(protected authService: AuthService) {
    this.user = authService.user;
  } 
}
