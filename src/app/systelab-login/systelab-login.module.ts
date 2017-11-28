import { ANALYZE_FOR_ENTRY_COMPONENTS, ModuleWithProviders, NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SystelabTranslateModule } from 'systelab-translate';
import { LoginComponent } from './login.component';
import { ChangePasswordDialog } from './change-password-dialog.component';
import { DialogService } from 'systelab-components/widgets/modal/dialog/dialog.service';



@NgModule({
	imports:         [
		CommonModule,
		FormsModule,
		SystelabTranslateModule,
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
	],
	providers: [
		DialogService
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
