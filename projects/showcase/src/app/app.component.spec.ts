import { async, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { SystelabTranslateModule } from 'systelab-translate';
import { HttpClientModule } from '@angular/common/http';
import { SystelabLoginModule } from 'systelab-login';
import { SystelabComponentsModule } from 'systelab-components';
import { SystelabPreferencesModule } from 'systelab-preferences';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ShowcaseModule } from './showcase/showcase.module';

import { APP_BASE_HREF } from '@angular/common';
import { DialogService, MessagePopupService } from 'systelab-components';

describe('AppComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				AppComponent
			],
			imports:      [
				BrowserModule,
				FormsModule,
				HttpClientModule,
				ShowcaseModule,
				SystelabLoginModule,
				SystelabComponentsModule,
				SystelabTranslateModule,
				SystelabPreferencesModule
			],
			providers:    [
				{provide: APP_BASE_HREF, useValue: '/'}
			],
		})
			.compileComponents();
	}));

	it('should create the app', async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app)
			.toBeTruthy();
	}));
});
