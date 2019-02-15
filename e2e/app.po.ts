import { browser, by, element } from 'protractor';

export class NgxCliLibraryPage {
	public navigateTo() {
		return browser.get('/');
	}

	public getParagraphText() {
		return element(by.css('app-root h1'))
			.getText();
	}
}
