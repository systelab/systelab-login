import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { I18nService } from 'systelab-translate/lib/i18n.service';

@Component({
	selector:    'systelab-login',
	templateUrl: 'login.component.html',
	styleUrls:   ['login.component.scss']
})
export class LoginComponent implements OnInit {
	private _userName = '';
	private _password = '';
	private _lastName = '';
	private _name = '';
	private _email = '';

	@Input()
	get userName(): string {
		return this._userName;
	}

	@Output() public userNameChange = new EventEmitter();

	set userName(value: string) {
		this._userName = value;
		this.userNameChange.emit(this._userName);
	}

	@Input()
	get password(): string {
		return this._password;
	}

	@Output() public passwordChange = new EventEmitter();

	set password(value: string) {
		this._password = value;
		this.passwordChange.emit(this._password);
	}

	@Input()
	get lastName(): string {
		return this._lastName;
	}

	@Output() public lastNameChange = new EventEmitter();

	set lastName(value: string) {
		this._lastName = value;
		this.lastNameChange.emit(this._lastName);
	}

	@Input()
	get name(): string {
		return this._name;
	}

	@Output() public nameChange = new EventEmitter();

	set name(value: string) {
		this._name = value;
		this.nameChange.emit(this._name);
	}

	@Input()
	get email(): string {
		return this._email;
	}

	@Output() public emailChange = new EventEmitter();

	set email(value: string) {
		this._email = value;
		this.emailChange.emit(this._email);
	}

	@Input() public currentForm = undefined;
	@Input() public isRecoveryActive = false;
	@Input() public isLoginActive = false;
	@Input() public isSignUpActive = false;

	@Input() public applicationName = undefined;
	@Input() public moduleName = undefined;
	@Input() public version = undefined;

	@Input() public applicationLogo = undefined;
	@Input() public companyLogo = undefined;
	@Input() public background = undefined;
	@Input() public copyright = undefined;

	@Input() public errorUserExist = false;
	@Input() public errorUserDoesNotExist = false;
	@Input() public errorUserPwd = false;
	@Input() public errorMessage = '';
	@Input() public isLoading = false;
	@Input() public txtUsername = '';
	@Input() public txtRecoverProcessStarted = undefined;
	@Input() public minPasswordStrengthValue = 1;

	@Input() public pathTerms = undefined;
	@Input() public pathPrivacy = undefined;

	@Output() public login = new EventEmitter();
	@Output() public signUp = new EventEmitter();
	@Output() public recovery = new EventEmitter();

	constructor(protected i18nService: I18nService) {
		if (!this.currentForm) {
			this.currentForm = 'login';
		}
	}

	public ngOnInit() {
		if (!this.txtUsername) {
			this.i18nService.get('COMMON_USERNAME')
				.subscribe((res: string) => {
					this.txtUsername = res;
				});
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
