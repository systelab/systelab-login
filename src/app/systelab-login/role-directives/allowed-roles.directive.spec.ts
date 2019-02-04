import { Component, DebugElement, Injectable } from '@angular/core';
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

import { AllowedRolesDirective } from "./allowed-roles.directive";
import { LoggedUserRolesService } from "./logged-user-roles.service";


// Stub for the LoggedUserRolesService interface
@Injectable()
export class TestLoggedUserRolesService implements LoggedUserRolesService
{
    private loggedRoles = new BehaviorSubject<string[]>([]);
    private loggedRoles$ = this.loggedRoles.asObservable();

    constructor() {}

    public getLoggedUserRoles(): Observable<string[]>
    {
        return this.loggedRoles$;
    }

    public updateLoggedRoles(newLoggedRoles: string[])
    {
        this.loggedRoles.next(newLoggedRoles);
    }
}


// Test component used to check if sltAllowedRolesDirective is filtering correctly for 'admin' users.
@Component({
    selector: 'app-test-only-admin-allowed',
    template: `
        <div>
            <h1 *sltAllowedRoles="['admin']">Content to be shown or hidden</h1>
        </div>
    `,
    styles: []
})
export class TestOnlyAdminAllowedComponent
{
}


// Test component used to check if sltAllowedRolesDirective is filtering correctly for 'admin' and 'basic' users.
@Component({
    selector: 'app-test-admin-and-basic-allowed',
    template: `
        <div>
            <h1 *sltAllowedRoles="['admin','basic']">Content to be shown or hidden</h1>
        </div>
    `,
    styles: []
})
export class TestAdminAndBasicAllowedComponent
{
}


describe("AllowedRolesDirective", () =>
{
    let onlyAdminFixture: ComponentFixture<TestOnlyAdminAllowedComponent>;
    let adminAndBasicFixture: ComponentFixture<TestAdminAndBasicAllowedComponent>;
    let loggedUserRolesService: TestLoggedUserRolesService;

    beforeEach(async(() =>
    {
        loggedUserRolesService = new TestLoggedUserRolesService();
        TestBed.configureTestingModule({
            declarations:
            [
                AllowedRolesDirective,
                TestOnlyAdminAllowedComponent,
                TestAdminAndBasicAllowedComponent
            ],
            providers:
            [
                {provide: LoggedUserRolesService, useValue: loggedUserRolesService}
            ]
        })
        .compileComponents();
    }));

    beforeEach(() =>
    {
        onlyAdminFixture = TestBed.createComponent(TestOnlyAdminAllowedComponent);
        onlyAdminFixture.detectChanges();

        adminAndBasicFixture = TestBed.createComponent(TestAdminAndBasicAllowedComponent);
        adminAndBasicFixture.detectChanges();
    });


    // Only 'admin' allowed tests
    it("should NOT display test header in TestOnlyAdminAllowedComponent on startup", () =>
    {
        expect(isTestHeaderVisible(onlyAdminFixture)).toBeFalsy();
    });

    it("should display test header in TestOnlyAdminAllowedComponent when logged user is admin", () =>
    {
        loggedUserRolesService.updateLoggedRoles(['admin']);
        onlyAdminFixture.detectChanges();
        expect(isTestHeaderVisible(onlyAdminFixture)).toBeTruthy();
    });

    it("should display test header in TestOnlyAdminAllowedComponent when logged user is basic and admin", () =>
    {
        loggedUserRolesService.updateLoggedRoles(['basic', 'admin']);
        onlyAdminFixture.detectChanges();
        expect(isTestHeaderVisible(onlyAdminFixture)).toBeTruthy();
    });

    it("should NOT display test header in TestOnlyAdminAllowedComponent when logged user is basic", () =>
    {
        loggedUserRolesService.updateLoggedRoles(['basic']);
        onlyAdminFixture.detectChanges();
        expect(isTestHeaderVisible(onlyAdminFixture)).toBeFalsy();
    });

    it("should NOT display test header in TestOnlyAdminAllowedComponent when no logged user", () =>
    {
        loggedUserRolesService.updateLoggedRoles([]);
        onlyAdminFixture.detectChanges();
        expect(isTestHeaderVisible(onlyAdminFixture)).toBeFalsy();
    });

    it("should NOT display test header in TestOnlyAdminAllowedComponent when logged user data not set", () =>
    {
        loggedUserRolesService.updateLoggedRoles(null);
        onlyAdminFixture.detectChanges();
        expect(isTestHeaderVisible(onlyAdminFixture)).toBeFalsy();
    });


    // 'admin' and 'basic' allowed tests
    it("should NOT display test header in TestAdminAndBasicAllowedComponent on startup", () =>
    {
        expect(isTestHeaderVisible(adminAndBasicFixture)).toBeFalsy();
    });

    it("should display test header in TestAdminAndBasicAllowedComponent when logged user is admin", () =>
    {
        loggedUserRolesService.updateLoggedRoles(['admin']);
        adminAndBasicFixture.detectChanges();
        expect(isTestHeaderVisible(adminAndBasicFixture)).toBeTruthy();
    });

    it("should display test header in TestAdminAndBasicAllowedComponent when logged user is basic", () =>
    {
        loggedUserRolesService.updateLoggedRoles(['basic']);
        adminAndBasicFixture.detectChanges();
        expect(isTestHeaderVisible(adminAndBasicFixture)).toBeTruthy();
    });

    it("should display test header in TestAdminAndBasicAllowedComponent when logged user is basic and admin", () =>
    {
        loggedUserRolesService.updateLoggedRoles(['basic', 'admin']);
        adminAndBasicFixture.detectChanges();
        expect(isTestHeaderVisible(adminAndBasicFixture)).toBeTruthy();
    });

    it("should NOT display test header in TestAdminAndBasicAllowedComponent when logged user is other", () =>
    {
        loggedUserRolesService.updateLoggedRoles(['other']);
        adminAndBasicFixture.detectChanges();
        expect(isTestHeaderVisible(adminAndBasicFixture)).toBeFalsy();
    });

    it("should NOT display test header in TestAdminAndBasicAllowedComponent when no logged user", () =>
    {
        loggedUserRolesService.updateLoggedRoles([]);
        adminAndBasicFixture.detectChanges();
        expect(isTestHeaderVisible(adminAndBasicFixture)).toBeFalsy();
    });

    it("should NOT display test header in TestAdminAndBasicAllowedComponent when logged user data not set", () =>
    {
        loggedUserRolesService.updateLoggedRoles(null);
        adminAndBasicFixture.detectChanges();
        expect(isTestHeaderVisible(adminAndBasicFixture)).toBeFalsy();
    });
});

function isTestHeaderVisible<TestComponent>(fixture: ComponentFixture<TestComponent>): boolean
{
    return (fixture.debugElement.query(By.css("h1")) != null);
}
