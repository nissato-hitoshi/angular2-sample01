// Angular Imports
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { CommonModule }         from '@angular/common';
import { MemberRoutingModule }  from './member-routing.module';
import { MemberComponent }      from './member.component';
import { MemberService }        from '../services/member.service';

@NgModule({
    imports: [ MemberRoutingModule, FormsModule, CommonModule ],
    declarations: [ MemberComponent ],
    exports: [ MemberComponent ],
    providers: [ MemberService ]
})
export class MemberModule {

}
