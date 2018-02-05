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
	private _lastName = '';
	private _name = '';
	private _email = '';

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

	@Input()
	get lastName(): string {
		return this._lastName;
	}

	@Output() lastNameChange = new EventEmitter();

	set lastName(value: string) {
		this._lastName = value;
		this.lastNameChange.emit(this._lastName);
	}

	@Input()
	get name(): string {
		return this._name;
	}

	@Output() nameChange = new EventEmitter();

	set name(value: string) {
		this._name = value;
		this.nameChange.emit(this._name);
	}

	@Input()
	get email(): string {
		return this._email;
	}

	@Output() emailChange = new EventEmitter();

	set email(value: string) {
		this._email = value;
		this.emailChange.emit(this._email);
	}

	@Input() currentForm = undefined;
	@Input() isRecoveryActive = false;
	@Input() isLoginActive = false;
	@Input() isSignUpActive = false;

	@Input() applicationName = undefined;
	@Input() moduleName = undefined;
	@Input() version = undefined;

	@Input() applicationLogo = undefined;
	@Input() companyLogo = undefined;
	@Input() background = undefined;
	@Input() copyright = undefined;

	@Input() errorUserExist = false;
	@Input() errorUserDoesNotExist = false;
	@Input() errorUserPwd = false;
	@Input() errorMessage = '';
	@Input() isLoading = false;
	@Input() txtUsername = '';
	@Input() txtRecoverProcessStarted = undefined;

	@Input() pathTerms = undefined;
	@Input() pathPrivacy = undefined;

	@Output() login = new EventEmitter();
	@Output() signUp = new EventEmitter();
	@Output() recovery = new EventEmitter();

	constructor(protected dialogService: DialogService, protected i18nService: I18nService) {
		if (!this.currentForm) {
			this.currentForm = 'login'
		}
		if (!this.txtUsername) {
			this.txtUsername = this.i18nService.instant('COMMON_USERNAME');
		}
	}

	public doLogin() {
		this.login.emit();
	}

	public doSignUp() {
		this.signUp.emit();
	}

	public doRecovery() {
		this.recovery.emit();
	}

	public goSignUp() {
		this.currentForm = 'signup';
	}

	public goRecovery() {
		this.currentForm = 'recovery';
	}

	public goLogin() {
		this.currentForm = 'login';
	}
}
