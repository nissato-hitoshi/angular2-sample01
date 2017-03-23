import { Component, OnInit }      from '@angular/core';
import { Member }                 from '../models/member.model';
import { MemberService }          from '../services/member.service';

@Component({
    moduleId: module.id,
    selector: 'member',
    templateUrl: 'member.component.html',
    styleUrls: ['member.component.css']
})
export class MemberComponent implements OnInit {
    public searchValue: string = '';
    public selectedMember: Member = new Member;
    public itemsPerPage: number = 10;
    public currentPage: number = 1;
    private _maxPage: number;

    /**
     * コンストラクタ
     * @param memberService メンバーサービスオブジェクト(DI)
     */
    constructor(private memberService: MemberService) { }

    /**
     * members プロパティの取得
     */
    get members(): Member[] {
        return this.memberService.members;
    }

    /**
     * members プロパティへの設定
     */
    set members(param: Member[]) {
        this.memberService.members = param;
    }

    /**
     * 初期処理
     */
    ngOnInit(): void {
        // 登録メンバーリストの取得
        this.memberService.getMembers()
            .subscribe(members => this.members = members);
    }

   /**
    * 検索項目値更新処理
    * @param $event 画面イベントオブジェクト
    */
    onKeyup(val: string): void {
        this.currentPage = 1;
        this.memberService.searchMembers(val)
            .subscribe(members => this.members = members);
    }

    /**
     * リスト選択メソッド
     * @param member 選択した member オブジェクト
     */
    onSelected(member: Member): void {
        this.selectedMember = member;
    }

    /**
     * ページ数の算出
     */
    range() {
        this._maxPage = Math.ceil(this.members.length / this.itemsPerPage);
        var ret = [];
        for (var i=1; i <= this._maxPage; i++) {
            ret.push(i);
        }
        return ret;
    }

    setPage(n: number) {
        this.currentPage = n;
    }

    prevPage() {
        if (this.currentPage > 1) {
            --this.currentPage;
        }
    }

    nextPage() {
        if (this.currentPage < this._maxPage) {
            ++this.currentPage;
        }
    }

    prevPageDisabled() {
        return this.currentPage === 1 ? "disabled" : "";
    }

    nextPageDisabled() {
        return this.currentPage === this._maxPage ? "disabled" : "";
    }

}
