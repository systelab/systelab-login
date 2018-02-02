import { Component, ViewEncapsulation } from '@angular/core';
import { DialogService } from 'systelab-components/widgets/modal/dialog/dialog.service';
import { ChangePasswordDialog } from './systelab-login/change-password-dialog.component';

@Component({
	selector:    'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['app.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class AppComponent {

	public userName = '';
	public password = '';
	public name='';
	public lang='';
	public lastName='';
	public typeForm='';
	public email='';
	public errorUserPwd=false;
	public errorUserDoesNotExist=false;
	public errorUserExist=false;
	public txtUsername='';
	public txtRecoverProcessStarted='';
	public pathTerms='http://www.werfen.com/en/terms-and-conditions';
	public pathPrivacy='http://www.werfen.com/en/privacy-policy';

	public constructor(protected dialogService: DialogService) {
		this.typeForm='login';
		this.txtUsername='Username';
	}

	public doLogin() {
		this.dialogService.showDialog(ChangePasswordDialog, ChangePasswordDialog.getParameters());
		console.log('doLogin');
	}

	public doSignUp() {
		this.dialogService.showDialog(ChangePasswordDialog, ChangePasswordDialog.getParameters());
		console.log('doLogin');
		this.errorUserExist =true;
	}

	public doRecovery() {
		this.dialogService.showDialog(ChangePasswordDialog, ChangePasswordDialog.getParameters());
		console.log('doLogin');
	}

	

}
