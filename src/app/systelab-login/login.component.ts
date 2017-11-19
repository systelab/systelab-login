import { Component, EventEmitter, Output } from '@angular/core';
import { I18nService } from 'systelab-translate/lib/i18n.service';
import { DialogService } from 'systelab-components/widgets/modal/dialog/dialog.service';

@Component({
	selector:    'systelab-login',
	templateUrl: 'login.component.html',
})
export class LoginComponent {

	@Output() login = new EventEmitter();

	constructor(protected dialogService: DialogService, protected i18nService: I18nService) {
	}

	public doLogin() {
		this.login.emit();
	}
}
