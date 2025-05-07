import { Component, Injectable } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ForbiddenRolesDirective } from './forbidden-roles.directive';
import { LoggedUserRolesService } from './logged-user-roles.service';
import { BehaviorSubject, Observable } from 'rxjs';

// Stub for the LoggedUserRolesService interface
@Injectable()
export class StubLoggedUserRolesService implements LoggedUserRolesService {
	private loggedRoles = new BehaviorSubject<string[]>([]);
	private loggedRoles$ = this.loggedRoles.asObservable();

	constructor() {
	}

	public getLoggedUserRoles(): Observable<string[]> {
		return this.loggedRoles$;
	}

	public updateLoggedRoles(newLoggedRoles: string[]) {
		this.loggedRoles.next(newLoggedRoles);
	}
}

// Test component used to check if sltForbiddenRoles directive is filtering correctly.
@Component({
    selector: 'app-forbidden-roles-test',
    template: `
                <div>
                    <h1 class="allLoggedUsers" *sltForbiddenRoles="[]">
                        Only for logged users
                    </h1>
                    <h1 class="basicUsersForbidden" *sltForbiddenRoles="['basic']">
                        Only for logged users that are not basic
                    </h1>
                    <h1 class="basicAndAdvancedUsersForbidden" *sltForbiddenRoles="['basic','advanced']">
                        Only for logged users that are not basic nor advanced
                    </h1>
                </div>
	          `,
    styles: [],
    standalone: false
})
export class ForbiddenRolesTestComponent {
}

