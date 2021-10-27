import { Component } from '@angular/core';
import { DialogService } from 'systelab-components';
import {
	ChangePasswordDialog,
	ChangePasswordDialogParameters
} from '../../../systelab-login/src/lib/change-password-dialog.component';

@Component({
	selector:    'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {

	public userName = '';
	public password = '';
	public name = '';
	public lastName = '';
	public currentForm = '';
	public email = '';
	public errorUserPwd = false;
	public errorUserDoesNotExist = false;
	public errorUserExist = false;
	public txtUsername = '';
	public txtRecoverProcessStarted = '';
	public pathTerms = 'http://www.werfen.com/en/terms-and-conditions';
	public pathPrivacy = 'http://www.werfen.com/en/privacy-policy';
	public isRecoveryActive = true;
	public isSignUpActive = true;
	public isLoginActive = true;
	public isLoading = false;

	public constructor(protected dialogService: DialogService) {
		this.currentForm = 'login';
		this.txtUsername = 'Username';
	}

	public doLogin(): void {
		console.log(this.userName + ' ' + this.password);
		const parameters = new ChangePasswordDialogParameters();
		parameters.hasNumpad = true;
		this.dialogService.showDialog(ChangePasswordDialog, parameters);
		console.log('doLogin');
		this.isLoading = true;
	}

	public doSignUp(): void {
		console.log(this.userName + ' ' + this.password + ' ' + this.name + ' ' + this.lastName + ' ' + this.email);
		this.dialogService.showDialog(ChangePasswordDialog, ChangePasswordDialog.getParameters());
		console.log('doSignUp');
		this.isLoading = true;
	}

	public doRecovery(): void {
		console.log(this.userName);
		this.dialogService.showDialog(ChangePasswordDialog, ChangePasswordDialog.getParameters());
		console.log('doRecovery');
		this.isLoading = true;
	}

}
