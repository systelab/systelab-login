import { Injectable } from '@angular/core';
import { LoggedUserRolesService } from '../../systelab-login/role-directives/logged-user-roles.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ShowcaseLoggedUserRolesService implements LoggedUserRolesService {
	private loggedRoles = new BehaviorSubject<string[]>(['basic']);
	private loggedRoles$ = this.loggedRoles.asObservable();

	constructor() {
	}

	public getLoggedUserRoles(): Observable<string[]> {
		return this.loggedRoles$;
	}

	public updateRoles(newRoles: string[]) {
		this.loggedRoles.next(newRoles);
	}
}
