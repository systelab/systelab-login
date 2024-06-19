import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SystelabLoginModule} from '../../../systelab-login/src/lib/systelab-login.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SystelabComponentsModule } from 'systelab-components';
import { SystelabPreferencesModule } from 'systelab-preferences';
import { SystelabTranslateModule } from 'systelab-translate';
import { HttpClientModule } from '@angular/common/http';
import { ShowcaseModule } from './showcase/showcase.module';
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
		SystelabComponentsModule.forRoot(),
		SystelabTranslateModule,
		SystelabPreferencesModule
	],
	bootstrap:    [AppComponent]
})
export class AppModule {
}

export { AppComponent } from './app.component';