describe('ForbiddenRolesDirective', () => {
	let forbiddenRolesTestFixture: ComponentFixture<ForbiddenRolesTestComponent>;
	let loggedUserRolesService: StubLoggedUserRolesService;

	beforeEach(async () => {
		loggedUserRolesService = new StubLoggedUserRolesService();
		await TestBed.configureTestingModule({
			declarations:
				[
					ForbiddenRolesDirective,
					ForbiddenRolesTestComponent
				],
			providers:
				[
					{provide: LoggedUserRolesService, useValue: loggedUserRolesService}
				]
		})
			.compileComponents();
	});

	beforeEach(() => {
		forbiddenRolesTestFixture = TestBed.createComponent(ForbiddenRolesTestComponent);
		forbiddenRolesTestFixture.detectChanges();
	});

	// Tests for 'allLoggedUsers' header
	it('should NOT display \'allLoggedUsers\' header on startup', () => {
		expect(isHeaderVisible('allLoggedUsers', forbiddenRolesTestFixture))
			.toBeFalsy();
	});

	it('should display \'allLoggedUsers\' header when logged user is basic', () => {
		loggedUserRolesService.updateLoggedRoles(['basic']);
		forbiddenRolesTestFixture.detectChanges();
		expect(isHeaderVisible('allLoggedUsers', forbiddenRolesTestFixture))
			.toBeTruthy();
	});

	it('should display \'allLoggedUsers\' header when logged user is admin', () => {
		loggedUserRolesService.updateLoggedRoles(['admin']);
		forbiddenRolesTestFixture.detectChanges();
		expect(isHeaderVisible('allLoggedUsers', forbiddenRolesTestFixture))
			.toBeTruthy();
	});

	it('should display \'allLoggedUsers\' header when logged user is basic and admin', () => {
		loggedUserRolesService.updateLoggedRoles(['basic', 'admin']);
		forbiddenRolesTestFixture.detectChanges();
		expect(isHeaderVisible('allLoggedUsers', forbiddenRolesTestFixture))
			.toBeTruthy();
	});

	it('should NOT display \'allLoggedUsers\' header when no user logged', () => {
		loggedUserRolesService.updateLoggedRoles([]);
		forbiddenRolesTestFixture.detectChanges();
		expect(isHeaderVisible('allLoggedUsers', forbiddenRolesTestFixture))
			.toBeFalsy();
	});

	it('should NOT display \'allLoggedUsers\' header when logged user data not set', () => {
		loggedUserRolesService.updateLoggedRoles(null);
		forbiddenRolesTestFixture.detectChanges();
		expect(isHeaderVisible('allLoggedUsers', forbiddenRolesTestFixture))
			.toBeFalsy();
	});

	// Tests for 'basicUsersForbidden' header
	it('should NOT display \'basicUsersForbidden\' header on startup', () => {
		expect(isHeaderVisible('basicUsersForbidden', forbiddenRolesTestFixture))
			.toBeFalsy();
	});

	it('should NOT display \'basicUsersForbidden\' header when logged user is basic', () => {
		loggedUserRolesService.updateLoggedRoles(['basic']);
		forbiddenRolesTestFixture.detectChanges();
		expect(isHeaderVisible('basicUsersForbidden', forbiddenRolesTestFixture))
			.toBeFalsy();
	});

	it('should display \'basicUsersForbidden\' header when logged user is admin', () => {
		loggedUserRolesService.updateLoggedRoles(['admin']);
		forbiddenRolesTestFixture.detectChanges();
		expect(isHeaderVisible('basicUsersForbidden', forbiddenRolesTestFixture))
			.toBeTruthy();
	});

	it('should NOT display \'basicUsersForbidden\' header when logged user is basic and admin', () => {
		loggedUserRolesService.updateLoggedRoles(['basic', 'admin']);
		forbiddenRolesTestFixture.detectChanges();
		expect(isHeaderVisible('basicUsersForbidden', forbiddenRolesTestFixture))
			.toBeFalsy();
	});

	it('should NOT display \'basicUsersForbidden\' header when no logged user', () => {
		loggedUserRolesService.updateLoggedRoles([]);
		forbiddenRolesTestFixture.detectChanges();
		expect(isHeaderVisible('basicUsersForbidden', forbiddenRolesTestFixture))
			.toBeFalsy();
	});

	it('should NOT display \'basicUsersForbidden\' header when logged user data not set', () => {
		loggedUserRolesService.updateLoggedRoles(null);
		forbiddenRolesTestFixture.detectChanges();
		expect(isHeaderVisible('basicUsersForbidden', forbiddenRolesTestFixture))
			.toBeFalsy();
	});

	// Tests for 'basicAndAdvancedUsersForbidden' header
	it('should NOT display \'basicAndAdvancedUsersForbidden\' header on startup', () => {
		expect(isHeaderVisible('basicAndAdvancedUsersForbidden', forbiddenRolesTestFixture))
			.toBeFalsy();
	});

	it('should NOT display \'basicAndAdvancedUsersForbidden\' header when logged user is basic', () => {
		loggedUserRolesService.updateLoggedRoles(['basic']);
		forbiddenRolesTestFixture.detectChanges();
		expect(isHeaderVisible('basicAndAdvancedUsersForbidden', forbiddenRolesTestFixture))
			.toBeFalsy();
	});

	it('should NOT display \'basicAndAdvancedUsersForbidden\' header when logged user is advanced', () => {
		loggedUserRolesService.updateLoggedRoles(['advanced']);
		forbiddenRolesTestFixture.detectChanges();
		expect(isHeaderVisible('basicAndAdvancedUsersForbidden', forbiddenRolesTestFixture))
			.toBeFalsy();
	});

	it('should NOT display \'basicAndAdvancedUsersForbidden\' header when logged user is basic and advanced', () => {
		loggedUserRolesService.updateLoggedRoles(['basic', 'advanced']);
		forbiddenRolesTestFixture.detectChanges();
		expect(isHeaderVisible('basicAndAdvancedUsersForbidden', forbiddenRolesTestFixture))
			.toBeFalsy();
	});

	it('should NOT display \'basicAndAdvancedUsersForbidden\' header when logged user is basic and admin', () => {
		loggedUserRolesService.updateLoggedRoles(['basic', 'admin']);
		forbiddenRolesTestFixture.detectChanges();
		expect(isHeaderVisible('basicAndAdvancedUsersForbidden', forbiddenRolesTestFixture))
			.toBeFalsy();
	});

	it('should NOT display \'basicAndAdvancedUsersForbidden\' header when logged user is advanced and admin', () => {
		loggedUserRolesService.updateLoggedRoles(['advanced', 'admin']);
		forbiddenRolesTestFixture.detectChanges();
		expect(isHeaderVisible('basicAndAdvancedUsersForbidden', forbiddenRolesTestFixture))
			.toBeFalsy();
	});

	it('should NOT display \'basicAndAdvancedUsersForbidden\' header when logged user is basic, advanced and admin', () => {
		loggedUserRolesService.updateLoggedRoles(['basic', 'advanced', 'admin']);
		forbiddenRolesTestFixture.detectChanges();
		expect(isHeaderVisible('basicAndAdvancedUsersForbidden', forbiddenRolesTestFixture))
			.toBeFalsy();
	});

	it('should display \'basicAndAdvancedUsersForbidden\' header when logged user is admin', () => {
		loggedUserRolesService.updateLoggedRoles(['admin']);
		forbiddenRolesTestFixture.detectChanges();
		expect(isHeaderVisible('basicAndAdvancedUsersForbidden', forbiddenRolesTestFixture))
			.toBeTruthy();
	});

	it('should NOT display \'basicAndAdvancedUsersForbidden\' header when no logged user', () => {
		loggedUserRolesService.updateLoggedRoles([]);
		forbiddenRolesTestFixture.detectChanges();
		expect(isHeaderVisible('basicAndAdvancedUsersForbidden', forbiddenRolesTestFixture))
			.toBeFalsy();
	});

	it('should NOT display \'basicAndAdvancedUsersForbidden\' header when logged user data not set', () => {
		loggedUserRolesService.updateLoggedRoles(null);
		forbiddenRolesTestFixture.detectChanges();
		expect(isHeaderVisible('basicAndAdvancedUsersForbidden', forbiddenRolesTestFixture))
			.toBeFalsy();
	});
});

function isHeaderVisible(headerClassName: string, fixture: ComponentFixture<ForbiddenRolesTestComponent>): boolean {
	return (fixture.debugElement.query(By.css('h1.' + headerClassName)) != null);
}
