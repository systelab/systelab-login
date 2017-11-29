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
		SystelabTranslateModule.forRoot(),
		SystelabPreferencesModule.forRoot(),
		SystelabComponentsModule.forRoot(),
		SystelabLoginModule.forRoot(),
    ...
	],
```

## Working with the repo

```bash
git clone https://github.com/systelab/systelab-login.git
cd systelab-login
npm install
ng serve
```
