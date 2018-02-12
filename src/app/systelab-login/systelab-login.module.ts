import {ModuleWithProviders, NgModule, Type} from '@angular/core';
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

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SystelabTranslateModule,
        SystelabComponentsModule
    ],
    declarations: [
        LoginComponent,
        ChangePasswordDialog,
        FormLoginComponent,
        FormSignupComponent,
        FormRecoveryComponent,
        PasswordIndicatorComponent
    ],
    exports: [
        LoginComponent,
        PasswordIndicatorComponent
    ],
    entryComponents: [
        ChangePasswordDialog
    ]

})
export class SystelabLoginModule {
    static forRoot(entryComponents?: Array<Type<any> | any[]>): ModuleWithProviders {
        return {
            ngModule: SystelabLoginModule,
            providers: []
        };
    }
}
