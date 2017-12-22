import { Component } from '@angular/core';
import { DialogService } from 'systelab-components/widgets/modal/dialog/dialog.service';
import { ChangePasswordDialog } from './systelab-login/change-password-dialog.component';

@Component({
	selector:    'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {

	public userName = '';
	public password = '';

	public constructor(protected dialogService: DialogService) {

	}

	public doLogin() {
		this.dialogService.showDialog(ChangePasswordDialog, ChangePasswordDialog.getParameters());
		console.log('doLogin');
	}

}
