import { Component, AfterViewInit } from '@angular/core';
import { DialogRef, ModalComponent } from 'ngx-modialog';
import { ModulabModalContext } from 'systelab-components/widgets/modal/plugin/modulab';
import { MessagePopupService } from 'systelab-components/widgets/modal/message-popup/message-popup.service';
import { DialogService } from 'systelab-components/widgets/modal/dialog/dialog.service';
import { I18nService } from 'systelab-translate/lib/i18n.service';
import { Observable } from 'rxjs/Observable';

export class ChangePasswordDialogParameters extends ModulabModalContext {
	public width = 550;
	public height = 330;
	public userName: string;
	public minPasswordStrengthValue=1;
	public action: (oldPassword: string, newPassword: string) => Observable<boolean>;
}

@Component({
	templateUrl: 'change-password-dialog.component.html',
	styleUrls:   ['change-password-dialog.component.scss'],
})
export class ChangePasswordDialog implements ModalComponent<ChangePasswordDialogParameters>, AfterViewInit {

	public parameters: ChangePasswordDialogParameters;

	public strongPatternRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9])(?=.{8,})');
	public veryStrongPatternRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9])(?=.{14,})');
	public goodPatternRegex = new RegExp('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})');
	public moderatePatternRegex = new RegExp('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{4,})');

	public isLoading = false;

	public newPassword: string;
	public repeatedPassword: string;
	public oldPassword: string;

	public currentPasswordStrengthValue = 'slab-very-weak';
	public currentPasswordStrenghtValueNumber = 0;

	public passwordComplexityLabel = '';
	public complexityValue = '';
	public passwordCriteriaLabel = '';
	public minPasswordLength: number;

	public static getParameters(): ChangePasswordDialogParameters {
		return new ChangePasswordDialogParameters();
	}

	constructor(public dialog: DialogRef<ChangePasswordDialogParameters>, protected dialogService: DialogService, protected messagePopupService: MessagePopupService, protected i18nService: I18nService) {
		this.parameters = dialog.context;
		this.setupPasswordComplexityTooltip();
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
			this.newPassword === this.repeatedPassword &&
			this.currentPasswordStrenghtValueNumber >= this.parameters.minPasswordStrengthValue;
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

	public checkPasswordStrength(event: any) {
		this.currentPasswordStrengthValue = 'slab-very-weak';

		if (!event.target.value) {
			this.currentPasswordStrengthValue = 'slab-very-weak';
			this.passwordComplexityLabel = '';
			this.currentPasswordStrenghtValueNumber = 0;
		} else if (this.veryStrongPatternRegex.test(event.target.value)) {
			this.currentPasswordStrengthValue = 'slab-very-strong';
			this.passwordComplexityLabel = 'PASSWORD_STRENGTH_VERY_STRONG';
			this.currentPasswordStrenghtValueNumber = 5;
		} else if (this.strongPatternRegex.test(event.target.value)) {
			this.currentPasswordStrengthValue = 'slab-strong';
			this.passwordComplexityLabel = 'PASSWORD_STRENGTH_STRONG';
			this.currentPasswordStrenghtValueNumber = 4;
		} else if (this.goodPatternRegex.test(event.target.value)) {
			this.currentPasswordStrengthValue = 'slab-good';
			this.passwordComplexityLabel = 'PASSWORD_STRENGTH_GOOD';
			this.currentPasswordStrenghtValueNumber = 3;
		} else if (this.moderatePatternRegex.test(event.target.value)) {
			this.currentPasswordStrengthValue = 'slab-moderate';
			this.passwordComplexityLabel = 'PASSWORD_STRENGTH_MODERATE';
			this.currentPasswordStrenghtValueNumber = 2;
		} else {
			this.currentPasswordStrengthValue = 'slab-weak';
			this.passwordComplexityLabel = 'PASSWORD_STRENGTH_WEAK';
			this.currentPasswordStrenghtValueNumber = 1;
		}
	}

	public setupPasswordComplexityTooltip() {
		switch (this.parameters.minPasswordStrengthValue) {
			case 2:
				this.complexityValue = this.i18nService.instant('PASSWORD_STRENGTH_MODERATE');
				this.passwordCriteriaLabel = 'PASSWORD_CRITERIA_LOW';
				this.minPasswordLength = 4;
				break;
			case 3:
				this.complexityValue = this.i18nService.instant('PASSWORD_STRENGTH_GOOD');
				this.passwordCriteriaLabel = 'PASSWORD_CRITERIA_LOW';
				this.minPasswordLength = 6;
				break;
			case 4:
				this.complexityValue = this.i18nService.instant('PASSWORD_STRENGTH_STRONG');
				this.passwordCriteriaLabel = 'PASSWORD_CRITERIA';
				this.minPasswordLength = 8;
				break;
			case 5:
				this.complexityValue = this.i18nService.instant('PASSWORD_STRENGTH_VERY_STRONG');
				this.passwordCriteriaLabel = 'PASSWORD_CRITERIA';
				this.minPasswordLength = 14;
				break;
			default:
				this.complexityValue = this.i18nService.instant('PASSWORD_STRENGTH_WEAK');
				this.passwordCriteriaLabel = 'PASSWORD_CRITERIA_WEAK';
				this.minPasswordLength = 2;
		}
	}

	public getPasswordComplexityAsLabel() {
		if (this.passwordComplexityLabel !== '') {
			return this.i18nService.instant(this.passwordComplexityLabel);
		}
	}

	public getPasswordComplexityTooltip() {
		if (this.passwordCriteriaLabel !== '') {
			return this.i18nService.instant(this.passwordCriteriaLabel, {
				complexity:  this.complexityValue,
				char_number: this.minPasswordLength
			});
		}
	}

	public checkNewRepeatedPassword(): boolean {
		return this.newPassword !== this.repeatedPassword;
	}
}
