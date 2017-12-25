import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SystelabTranslateModule } from 'systelab-translate';
import { LoginComponent } from './login.component';
import { ChangePasswordDialog } from './change-password-dialog.component';
import { SystelabComponentsModule } from 'systelab-components';

@NgModule({
	imports:         [
		CommonModule,
		FormsModule,
		SystelabTranslateModule,
		SystelabComponentsModule
	],
	declarations:    [
		LoginComponent,
		ChangePasswordDialog
	],
	exports:         [
		LoginComponent
	],
	entryComponents: [
		ChangePasswordDialog
	]

})
export class SystelabLoginModule {
	static forRoot(entryComponents?: Array<Type<any> | any[]>): ModuleWithProviders {
		return {
			ngModule:  SystelabLoginModule,
			providers: [

			]
		};
	}
}
