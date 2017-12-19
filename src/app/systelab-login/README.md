# systelab-login

Component to show a fancy screen in order to let the user to enter a username and a password.

## Using the template

```
<systelab-login (login)="doLogin($event)" [companyLogo]="'assets/img/brand/werfen.png'"
  [applicationLogo]="'assets/img/brand/modulab.svg'"
  [applicationName]="'Modulab'"
  [moduleName]="'Collection'"
  [background]="'assets/img/background/background.jpg'"
  [copyright]="'Copyright 2000-2018 Werfen'"
  [version]="'Version 1.4. (build 2012)'"></systelab-login>
```

In the $event parameter you will receive a UserCredentials object, with a UserName and password.

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
