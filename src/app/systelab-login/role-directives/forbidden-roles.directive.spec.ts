import { Component, DebugElement, Injectable } from '@angular/core';
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

import { ForbiddenRolesDirective } from "./forbidden-roles.directive";
import { LoggedUserRolesService } from "./logged-user-roles.service";


// Stub for the LoggedUserRolesService interface
@Injectable()
export class StubLoggedUserRolesService implements LoggedUserRolesService
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


// Test component used to check if sltForbiddenRolesDirective is filtering correctly not logged users.
@Component({
    selector: 'app-test-not-logged-forbidden',
    template: `
        <div>
            <h1 *sltForbiddenRoles="[]">Content to be shown or hidden</h1>
        </div>
    `,
    styles: []
})
export class TestNotLoggedForbiddenComponent
{
}


// Test component used to check if sltForbiddenRolesDirective is filtering correctly 'basic' users.
@Component({
    selector: 'app-test-basic-forbidden',
    template: `
        <div>
            <h1 *sltForbiddenRoles="['basic']">Content to be shown or hidden</h1>
        </div>
    `,
    styles: []
})
export class TestBasicForbiddenComponent
{
}


// Test component used to check if sltForbiddenRolesDirective is filtering correctly 'basic' and 'advanced' users.
@Component({
    selector: 'app-test-basic-and-advanced-forbidden',
    template: `
        <div>
            <h1 *sltForbiddenRoles="['basic','advanced']">Content to be shown or hidden</h1>
        </div>
    `,
    styles: []
})
export class TestBasicAndAdvancedForbiddenComponent
{
}

