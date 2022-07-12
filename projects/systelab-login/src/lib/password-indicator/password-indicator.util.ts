import { I18nService } from 'systelab-translate';

export class PasswordUtil {

	private static veryStrongPatternRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9])(?=.{14,})');
	private static strongPatternRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9])(?=.{10,})');
	private static slightlyStrongPatternRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9])(?=.{8,})');
	private static goodPatternRegex = new RegExp('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})');
	private static moderatePatternRegex =
		new RegExp('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{4,})');

	public static getPasswordComplexityTooltip(minPasswordStrengthValue: number, i18nService: I18nService): string | any {
		return i18nService.instant(PasswordUtil.getPasswordComplexityTooltipTranslationKey(minPasswordStrengthValue), {
			complexity:  PasswordUtil.getPasswordComplexity(minPasswordStrengthValue, i18nService),
			char_number: PasswordUtil.getMinPasswordLength(minPasswordStrengthValue)
		});
	}

	public static evaluatePasswordStrength(currentPassword): number {
		if (!currentPassword) {
			return 0;
		} else if (PasswordUtil.veryStrongPatternRegex.test(currentPassword)) {
			return 6;
		} else if (PasswordUtil.strongPatternRegex.test(currentPassword)) {
			return 5;
		} else if (PasswordUtil.slightlyStrongPatternRegex.test(currentPassword)) {
			return 4;
		} else if (PasswordUtil.goodPatternRegex.test(currentPassword)) {
			return 3;
		} else if (PasswordUtil.moderatePatternRegex.test(currentPassword)) {
			return 2;
		} else {
			return 1;
		}
	}

	public static getTranslationKey(n: number): string | undefined {
		switch (n) {
			case 6:
				return 'PASSWORD_STRENGTH_VERY_STRONG';
			case 5:
				return 'PASSWORD_STRENGTH_STRONG';
			case 4:
				return 'PASSWORD_STRENGTH_SLIGHTLY_STRONG';
			case 3:
				return 'PASSWORD_STRENGTH_GOOD';
			case 2:
				return 'PASSWORD_STRENGTH_MODERATE';
			case 1:
				return 'PASSWORD_STRENGTH_WEAK';
			default:
				return undefined;
		}
	}

	public static getStyle(n: number): string {
		switch (n) {
			case 6:
				return 'slab-very-strong';
			case 5:
				return 'slab-strong';
			case 4:
				return 'slab-slightly-strong';
			case 3:
				return 'slab-good';
			case 2:
				return 'slab-moderate';
			case 1:
				return 'slab-weak';
			default:
				return 'slab-very-weak';
		}
	}

	private static getPasswordComplexityTooltipTranslationKey(minPasswordStrengthValue: number) {
		switch (minPasswordStrengthValue) {
			case 2:
				return 'PASSWORD_CRITERIA_LOW';
			case 3:
				return 'PASSWORD_CRITERIA_LOW';
			case 4:
				return 'PASSWORD_CRITERIA';
			case 5:
				return 'PASSWORD_CRITERIA';
			case 6:
				return 'PASSWORD_CRITERIA';
			default:
				return 'PASSWORD_CRITERIA_WEAK';
		}
	}

	private static getPasswordComplexity(minPasswordStrengthValue: number, i18nService: I18nService) {
		switch (minPasswordStrengthValue) {
			case 2:
				return i18nService.instant('PASSWORD_STRENGTH_MODERATE');
			case 3:
				return i18nService.instant('PASSWORD_STRENGTH_GOOD');
			case 4:
				return i18nService.instant('PASSWORD_STRENGTH_SLIGHTLY_STRONG');
			case 5:
				return i18nService.instant('PASSWORD_STRENGTH_STRONG');
			case 6:
				return i18nService.instant('PASSWORD_STRENGTH_VERY_STRONG');
			default:
				return i18nService.instant('PASSWORD_STRENGTH_WEAK');
		}
	}

	private static getMinPasswordLength(minPasswordStrengthValue: number) {
		switch (minPasswordStrengthValue) {
			case 2:
				return 4;
			case 3:
				return 6;
			case 4:
				return 8;
			case 5:
				return 10;
			case 6:
				return 14;
			default:
				return 2;
		}
	}
}
