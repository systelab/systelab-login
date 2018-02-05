import { Component, EventEmitter, Input, Output } from '@angular/core';
import { I18nService } from 'systelab-translate/lib/i18n.service';

@Component({
  selector: 'slt-form-recovery',
  templateUrl: './form-recovery.component.html'
})
export class FormRecoveryComponent  {
  private _userName = '';
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
	get typeForm(): string {
		return this._typeForm;
	}

	@Output() typeFormChange = new EventEmitter();

	set typeForm(value: string) {
		this._typeForm = value;
		this.typeFormChange.emit(this._typeForm);
	}

  @Input() activeLogin = false;
  @Input() txtRecoverProcessStarted=undefined;
  @Input() errorUserDoesNotExist=false;
  @Input() errorUserPwd = false;
  @Input() txtUsername='';
  @Output() recovery = new EventEmitter();
	@Input() isLoading:boolean=false;


  constructor(protected i18nService: I18nService) { 

    if(!this.txtUsername){
			this.i18nService.get(['COMMON_USERNAME']).subscribe((translation: string) => {
				this.txtUsername = translation["COMMON_USERNAME"];
			});
		}

  }

	public doRecovery(){
		this.recovery.emit();
  }
  public goLogin(){
		this.typeForm = 'login';
	}
}
