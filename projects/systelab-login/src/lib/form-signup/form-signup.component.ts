import { Component, EventEmitter, Input, Output } from '@angular/core';
import { I18nService } from 'systelab-translate';

@Component({
	selector:    'slt-form-signup',
	templateUrl: 'form-signup.component.html',
	styleUrls:   ['../login.component.scss']
})
export class FormSignupComponent {
	private _userName = '';
	private _password = '';
	private _lastName = '';
	private _name = '';
	private _email = '';
	private _currentForm = '';

	@Input() public minPasswordStrengthValue = 1;
	@Input() public maxUsernameLength = 20;

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

	@Input()
	get currentForm(): string {
		return this._currentForm;
	}

	@Output() public currentFormChange = new EventEmitter();

	set currentForm(value: string) {
		this._currentForm = value;
		this.currentFormChange.emit(this._currentForm);
	}

	@Input() public isLoginActive = false;
	@Input() public errorUserExist = false;
	@Output() public signUp = new EventEmitter();
	@Input() public isLoading = false;

	constructor(protected i18nService: I18nService) {
	}

	public goLogin() {
		this.currentForm = 'login';
	}

	public doSignUp() {
		this.signUp.emit();
	}
}
