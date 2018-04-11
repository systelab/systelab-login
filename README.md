[![Codacy Badge](https://api.codacy.com/project/badge/Grade/5e9224e6efa34e2a98375cc4afcec7ec)](https://app.codacy.com/app/alfonsserra/systelab-login?utm_source=github.com&utm_medium=referral&utm_content=systelab/systelab-login&utm_campaign=badger)
[![Build Status](https://travis-ci.org/systelab/systelab-login.svg?branch=master)](https://travis-ci.org/systelab/systelab-login)
[![npm version](https://badge.fury.io/js/systelab-login.svg)](https://badge.fury.io/js/systelab-login)
[![Known Vulnerabilities](https://snyk.io/test/github/systelab/systelab-login/badge.svg?targetFile=package.json)](https://snyk.io/test/github/systelab/systelab-login?targetFile=package.json)

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
