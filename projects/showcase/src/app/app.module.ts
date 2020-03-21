import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SystelabComponentsModule } from 'systelab-components';
import { SystelabPreferencesModule } from 'systelab-preferences';
import { SystelabTranslateModule } from 'systelab-translate';
import { HttpClientModule } from '@angular/common/http';
import { SystelabLoginModule } from 'systelab-login';
import { ShowcaseModule } from './showcase/showcase.module';
import { DialogService, MessagePopupService } from 'systelab-components';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
	declarations: [
		AppComponent],
	imports:      [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		ShowcaseModule,
		OverlayModule,
		SystelabLoginModule,
		SystelabComponentsModule,
		SystelabTranslateModule,
		SystelabPreferencesModule
	],
	bootstrap:    [AppComponent]
})
export class AppModule {
}

export { AppComponent } from './app.component';
