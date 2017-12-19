import { Component, EventEmitter, Input, Output } from '@angular/core';
import { I18nService } from 'systelab-translate/lib/i18n.service';
import { DialogService } from 'systelab-components/widgets/modal/dialog/dialog.service';

@Component({
	selector:    'systelab-login',
	templateUrl: 'login.component.html',
	styleUrls:   ['login.component.scss']
})
export class LoginComponent {
	private _userName = '';
	private _password = '';

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
	get password(): string {
		return this._password;
	}

	@Output() passwordChange = new EventEmitter();

	set password(value: string) {
		this._password = value;
		this.passwordChange.emit(this._password);
	}

	@Input() applicationName = undefined;
	@Input() moduleName = undefined;
	@Input() version = undefined;

	@Input() applicationLogo = undefined;
	@Input() companyLogo = undefined;
	@Input() background = undefined;
	@Input() copyright = undefined;

	@Input() errorUserPwd = true;
	@Input() errorMessage = 'Error';
	@Input() isLoading = true;

	@Output() login = new EventEmitter();

	constructor(protected dialogService: DialogService, protected i18nService: I18nService) {
	}

	public doLogin() {
		this.login.emit();
	}
}
