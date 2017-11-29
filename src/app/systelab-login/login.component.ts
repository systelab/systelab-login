import { Component, EventEmitter, Output } from '@angular/core';
import { I18nService } from 'systelab-translate/lib/i18n.service';
import { DialogService } from 'systelab-components/widgets/modal/dialog/dialog.service';

export class UserCredendials {
	constructor(public userName, public password) {

	}
}

@Component({
	selector:    'systelab-login',
	templateUrl: 'login.component.html',
})
export class LoginComponent {

	public userName = '';
	public password = '';

	@Output() login = new EventEmitter<UserCredendials>();

	constructor(protected dialogService: DialogService, protected i18nService: I18nService) {
	}

	public doLogin() {
		const credentials = new UserCredendials(this.userName, this.password);
		this.login.emit(credentials);
	}
}
