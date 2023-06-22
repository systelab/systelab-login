import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { I18nService } from 'systelab-translate';

@Component({
	selector:    'systelab-login',
	templateUrl: 'login.component.html',
	styleUrls:   ['login.component.scss']
})
export class LoginComponent implements OnInit {
	@Input() public currentForm = undefined;
	@Input() public isRecoveryActive = false;
	@Input() public isLoginActive = false;
	@Input() public isSignUpActive = false;
	@Input() public moreInfo = false;

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
	@Input() public showBackButton = false;
	@Input() public noticeText: string;

	@Input() public pathTerms = undefined;
	@Input() public pathPrivacy = undefined;
	@Input() public isExternalLoginActive = false;
	@Input() public isExternalLoginAvailable = true;
	@Input() public maxUsernameLength = 20;

	@Output() public userNameChange = new EventEmitter();
	@Output() public passwordChange = new EventEmitter();
	@Output() public lastNameChange = new EventEmitter();

	@Output() public nameChange = new EventEmitter();
	@Output() public emailChange = new EventEmitter();

	@Output() public onMoreInfo = new EventEmitter();
	@Output() public login = new EventEmitter();
	@Output() public externalLogin = new EventEmitter();
	@Output() public signUp = new EventEmitter();
	@Output() public recovery = new EventEmitter();
	@Output() public logoClicked = new EventEmitter();

	@Input()
	get userName(): string {
		return this._userName;
	}

	set userName(value: string) {
		this._userName = value;
		this.userNameChange.emit(this._userName);
	}

	@Input()
	get password(): string {
		return this._password;
	}

	set password(value: string) {
		this._password = value;
		this.passwordChange.emit(this._password);
	}

	@Input()
	get lastName(): string {
		return this._lastName;
	}

	set lastName(value: string) {
		this._lastName = value;
		this.lastNameChange.emit(this._lastName);
	}

	@Input()
	get name(): string {
		return this._name;
	}

	set name(value: string) {
		this._name = value;
		this.nameChange.emit(this._name);
	}

	@Input()
	get email(): string {
		return this._email;
	}

	set email(value: string) {
		this._email = value;
		this.emailChange.emit(this._email);
	}

	private _password = '';
	private _lastName = '';
	private _name = '';
	private _email = '';
	private _userName = '';


	constructor(protected i18nService: I18nService) {
		if (!this.currentForm) {
			this.currentForm = 'login';
		}
	}

	public ngOnInit(): void {
		if (!this.txtUsername) {
			this.i18nService.get('COMMON_USERNAME')
				.subscribe((res: string) => {
					this.txtUsername = res;
				});
		}
	}

	public doLogin(): void {
		this.login.emit();
	}

	public doExternalLogin(): void {
		this.externalLogin.emit();
	}

	public doSignUp(): void {
		this.signUp.emit();
	}

	public doRecovery(): void {
		this.recovery.emit();
	}

	public goSignUp(): void {
		this.currentForm = 'signup';
	}

	public goRecovery(): void {
		this.currentForm = 'recovery';
	}

	public goLogin(): void {
		this.currentForm = 'login';
	}

	public doMoreInfo(): void {
		this.onMoreInfo.emit();
	}

	public doClickLogo(): void {
		this.logoClicked.emit();
	}
}
