import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { I18nService } from 'systelab-translate';

@Component({
    selector: 'slt-form-recovery',
    templateUrl: 'form-recovery.component.html',
    styleUrls: ['../login.component.scss'],
    standalone: false
})
export class FormRecoveryComponent implements OnInit {
	@Input() public isLoginActive = false;
	@Input() public txtRecoverProcessStarted = undefined;
	@Input() public errorUserDoesNotExist = false;
	@Input() public errorUserPwd = false;
	@Input() public txtUsername = '';
	@Input() public maxUsernameLength = 20;
	@Input() public isLoading = false;
	@Input() public showBackButton = false;

	@Output() public recovery = new EventEmitter();

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
	get currentForm(): string {
		return this._currentForm;
	}

	set currentForm(value: string) {
		this._currentForm = value;
		this.currentFormChange.emit(this._currentForm);
	}

	@Output() public currentFormChange = new EventEmitter();

	private _userName = '';
	private _currentForm = '';

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

	public doRecovery(): void {
		this.recovery.emit();
	}

	public goLogin(): void {
		this.currentForm = 'login';
	}
}
