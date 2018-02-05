import {  Component, EventEmitter, Input, Output  } from '@angular/core';
import { I18nService } from 'systelab-translate/lib/i18n.service';
@Component({
  selector: 'slt-form-login',
  templateUrl: './form-login.component.html',
  styleUrls:   ['../login.component.scss']
})
export class FormLoginComponent  {

  private _typeForm='';
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
  
	@Input()
	get typeForm(): string {
		return this._typeForm;
	}

	@Output() typeFormChange = new EventEmitter();

	set typeForm(value: string) {
		this._typeForm = value;
		this.typeFormChange.emit(this._typeForm);
	}

	@Input() activeRecovery = false;
	@Input() activeSignUp = false;
  @Input() errorUserPwd = false;
  @Input() txtUsername='';
  @Input() isLoading:boolean=false;
  
  @Output() login = new EventEmitter();

  constructor(protected i18nService: I18nService) { 

    if(!this.txtUsername){
			this.i18nService.get(['COMMON_USERNAME']).subscribe((translation: string) => {
				this.txtUsername = translation["COMMON_USERNAME"];
			});
		}

  }

  ngOnInit() {
  }
  public doLogin() {
		this.login.emit();
  }
  public goSignUp(){
		this.typeForm = 'signup';
	}
	public goRecovery(){
		this.typeForm = 'recovery';
	}
}
