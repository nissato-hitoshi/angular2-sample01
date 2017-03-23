import { Injectable, Inject }   from '@angular/core';
import { Jsonp }                from '@angular/http';
import { URLSearchParams }      from '@angular/http';
import { Observable }           from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Member }               from '../models/member.model';

@Injectable()
export class MemberService {
    members: Member[] = [];
    url: string = 'http://localhost/mmsb/api/members';

    /**
     * コンストラクタ
     * @param jsonp Jsonpオブジェクト
     */
    constructor(protected jsonp: Jsonp) {}

    /**
     * メンバーオブジェクトの取得
     */
    getMembers(): Observable<Member[]> {
      var params = new URLSearchParams();

      params.set('callback', 'JSONP_CALLBACK');

      return this.jsonp.get(this.url, { search: params })
            .map(res => res.json());
    }

    /**
     * メンバー検索
     * @param name 検索値
     */
    searchMembers(name: string): Observable<Member[]> {
      var params = new URLSearchParams();

      params.set('name', name);
      params.set('callback', 'JSONP_CALLBACK');

      return this.jsonp.get(this.url + '/search', { search: params })
          .map(res => res.json());
    }
}
