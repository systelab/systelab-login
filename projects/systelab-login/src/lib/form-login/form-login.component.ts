import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { I18nService } from 'systelab-translate';

@Component({
	selector:    'slt-form-login',
	templateUrl: 'form-login.component.html',
	styleUrls:   ['../login.component.scss']
})
export class FormLoginComponent implements OnInit {
	@Input() public isRecoveryActive = false;
	@Input() public isSignUpActive = false;
	@Input() public errorUserPwd = false;
	@Input() public txtUsername = '';
	@Input() public isLoading = false;
	@Input() public maxUsernameLength = 20;
	@Input() public isExternalLoginActive = false;
	@Input() public isExternalLoginAvailable = true;

	@Output() userNameChange = new EventEmitter();
	@Output() public passwordChange = new EventEmitter();
	@Output() public currentFormChange = new EventEmitter();
	@Output() public login = new EventEmitter();
	@Output() public externalLogin = new EventEmitter();

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
	get currentForm(): string {
		return this._currentForm;
	}

	set currentForm(value: string) {
		this._currentForm = value;
		this.currentFormChange.emit(this._currentForm);
	}

	private _currentForm = '';
	private _userName = '';
	private _password = '';

	constructor(protected i18nService: I18nService) {
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

	public goSignUp(): void {
		this.currentForm = 'signup';
	}

	public goRecovery(): void {
		this.currentForm = 'recovery';
	}

}
