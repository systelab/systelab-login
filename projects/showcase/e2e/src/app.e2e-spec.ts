import { ApplicationPage } from './app.po';

describe('Systelab Login', () => {
	let page: ApplicationPage;

	beforeEach(() => {
		page = new ApplicationPage();
	});

	it('should display Application name', () => {
		page.navigateTo();
		expect(page.getApplicationName())
			.toEqual('App Name');
	});
});
