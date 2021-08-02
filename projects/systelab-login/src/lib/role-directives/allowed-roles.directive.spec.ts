import { Component, Injectable } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AllowedRolesDirective } from './allowed-roles.directive';
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

	public updateLoggedRoles(newLoggedRoles: string[]): void {
		this.loggedRoles.next(newLoggedRoles);
	}
}

// Test component used to check if sltAllowedRoles directive is filtering correctly.
@Component({
	selector: 'app-allowed-roles-test',
	template: `
                <div>
                    <h1 class="onlyAdminUsers" *sltAllowedRoles="['admin']">Content to be shown or hidden</h1>
                    <h1 class="adminAndBasicUsers" *sltAllowedRoles="['admin','basic']">Content to be shown or hidden</h1>
                </div>
	          `,
	styles:   []
})
export class AllowedRolesTestComponent {
}

describe('AllowedRolesDirective', () => {
	let allowedRolesTestFixture: ComponentFixture<AllowedRolesTestComponent>;
	let loggedUserRolesService: StubLoggedUserRolesService;

	beforeEach(async () => {
		loggedUserRolesService = new StubLoggedUserRolesService();
		await TestBed.configureTestingModule({
			declarations:
				[
					AllowedRolesDirective,
					AllowedRolesTestComponent
				],
			providers:
				[
					{provide: LoggedUserRolesService, useValue: loggedUserRolesService}
				]
		})
			.compileComponents();
	});

	beforeEach(() => {
		allowedRolesTestFixture = TestBed.createComponent(AllowedRolesTestComponent);
		allowedRolesTestFixture.detectChanges();
	});

	// Tests for 'onlyAdminUsers' header
	it('should NOT display \'onlyAdminUsers\' header on startup', () => {
		expect(isHeaderVisible('onlyAdminUsers', allowedRolesTestFixture))
			.toBeFalsy();
	});

	it('should display \'onlyAdminUsers\' header when logged user is admin', () => {
		loggedUserRolesService.updateLoggedRoles(['admin']);
		allowedRolesTestFixture.detectChanges();
		expect(isHeaderVisible('onlyAdminUsers', allowedRolesTestFixture))
			.toBeTruthy();
	});

	it('should display \'onlyAdminUsers\' header when logged user is basic and admin', () => {
		loggedUserRolesService.updateLoggedRoles(['basic', 'admin']);
		allowedRolesTestFixture.detectChanges();
		expect(isHeaderVisible('onlyAdminUsers', allowedRolesTestFixture))
			.toBeTruthy();
	});

	it('should NOT display \'onlyAdminUsers\' header when logged user is basic', () => {
		loggedUserRolesService.updateLoggedRoles(['basic']);
		allowedRolesTestFixture.detectChanges();
		expect(isHeaderVisible('onlyAdminUsers', allowedRolesTestFixture))
			.toBeFalsy();
	});

	it('should NOT display \'onlyAdminUsers\' header when no logged user', () => {
		loggedUserRolesService.updateLoggedRoles([]);
		allowedRolesTestFixture.detectChanges();
		expect(isHeaderVisible('onlyAdminUsers', allowedRolesTestFixture))
			.toBeFalsy();
	});

	it('should NOT display \'onlyAdminUsers\' header when logged user data not set', () => {
		loggedUserRolesService.updateLoggedRoles(null);
		allowedRolesTestFixture.detectChanges();
		expect(isHeaderVisible('onlyAdminUsers', allowedRolesTestFixture))
			.toBeFalsy();
	});

	// Tests for 'adminAndBasicUsers' header
	it('should NOT display \'adminAndBasicUsers\' header on startup', () => {
		expect(isHeaderVisible('adminAndBasicUsers', allowedRolesTestFixture))
			.toBeFalsy();
	});

	it('should display \'adminAndBasicUsers\' header when logged user is admin', () => {
		loggedUserRolesService.updateLoggedRoles(['admin']);
		allowedRolesTestFixture.detectChanges();
		expect(isHeaderVisible('adminAndBasicUsers', allowedRolesTestFixture))
			.toBeTruthy();
	});

	it('should display \'adminAndBasicUsers\' header when logged user is basic', () => {
		loggedUserRolesService.updateLoggedRoles(['basic']);
		allowedRolesTestFixture.detectChanges();
		expect(isHeaderVisible('adminAndBasicUsers', allowedRolesTestFixture))
			.toBeTruthy();
	});

	it('should display \'adminAndBasicUsers\' header when logged user is basic and admin', () => {
		loggedUserRolesService.updateLoggedRoles(['basic', 'admin']);
		allowedRolesTestFixture.detectChanges();
		expect(isHeaderVisible('adminAndBasicUsers', allowedRolesTestFixture))
			.toBeTruthy();
	});

	it('should NOT display \'adminAndBasicUsers\' header when logged user is other', () => {
		loggedUserRolesService.updateLoggedRoles(['other']);
		allowedRolesTestFixture.detectChanges();
		expect(isHeaderVisible('adminAndBasicUsers', allowedRolesTestFixture))
			.toBeFalsy();
	});

	it('should NOT display \'adminAndBasicUsers\' header when no logged user', () => {
		loggedUserRolesService.updateLoggedRoles([]);
		allowedRolesTestFixture.detectChanges();
		expect(isHeaderVisible('adminAndBasicUsers', allowedRolesTestFixture))
			.toBeFalsy();
	});

	it('should NOT display \'adminAndBasicUsers\' header when logged user data not set', () => {
		loggedUserRolesService.updateLoggedRoles(null);
		allowedRolesTestFixture.detectChanges();
		expect(isHeaderVisible('adminAndBasicUsers', allowedRolesTestFixture))
			.toBeFalsy();
	});
});

function isHeaderVisible(headerClassName: string, fixture: ComponentFixture<AllowedRolesTestComponent>): boolean {
	return (fixture.debugElement.query(By.css('h1.' + headerClassName)) != null);
}
