# systelab-login

Component to show a fancy screen which offer different components login, Sign Up and Password Recovery.

You can configure individual components or a combination of each.

## Using the template

### All components

This is an example of a combiantion of the three available components.

```
<systelab-login (login)="doLogin($event)" (signUp)="doSignUp($event)" (recovery)="doRecovery($event)"  
                [(userName)]="userName"
                [(password)]="password"
                [(name)]="name"
                [(lastName)]="lastName"
                [(email)]="email"
                [activeRecovery]="activeRecovery"
                [activeSignUp]="activeSignUp"
                [activeLogin]="activeLogin"
                [typeForm]="typeForm"
                [companyLogo]="'assets/img/brand/werfen.png'"
                [applicationLogo]="'assets/img/brand/logo.png'"
                [background]="'assets/img/background/background.jpg'"
                [copyright]="'Copyright 2000-2018 Werfen'"
                [errorUserPwd]="errorUserPwd"
                [errorUserExist]="errorUserExist"
                [pathTerms]="pathTerms"
                [pathPrivacy]="pathPrivacy"
                [errorUserDoesNotExist]="errorUserDoesNotExist"
                [txtUsername]="txtUsername"
                [txtRecoverProcessStarted]="txtRecoverProcessStarted"
                [applicationName]="'App Name'" [moduleName]="'Module'" [version]="'1.4. (build 2012)'"
                [isLoading]="isLoading">
                </systelab-login>
```

### Only Login

```
<systelab-login (login)="doLogin($event)"
                [(userName)]="userName"
                [(password)]="password"
                [activeLogin]="1"
                [typeForm]="typeForm"
                [companyLogo]="'assets/img/brand/werfen.png'"
                [applicationLogo]="'assets/img/brand/logo.png'"
                [background]="'assets/img/background/background.jpg'"
                [copyright]="'Copyright 2000-2018 Werfen'"
                [errorUserPwd]="errorUserPwd"
                [pathTerms]="pathTerms"
                [pathPrivacy]="pathPrivacy"
                [txtUsername]="txtUsername"
                [applicationName]="'App Name'" [moduleName]="'Module'" [version]="'1.4. (build 2012)'">
                </systelab-login>
```

### Only Registration

```
<systelab-login  (signUp)="doSignUp($event)"   
                [(userName)]="userName"
                [(password)]="password"
                [(name)]="name"
                [(lastName)]="lastName"
                [(email)]="email"
                [activeSignUp]="1"
                [typeForm]="typeForm"
                [companyLogo]="'assets/img/brand/werfen.png'"
                [applicationLogo]="'assets/img/brand/logo.png'"
                [background]="'assets/img/background/background.jpg'"
                [copyright]="'Copyright 2000-2018 Werfen'"
                [errorUserExist]="errorUserExist"
                [pathTerms]="pathTerms"
                [pathPrivacy]="pathPrivacy"
                [applicationName]="'App Name'" [moduleName]="'Module'" [version]="'1.4. (build 2012)'">
                </systelab-login>
```

### Only Password Recovery
```
<systelab-login  (recovery)="doRecovery($event)"  
                [(userName)]="userName"
                [activeRecovery]="1"
                [typeForm]="typeForm"
                [companyLogo]="'assets/img/brand/werfen.png'"
                [applicationLogo]="'assets/img/brand/logo.png'"
                [background]="'assets/img/background/background.jpg'"
                [copyright]="'Copyright 2000-2018 Werfen'"
                [pathTerms]="pathTerms"
                [pathPrivacy]="pathPrivacy"
                [txtUsername]="txtUsername"
                [errorUserDoesNotExist]="errorUserDoesNotExist"
                [txtRecoverProcessStarted]="txtRecoverProcessStarted"
                [applicationName]="'App Name'" [moduleName]="'Module'" [version]="'1.4. (build 2012)'">
                </systelab-login>
```

### Login and Registration

```
<systelab-login (login)="doLogin($event)" (signUp)="doSignUp($event)"  
                [(userName)]="userName"
                [(password)]="password"
                [(name)]="name"
                [(lastName)]="lastName"
                [(email)]="email"
                [activeRecovery]="0"
                [activeSignUp]="1"
                [activeLogin]="1"
                [typeForm]="typeForm"
                [companyLogo]="'assets/img/brand/werfen.png'"
                [applicationLogo]="'assets/img/brand/logo.png'"
                [background]="'assets/img/background/background.jpg'"
                [copyright]="'Copyright 2000-2018 Werfen'"
                [errorUserPwd]="errorUserPwd"
                [errorUserExist]="errorUserExist"
                [pathTerms]="pathTerms"
                [pathPrivacy]="pathPrivacy"
                [txtUsername]="txtUsername"
                [applicationName]="'App Name'" [moduleName]="'Module'" [version]="'1.4. (build 2012)'">
                </systelab-login>
```

