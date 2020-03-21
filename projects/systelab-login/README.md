# systelab-login

Library with common Systelab login components to speed up our Angular developments

## Installing the library

```bash
npm install systelab-login --save
```

You must import the SystelabLoginModule in your Application Module:

```javacript
@NgModule({
	imports:         [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		SystelabTranslateModule,
		SystelabPreferencesModule,
		SystelabComponentsModule,
		SystelabLoginModule,
    ...
	],
```
