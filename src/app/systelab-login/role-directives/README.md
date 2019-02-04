# Role directives

Some directives are available to implement permission and roles based access control for your angular applications. The available directives are:
* sltAllowedRoles
* sltForbiddenRoles


## Implementing LoggedUserRolesService interface

In order to use any of the role directives, the `LoggedUserRolesService` interface needs to be implemented by a service. It shall have a method returning the names of the roles of the logged user. For instance:

```javacript
export interface User
{
	username: string;
	role: string;
}

@Injectable()
export class MyLoggedUserService implements LoggedUserRolesService
{
    private loggedUser = new BehaviorSubject<User>(null);
    public loggedUser$ = this.loggedUser.asObservable();

    constructor() {}

    public updateLoggedUser(newLoggedUser: User)
    {
        this.loggedUser.next(newLoggedUser);
    }
	
    public getLoggedUserRoles(): Observable<string[]>
    {
        return this.loggedUser$.map(
            (user: User) =>
            {
                return user ? [user.role] : [];
            }
        );
    }
}
```

Additionally, this service should be registered by the module where do you want to use the role directives (or by one of its imported modules):

```javacript
@NgModule({
  imports: [
    ...
    SystelabLoginModule.forRoot(),
	...
  ],
  providers: [
    ...
    MyLoggedUserService,
	{provide: LoggedUserRolesService, useExisting: MyLoggedUserService},
    ...
  ]
})
export class MyModule { }
```


## Using in templates

### sltAllowedRoles

Adds the element only when there is a logged user and this user has *one* of the given roles:

```html
<div *sltAllowedRoles="['admin']">
    <h1>Only admin users can see this text</h1>
</div>
```

```html
<div *sltAllowedRoles="['admin', 'advanced']">
    <h1>Only admin and advanced users can see this text</h1>
</div>
```

### sltForbiddenRoles

Adds the element only when there is a logged user and this user has *none* of the given roles:

```html
<div *sltForbiddenRoles="[]">
    <h1>Only logged users can see this text</h1>
</div>

<div *sltForbiddenRoles="['basic']">
    <h1>Only logged users that don't have the 'basic' role can see this text</h1>
</div>
```