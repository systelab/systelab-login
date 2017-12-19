import { Component, EventEmitter, Input, Output } from '@angular/core';
import { I18nService } from 'systelab-translate/lib/i18n.service';
import { DialogService } from 'systelab-components/widgets/modal/dialog/dialog.service';

export class UserCredendials {
	constructor(public userName, public password) {

	}
}

@Component({
	selector:    'systelab-login',
	templateUrl: 'login.component.html',
	styleUrls:   ['login.component.scss']
})
export class LoginComponent {

	public userName = '';
	public password = '';

	@Input() applicationName = undefined;
	@Input() moduleName = undefined;
	@Input() version = undefined;

	@Input() applicationLogo = undefined;
	@Input() companyLogo = undefined;
	@Input() background = undefined;

	@Output() login = new EventEmitter<UserCredendials>();

	constructor(protected dialogService: DialogService, protected i18nService: I18nService) {
	}

	public doLogin() {
		const credentials = new UserCredendials(this.userName, this.password);
		this.login.emit(credentials);
	}
}
