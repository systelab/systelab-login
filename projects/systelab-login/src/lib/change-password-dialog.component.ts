import { AfterViewInit, Component } from '@angular/core';
import { DialogRef, MessagePopupService, ModalComponent, SystelabModalContext } from 'systelab-components';
import { I18nService } from 'systelab-translate';
import { Observable } from 'rxjs';

export class ChangePasswordDialogParameters extends SystelabModalContext {
	public override width = 550;
	public override height = 330;
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

	constructor(public dialog: DialogRef<ChangePasswordDialogParameters>,
							protected i18nService: I18nService, protected messagePopupService: MessagePopupService) {
		this.parameters = dialog.context;
	}

	public static getParameters(): ChangePasswordDialogParameters {
		return new ChangePasswordDialogParameters();
	}

	public ngAfterViewInit(): void {
		setTimeout(() => {
			document.getElementById('form-h-it')
				.focus();
			this.oldPassword = '';
		}, 500);
	}

	public close(): void {
		this.dialog.close();
	}

	public isOK(): boolean {
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
