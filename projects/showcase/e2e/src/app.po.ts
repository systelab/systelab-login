import { browser, by, element } from 'protractor';

export class ApplicationPage {
	public navigateTo() {
		return browser.get('/');
	}

	public getApplicationName() {
		return element(by.id('application-name-id'))
			.getText();
	}
}
