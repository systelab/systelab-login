import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { I18nService } from 'systelab-translate';

@Component({
	selector:    'slt-form-recovery',
	templateUrl: 'form-recovery.component.html',
	styleUrls:   ['../login.component.scss']
})
export class FormRecoveryComponent implements OnInit {
	private _userName = '';
	private _currentForm = '';

	@Input()
	get userName(): string {
		return this._userName;
	}

	@Output() public userNameChange = new EventEmitter();
	@Input() public maxUsernameLength = 20;

	set userName(value: string) {
		this._userName = value;
		this.userNameChange.emit(this._userName);
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
	@Input() public txtRecoverProcessStarted = undefined;
	@Input() public errorUserDoesNotExist = false;
	@Input() public errorUserPwd = false;
	@Input() public txtUsername = '';
	@Output() public recovery = new EventEmitter();
	@Input() public isLoading = false;

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

	public doRecovery() {
		this.recovery.emit();
	}

	public goLogin() {
		this.currentForm = 'login';
	}
}
