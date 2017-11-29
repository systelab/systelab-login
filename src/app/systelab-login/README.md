# systelab-login

Component to show a fancy screen in order to let the user to enter a username and a password.

## Using the template

```
<systelab-login (login)="doLogin()"></systelab-login>
```

In order to show the change password dialog you should do:

```javascript
const parameters: ChangePasswordDialogParameters = ChangePasswordDialog.getParameters();
this.dialogService.showDialog(ChangePasswordDialog, parameters);
```

In the parameter you must specify a username, a minimum password strength and an arrow function to run when the user press submit:

```javascript
public userName: string;
public minPasswordStrengthValue: number;
public action: (oldPassword: string, newPassword: string) => Observable<boolean>;
```

The minimum password strength values are:

2: Moderate
3: Good
4: Strong
5: Very Strong

Otherwise is considered as Week is enought.

And the arrow function must be a function that recieve to string ans returns an Observable of a boolean.

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