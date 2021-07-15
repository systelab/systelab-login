import { Component, EventEmitter, Input, Output } from '@angular/core';
import { I18nService } from 'systelab-translate';

@Component({
	selector:    'slt-form-signup',
	templateUrl: 'form-signup.component.html',
	styleUrls:   ['../login.component.scss']
})
export class FormSignupComponent {
	@Input() public minPasswordStrengthValue = 1;
	@Input() public maxUsernameLength = 20;
	@Input() public isLoginActive = false;
	@Input() public errorUserExist = false;
	@Input() public isLoading = false;

	@Output() public signUp = new EventEmitter();

	@Input()
	get userName(): string {
		return this._userName;
	}

	set userName(value: string) {
		this._userName = value;
		this.userNameChange.emit(this._userName);
	}

	@Output() public userNameChange = new EventEmitter();

	@Input()
	get password(): string {
		return this._password;
	}

	set password(value: string) {
		this._password = value;
		this.passwordChange.emit(this._password);
	}

	@Output() public passwordChange = new EventEmitter();

	@Input()
	get lastName(): string {
		return this._lastName;
	}

	set lastName(value: string) {
		this._lastName = value;
		this.lastNameChange.emit(this._lastName);
	}

	@Output() public lastNameChange = new EventEmitter();

	@Input()
	get name(): string {
		return this._name;
	}

	set name(value: string) {
		this._name = value;
		this.nameChange.emit(this._name);
	}

	@Output() public nameChange = new EventEmitter();

	@Input()
	get email(): string {
		return this._email;
	}

	set email(value: string) {
		this._email = value;
		this.emailChange.emit(this._email);
	}

	@Output() public emailChange = new EventEmitter();

	@Input()
	get currentForm(): string {
		return this._currentForm;
	}

	set currentForm(value: string) {
		this._currentForm = value;
		this.currentFormChange.emit(this._currentForm);
	}

	@Output() public currentFormChange = new EventEmitter();

	private _userName = '';
	private _password = '';
	private _lastName = '';
	private _name = '';
	private _email = '';
	private _currentForm = '';

	constructor(protected i18nService: I18nService) {
	}

	public goLogin(): void {
		this.currentForm = 'login';
	}

	public doSignUp(): void {
		this.signUp.emit();
	}
}
