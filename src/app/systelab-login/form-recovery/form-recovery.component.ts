import { Component, EventEmitter, Input, Output } from '@angular/core';
import { I18nService } from 'systelab-translate/lib/i18n.service';

@Component({
	selector:    'slt-form-recovery',
	templateUrl: './form-recovery.component.html',
	styleUrls:   ['../login.component.scss']
})
export class FormRecoveryComponent {
	private _userName = '';
	private _currentForm = '';

	@Input()
	get userName(): string {
		return this._userName;
	}

	@Output() userNameChange = new EventEmitter();

	set userName(value: string) {
		this._userName = value;
		this.userNameChange.emit(this._userName);
	}

	@Input()
	get currentForm(): string {
		return this._currentForm;
	}

	@Output() currentFormChange = new EventEmitter();

	set currentForm(value: string) {
		this._currentForm = value;
		this.currentFormChange.emit(this._currentForm);
	}

	@Input() isLoginActive = false;
	@Input() txtRecoverProcessStarted = undefined;
	@Input() errorUserDoesNotExist = false;
	@Input() errorUserPwd = false;
	@Input() txtUsername = '';
	@Output() recovery = new EventEmitter();
	@Input() isLoading = false;

	constructor(protected i18nService: I18nService) {
		if (!this.txtUsername) {
			this.txtUsername = i18nService.instant('COMMON_USERNAME');
		}
	}

	public doRecovery() {
		this.recovery.emit();
	}

	public goLogin() {
		this.currentForm = 'login';
	}
}
