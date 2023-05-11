import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {SystelabTranslateModule} from 'systelab-translate';
import {LoginComponent} from './login.component';
import {ChangePasswordDialog} from './change-password-dialog.component';
import {SystelabComponentsModule} from 'systelab-components';
import {FormLoginComponent} from './form-login/form-login.component';
import {FormSignupComponent} from './form-signup/form-signup.component';
import {FormRecoveryComponent} from './form-recovery/form-recovery.component';
import {PasswordIndicatorComponent} from './password-indicator/password-indicator.component';
import {AllowedRolesDirective} from './role-directives/allowed-roles.directive';
import {ForbiddenRolesDirective} from './role-directives/forbidden-roles.directive';
import {RouterLink} from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SystelabTranslateModule,
        SystelabComponentsModule,
        RouterLink
    ],
    declarations: [
        LoginComponent,
        ChangePasswordDialog,
        FormLoginComponent,
        FormSignupComponent,
        FormRecoveryComponent,
        PasswordIndicatorComponent,
        AllowedRolesDirective,
        ForbiddenRolesDirective
    ],
    exports: [
        LoginComponent,
        PasswordIndicatorComponent,
        AllowedRolesDirective,
        ForbiddenRolesDirective,
        ChangePasswordDialog
    ]
})
export class SystelabLoginModule {
}