### Login and Recovery Password

```
<systelab-login (login)="doLogin($event)" (recovery)="doRecovery($event)"  
                [(userName)]="userName"
                [(password)]="password"
                [activeRecovery]="1"
                [activeSignUp]="0"
                [activeLogin]="1"
                [typeForm]="typeForm"
                [companyLogo]="'assets/img/brand/werfen.png'"
                [applicationLogo]="'assets/img/brand/logo.png'"
                [background]="'assets/img/background/background.jpg'"
                [copyright]="'Copyright 2000-2018 Werfen'"
                [errorUserPwd]="errorUserPwd"
                [errorUserDoesNotExist]="errorUserDoesNotExist"
                [pathTerms]="pathTerms"
                [pathPrivacy]="pathPrivacy"
                [txtUsername]="txtUsername"
                [txtRecoverProcessStarted]="txtRecoverProcessStarted"
                [applicationName]="'App Name'" [moduleName]="'Module'" [version]="'1.4. (build 2012)'">
                </systelab-login>
```


Be careful and make sure that the images are loaded by Webpack.

### Properties

#### Methods: Login, Sign Up and Password Recovery

- (login)="doLogin($event)"

  Is the method that you will implement to do the login.

- (signUp)="doSignUp($event)"

  Is the method that you will implement to do the sign up.

- (recovery)="doRecovery($event)"

  Is the method that you will implement to start the process of password recovery.


#### Principal Form: typeForm

You can select which principal form to display.

The possible values are: 

- login
- signup
- recovery

#### Loading

To display a simple loading you have to set to true the variable isLoading.

#### activeRecovery, activeSignUp and activeLogin

The possible values are True or False.

If you set activeRecovery = True you will have in the Login page the link to the password recovery form.

If you set activeSignUp = True you will have in the Login page the link to the sign up form.

If you set activeLogin = True you will have in the Sign Up and Password Recovery pages the link to the login form.

#### Errors messages: errorUserPwd, errorUserExist and errorUserDoesNotExist

- errorUserPwd

  After do the login if the username and password are incorrect, you can set errorUserPwd = true to display a error message.

- errorUserExist

  After do the sign up if the username already exist, you can set errorUserExist = true to display a error message.

- errorUserDoesNotExist
  After check if the user exist in the password recovery form, if the user doesn't exist you can set errorUserDoesNotExist=true to display a error message.

#### External links: pathTerms and pathPrivacy

If you have a links about terms of conditions or Privay policy you can inform pathTerms or pathPrivacy to offer to the user the option to navigate to consult.

#### Images: companyLogo, applicationLogo and background

You can configure the images of the component, set your path for each of images.


#### Labels:  txtUsername, txtRecoverProcessStarted, applicationName, moduleName, version

- txtUsername
  Text for the placeholder of the username in the login form and in the password recovery form.

  Depend if in you app allow perform the login using the email or the username, or only the username or with the email, you can configure the text in the form.

- txtRecoverProcessStarted

  After perform the recovery you can configure the message you need to display, depend of the next steps in your password recovery process.

- applicationName

  The name of the application

- moduleName
  If you have a specific name for the module, you can set and display.

- version
  If you have a versioned application you can display the current version.


# systelab-change-password

In order to show the change password dialog you should do:

```javascript
const parameters: ChangePasswordDialogParameters = ChangePasswordDialog.getParameters();
this.dialogService.showDialog(ChangePasswordDialog, parameters);
```

As a parameter you must specify a username, a minimum password strength and an arrow function to run when the user press submit:

```javascript
public userName: string;
public minPasswordStrengthValue: number;
public action: (oldPassword: string, newPassword: string) => Observable<boolean>;
```

The minimum password strength values are:

- 2: Moderate
- 3: Good
- 4: Strong
- 5: Very Strong

Otherwise is considered as Weak.

And the arrow function must be a function that receive two string and returns an Observable of a boolean.

A full example could be:

```javascript
const parameters: ChangePasswordDialogParameters = ChangePasswordDialog.getParameters();
parameters.minPasswordStrengthValue = 1;
parameters.action = (a, b) => this.changePassword(a, b);
this.dialogService.showDialog(ChangePasswordDialog, parameters).subscribe();
...

public changePassword(oldPassword: string, newPassword: string): Observable<boolean> {
  if (...) {
    // is OK
    return Observable.of(false);
  }
  return Observable.of(true);
}
```
