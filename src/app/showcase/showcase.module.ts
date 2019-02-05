import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ShowcaseComponent } from './showcase.component';
import { ShowcaseRoleDirectivesComponent } from './showcase-role-directives/showcase-role-directives.component';
import { ShowcaseAuthorsAndAdminsCanViewComponent } from './showcase-role-directives/showcase-authors-and-admins-can-view.component';
import { ShowcaseLoggedUsersCanViewComponent } from './showcase-role-directives/showcase-logged-users-can-view.component';
import { ShowcaseOnlyForAdminsComponent } from './showcase-role-directives/showcase-only-for-admins.component';
import { ShowcaseLoggedUserRolesService } from './showcase-role-directives/showcase-logged-user-roles.service';
import { ShowcaseForbiddenForBasicUsersComponent } from './showcase-role-directives/showcase-forbidden-for-basic-users.component';
import {
    ShowcaseForbiddenForBasicAndAuthorsComponent
} from './showcase-role-directives/showcase-forbidden-for-basic-and-authors.component';
import { LoggedUserRolesService } from '../systelab-login/role-directives/logged-user-roles.service';
import { SystelabLoginModule } from '../systelab-login/systelab-login.module';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        SystelabLoginModule
    ],
    exports: [
        ShowcaseComponent
    ],
    declarations: [
        ShowcaseComponent,
        ShowcaseRoleDirectivesComponent,
        ShowcaseLoggedUsersCanViewComponent,
        ShowcaseAuthorsAndAdminsCanViewComponent,
        ShowcaseOnlyForAdminsComponent,
        ShowcaseForbiddenForBasicUsersComponent,
        ShowcaseForbiddenForBasicAndAuthorsComponent
    ],
    providers: [
        ShowcaseLoggedUserRolesService,
        {provide: LoggedUserRolesService, useExisting: ShowcaseLoggedUserRolesService},
    ],
    bootstrap: [ShowcaseComponent]
})
export class ShowcaseModule {
}

export { ShowcaseComponent } from './showcase.component';
