import { Injectable }       from '@angular/core';
import { Jsonp }            from '@angular/http';
import { URLSearchParams }  from '@angular/http';
import { Observable }       from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { UserModel }        from '../models/user.model';
import { ResultModel }      from '../models/result.model';

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;
  redirectUrl: string = '';
  user: UserModel;
  url: string = "http://localhost/mmsb/api/users";

  /**
   * コンストラクタ
   * @param jsonp JSONPオブジェクト 
   */
  constructor(private jsonp: Jsonp) { }

  /**
   * ログイン処理
   * @param email ログインID 
   * @param password パスワード
   */
  login(email:string, password: string): Observable<UserModel> {
    var params = new URLSearchParams();

    params.set('email', email);
    params.set('password', password);
    params.set('callback', 'JSONP_CALLBACK');

    // JSONP にて認証サイトへアクセス
    return this.jsonp.get(this.url + "/auth", { search: params })
          .map(res => {
            // ユーザオブジェクトの設定
            this.user = res.json() as UserModel;

            // ユーザオブジェクトの判定
            // オブジェクトデータが返されれば認証OKと判断
            this.isLoggedIn = false;
            if ('id' in this.user) {
              this.isLoggedIn = true;
            }

            // ユーザオブジェクトを返す
            return this.user;
          })
          .catch(this.handleError);
  }

  /**
   * ログアウト処理
   */
  logout(): void {
    this.isLoggedIn = false;
  }

  changePassword(old_password: string, new_password: string): Observable<ResultModel> {
    var params = new URLSearchParams();

    params.set('id', this.user.id.toString());
    params.set('old_password', old_password);
    params.set('new_password', new_password);
    params.set('callback', 'JSONP_CALLBACK');

    // JSONP にて認証サイトへアクセス
    return this.jsonp.get(this.url + "/changepassword", { search: params })
          .map(res => res.json())
          .catch(this.handleError);
  }

  /**
   * エラー処理
   * @param error エラーオブジェクト
   */
  private handleError (error: any) {
      console.error(error || 'Server error !!');
      return Observable.throw('Server error');
  }
}
