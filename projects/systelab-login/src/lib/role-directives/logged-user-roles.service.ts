import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class LoggedUserRolesService {
	public abstract getLoggedUserRoles(): Observable<string[]>;
}
