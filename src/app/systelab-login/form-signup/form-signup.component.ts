import { Component, EventEmitter, Input, Output } from '@angular/core';
import { I18nService } from 'systelab-translate/lib/i18n.service';

@Component({
  selector: 'slt-form-signup',
  templateUrl: './form-signup.component.html',
  styleUrls:   ['../login.component.scss']
})
export class FormSignupComponent  {
  private _userName = '';
	private _password = '';
	private _lastName = '';
	private _name = '';
	private _email = '';
  private _typeForm='';

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
  
  @Input()
	get typeForm(): string {
		return this._typeForm;
	}

	@Output() typeFormChange = new EventEmitter();

	set typeForm(value: string) {
		this._typeForm = value;
		this.typeFormChange.emit(this._typeForm);
  }
  
  @Input() activeLogin = false;
  @Input() errorUserExist = false;
  @Output() signUp = new EventEmitter();
  @Input() isLoading:boolean=false;
  
  constructor() { }

  public goLogin(){
		this.typeForm = 'login';
  }
  public doSignUp() {
		this.signUp.emit();
	}

}