describe("ForbiddenRolesDirective", () =>
{
    let notLoggedForbiddenFixture: ComponentFixture<TestNotLoggedForbiddenComponent>;
    let basicForbiddenFixture: ComponentFixture<TestBasicForbiddenComponent>;
    let basicAndAdvancedForbiddenFixture: ComponentFixture<TestBasicAndAdvancedForbiddenComponent>;
    let loggedUserRolesService: StubLoggedUserRolesService;

    beforeEach(async(() =>
    {
        loggedUserRolesService = new StubLoggedUserRolesService();
        TestBed.configureTestingModule({
            declarations:
            [
                ForbiddenRolesDirective,
                TestNotLoggedForbiddenComponent,
                TestBasicForbiddenComponent,
                TestBasicAndAdvancedForbiddenComponent
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
        notLoggedForbiddenFixture = TestBed.createComponent(TestNotLoggedForbiddenComponent);
        notLoggedForbiddenFixture.detectChanges();

        basicForbiddenFixture = TestBed.createComponent(TestBasicForbiddenComponent);
        basicForbiddenFixture.detectChanges();

        basicAndAdvancedForbiddenFixture = TestBed.createComponent(TestBasicAndAdvancedForbiddenComponent);
        basicAndAdvancedForbiddenFixture.detectChanges();
    });


    // Not logged users forbidden tests
    it("should NOT display test header in TestNotLoggedForbiddenComponent on startup", () =>
    {
        expect(isTestHeaderVisible(notLoggedForbiddenFixture)).toBeFalsy();
    });

    it("should display test header in TestNotLoggedForbiddenComponent when logged user is basic", () =>
    {
        loggedUserRolesService.updateLoggedRoles(['basic']);
        notLoggedForbiddenFixture.detectChanges();
        expect(isTestHeaderVisible(notLoggedForbiddenFixture)).toBeTruthy();
    });

    it("should display test header in TestNotLoggedForbiddenComponent when logged user is admin", () =>
    {
        loggedUserRolesService.updateLoggedRoles(['admin']);
        notLoggedForbiddenFixture.detectChanges();
        expect(isTestHeaderVisible(notLoggedForbiddenFixture)).toBeTruthy();
    });

    it("should display test header in TestNotLoggedForbiddenComponent when logged user is basic and admin", () =>
    {
        loggedUserRolesService.updateLoggedRoles(['basic', 'admin']);
        notLoggedForbiddenFixture.detectChanges();
        expect(isTestHeaderVisible(notLoggedForbiddenFixture)).toBeTruthy();
    });

    it("should NOT display test header in TestNotLoggedForbiddenComponent when no user logged", () =>
    {
        loggedUserRolesService.updateLoggedRoles([]);
        notLoggedForbiddenFixture.detectChanges();
        expect(isTestHeaderVisible(notLoggedForbiddenFixture)).toBeFalsy();
    });

    it("should NOT display test header in TestNotLoggedForbiddenComponent when logged user data not set", () =>
    {
        loggedUserRolesService.updateLoggedRoles(null);
        notLoggedForbiddenFixture.detectChanges();
        expect(isTestHeaderVisible(notLoggedForbiddenFixture)).toBeFalsy();
    });


    // Basic users forbidden tests
    it("should NOT display test header in TestBasicForbiddenComponent on startup", () =>
    {
        expect(isTestHeaderVisible(basicForbiddenFixture)).toBeFalsy();
    });

    it("should NOT display test header in TestBasicForbiddenComponent when logged user is basic", () =>
    {
        loggedUserRolesService.updateLoggedRoles(['basic']);
        basicForbiddenFixture.detectChanges();
        expect(isTestHeaderVisible(basicForbiddenFixture)).toBeFalsy();
    });

    it("should display test header in TestBasicForbiddenComponent when logged user is admin", () =>
    {
        loggedUserRolesService.updateLoggedRoles(['admin']);
        basicForbiddenFixture.detectChanges();
        expect(isTestHeaderVisible(basicForbiddenFixture)).toBeTruthy();
    });

    it("should NOT display test header in TestBasicForbiddenComponent when logged user is basic and admin", () =>
    {
        loggedUserRolesService.updateLoggedRoles(['basic', 'admin']);
        basicForbiddenFixture.detectChanges();
        expect(isTestHeaderVisible(basicForbiddenFixture)).toBeFalsy();
    });

    it("should NOT display test header in TestBasicForbiddenComponent when no logged user", () =>
    {
        loggedUserRolesService.updateLoggedRoles([]);
        basicForbiddenFixture.detectChanges();
        expect(isTestHeaderVisible(basicForbiddenFixture)).toBeFalsy();
    });

    it("should NOT display test header in TestBasicForbiddenComponent when logged user data not set", () =>
    {
        loggedUserRolesService.updateLoggedRoles(null);
        basicForbiddenFixture.detectChanges();
        expect(isTestHeaderVisible(basicForbiddenFixture)).toBeFalsy();
    });


    // Basic and advanced users forbidden tests
    it("should NOT display test header in TestBasicAndAdvancedForbiddenComponent on startup", () =>
    {
        expect(isTestHeaderVisible(basicAndAdvancedForbiddenFixture)).toBeFalsy();
    });

    it("should NOT display test header in TestBasicAndAdvancedForbiddenComponent when logged user is basic", () =>
    {
        loggedUserRolesService.updateLoggedRoles(['basic']);
        basicAndAdvancedForbiddenFixture.detectChanges();
        expect(isTestHeaderVisible(basicAndAdvancedForbiddenFixture)).toBeFalsy();
    });

    it("should NOT display test header in TestBasicAndAdvancedForbiddenComponent when logged user is advanced", () =>
    {
        loggedUserRolesService.updateLoggedRoles(['advanced']);
        basicAndAdvancedForbiddenFixture.detectChanges();
        expect(isTestHeaderVisible(basicAndAdvancedForbiddenFixture)).toBeFalsy();
    });

    it("should NOT display test header in TestBasicAndAdvancedForbiddenComponent when logged user is basic and advanced", () =>
    {
        loggedUserRolesService.updateLoggedRoles(['basic', 'advanced']);
        basicAndAdvancedForbiddenFixture.detectChanges();
        expect(isTestHeaderVisible(basicAndAdvancedForbiddenFixture)).toBeFalsy();
    });

    it("should NOT display test header in TestBasicAndAdvancedForbiddenComponent when logged user is basic and admin", () =>
    {
        loggedUserRolesService.updateLoggedRoles(['basic', 'admin']);
        basicAndAdvancedForbiddenFixture.detectChanges();
        expect(isTestHeaderVisible(basicAndAdvancedForbiddenFixture)).toBeFalsy();
    });

    it("should NOT display test header in TestBasicAndAdvancedForbiddenComponent when logged user is advanced and admin", () =>
    {
        loggedUserRolesService.updateLoggedRoles(['advanced', 'admin']);
        basicAndAdvancedForbiddenFixture.detectChanges();
        expect(isTestHeaderVisible(basicAndAdvancedForbiddenFixture)).toBeFalsy();
    });

    it("should NOT display test header in TestBasicAndAdvancedForbiddenComponent when logged user is basic, advanced and admin", () =>
    {
        loggedUserRolesService.updateLoggedRoles(['basic', 'advanced', 'admin']);
        basicAndAdvancedForbiddenFixture.detectChanges();
        expect(isTestHeaderVisible(basicAndAdvancedForbiddenFixture)).toBeFalsy();
    });

    it("should display test header in TestBasicAndAdvancedForbiddenComponent when logged user is admin", () =>
    {
        loggedUserRolesService.updateLoggedRoles(['admin']);
        basicAndAdvancedForbiddenFixture.detectChanges();
        expect(isTestHeaderVisible(basicAndAdvancedForbiddenFixture)).toBeTruthy();
    });

    it("should NOT display test header in TestBasicAndAdvancedForbiddenComponent when no logged user", () =>
    {
        loggedUserRolesService.updateLoggedRoles([]);
        basicAndAdvancedForbiddenFixture.detectChanges();
        expect(isTestHeaderVisible(basicAndAdvancedForbiddenFixture)).toBeFalsy();
    });

    it("should NOT display test header in TestBasicAndAdvancedForbiddenComponent when logged user data not set", () =>
    {
        loggedUserRolesService.updateLoggedRoles(null);
        basicAndAdvancedForbiddenFixture.detectChanges();
        expect(isTestHeaderVisible(basicAndAdvancedForbiddenFixture)).toBeFalsy();
    });
});

function isTestHeaderVisible<TestComponent>(fixture: ComponentFixture<TestComponent>): boolean
{
    return (fixture.debugElement.query(By.css("h1")) != null);
}
