import { Component, Input } from '@angular/core';
import { I18nService } from 'systelab-translate';
import { PasswordUtil } from './password-indicator.util';

@Component({
	selector:    'systelab-password-indicator',
	templateUrl: 'password-indicator.component.html',
	styleUrls:   ['password-indicator.component.scss']
})
export class PasswordIndicatorComponent {

	@Input() public minPasswordStrengthValue = 1;

	@Input() public password = '';

	constructor(protected i18nService: I18nService) {
	}

	public getPasswordComplexityTooltip(): string | any {
		return PasswordUtil.getPasswordComplexityTooltip(this.minPasswordStrengthValue, this.i18nService);
	}

	public getPasswordComplexityStyle(): string {
		return PasswordUtil.getStyle(PasswordUtil.evaluatePasswordStrength(this.password));
	}

	public isOK(): boolean {
		return PasswordUtil.evaluatePasswordStrength(this.password) >= this.minPasswordStrengthValue;
	}

	public getPasswordComplexityAsLabel(): string | any {
		const key = PasswordUtil.getTranslationKey(PasswordUtil.evaluatePasswordStrength(this.password));
		if (key) {
			return this.i18nService.instant(key);
		} else {
			return '';
		}
	}
}
