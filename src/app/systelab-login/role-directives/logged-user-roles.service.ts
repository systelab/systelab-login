import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class LoggedUserRolesService {
	public abstract getLoggedUserRoles(): Observable<string[]>;
}
