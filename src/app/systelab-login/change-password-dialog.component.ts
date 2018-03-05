import { AfterViewInit, Component } from '@angular/core';
import { DialogRef, ModalComponent } from 'systelab-components/widgets/modal';
import { I18nService } from 'systelab-translate/lib/i18n.service';
import { Observable } from 'rxjs/Observable';
import { DialogService, MessagePopupService, SystelabModalContext } from 'systelab-components/widgets/modal';

export class ChangePasswordDialogParameters extends SystelabModalContext {
	public width = 550;
	public height = 330;
	public userName: string;
	public minPasswordStrengthValue = 1;
	public action: (oldPassword: string, newPassword: string) => Observable<boolean>;
}

@Component({
	templateUrl: 'change-password-dialog.component.html',
	styleUrls:   ['change-password-dialog.component.scss'],
})
export class ChangePasswordDialog implements ModalComponent<ChangePasswordDialogParameters>, AfterViewInit {

	public parameters: ChangePasswordDialogParameters;

	public isLoading = false;

	public newPassword: string;
	public repeatedPassword: string;
	public oldPassword: string;


	public static getParameters(): ChangePasswordDialogParameters {
		return new ChangePasswordDialogParameters();
	}

	constructor(public dialog: DialogRef<ChangePasswordDialogParameters>, protected dialogService: DialogService, protected messagePopupService: MessagePopupService, protected i18nService: I18nService) {
		this.parameters = dialog.context;
	}

	public ngAfterViewInit() {
		setTimeout(() => {
			document.getElementById('form-h-it')
				.focus();
			this.oldPassword = '';
		}, 500);
	}

	public close(): void {
		this.dialog.close();
	}

	public isOK() {
		return this.oldPassword &&
			this.newPassword === this.repeatedPassword;
	}

	public changePassword(): void {
		this.parameters.action(this.oldPassword, this.newPassword)
			.subscribe(
				(response) => {
					if (response) {
						this.close();
					}
				}
			);
	}

	public checkNewRepeatedPassword(): boolean {
		return this.newPassword !== this.repeatedPassword;
	}
}
