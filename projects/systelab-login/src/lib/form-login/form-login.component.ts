import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { I18nService } from 'systelab-translate';

@Component({
	selector:    'slt-form-login',
	templateUrl: 'form-login.component.html',
	styleUrls:   ['../login.component.scss']
})
export class FormLoginComponent implements OnInit {

	private _currentForm = '';
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

	@Output() public passwordChange = new EventEmitter();

	set password(value: string) {
		this._password = value;
		this.passwordChange.emit(this._password);
	}

	@Input()
	get currentForm(): string {
		return this._currentForm;
	}

	@Output() public currentFormChange = new EventEmitter();

	set currentForm(value: string) {
		this._currentForm = value;
		this.currentFormChange.emit(this._currentForm);
	}

	@Input() public isRecoveryActive = false;
	@Input() public isSignUpActive = false;
	@Input() public errorUserPwd = false;
	@Input() public txtUsername = '';
	@Input() public isLoading = false;

	@Input() public maxUsernameLength = 20;

	@Output() public login = new EventEmitter();

	constructor(protected i18nService: I18nService) {
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

	public goSignUp() {
		this.currentForm = 'signup';
	}

	public goRecovery() {
		this.currentForm = 'recovery';
	}
}
