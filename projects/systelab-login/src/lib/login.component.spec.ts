
import { Component, Input, ViewChild } from '@angular/core';
import { ComponentFixture, fakeAsync, flush, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { I18nService, SystelabTranslateModule } from 'systelab-translate';
import { FormLoginComponent } from './form-login/form-login.component';
import { LoginComponent } from './login.component';
import { FormSignupComponent } from './form-signup/form-signup.component';
import { FormRecoveryComponent } from './form-recovery/form-recovery.component';

describe('LoginComponent', () => {
    let testHostComponent: TestHostComponent;
    let testHostFixture: ComponentFixture<TestHostComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [
                {
                    provide: I18nService, useValue: {
                        get: () => of('test'),
                    }
                },
            ],
            imports: [
                BrowserModule,
                BrowserAnimationsModule,
                FormsModule,
                SystelabTranslateModule,
            ],
            declarations: [
                TestHostComponent,
                LoginComponent,
                FormLoginComponent,
                FormSignupComponent,
                FormRecoveryComponent,
                SystelabPasswordIndicatorMockComponent,
            ]
        }).compileComponents();

        testHostFixture = TestBed.createComponent(TestHostComponent);
        testHostComponent = testHostFixture.componentInstance;
        testHostFixture.detectChanges();
    });

    it('should initialize', () => {
        expect(testHostFixture).toBeDefined();
    });

    describe('input methods', () => {
        describe('login form', () => {
            beforeEach(() => {
                testHostComponent.loginComponent.goLogin();
            });
            it('should set the username input with testUserName', fakeAsync(() => {
                testHostComponent.setUserName('testUserName');
                inputMethodTest(testHostFixture, '#inputUserName', 'testUserName');
            }));
            it('should set the password input with testPassword', fakeAsync(() => {
                testHostComponent.setPassword('testPassword');
                inputMethodTest(testHostFixture, '#inputPassword', 'testPassword');
            }));
        });
        describe('signup form', () => {
            beforeEach(() => {
                testHostComponent.loginComponent.goSignUp();
            });
            it('should set the lastName input with testLastName', fakeAsync(() => {
                testHostComponent.setLastName('testLastName');
                inputMethodTest(testHostFixture, '#inputLastName', 'testLastName');
            }));
            it('should set the name input with testName', fakeAsync(() => {
                testHostComponent.setName('testName');
                inputMethodTest(testHostFixture, '#inputName', 'testName');
            }));
        });
        describe('recovery form', () => {
            beforeEach(() => {
                testHostComponent.loginComponent.goRecovery();
            });
            it('should set the username input with testUserName', fakeAsync(() => {
                testHostComponent.setUserName('testUserName');
                inputMethodTest(testHostFixture, '#inputUserName', 'testUserName');
            }));
        });
    });

    describe('event emitters', () => {
        it('should emit an event when the user types enter in the log in form', fakeAsync(() => {
            const spy = spyOn(testHostComponent.loginComponent.login, 'emit');
            testHostComponent.loginComponent.goLogin();
            testHostComponent.setUserName('testUserName');
            eventEmitterTest(testHostComponent, testHostFixture, spy);
        }));
        it('should emit an event when the user types enter in the sign up form', fakeAsync(() => {
            const spy = spyOn(testHostComponent.loginComponent.signUp, 'emit');
            testHostComponent.loginComponent.goSignUp();
            eventEmitterTest(testHostComponent, testHostFixture, spy);
        }));
        it('should emit an event when the user types entes in the recovery form', fakeAsync(() => {
            const spy = spyOn(testHostComponent.loginComponent.recovery, 'emit');
            testHostComponent.loginComponent.goRecovery();
            eventEmitterTest(testHostComponent, testHostFixture, spy);
        }));
        it('should emit an event when the user clicks on the More Info icon', fakeAsync(() => {
            const spy = spyOn(testHostComponent.loginComponent.onMoreInfo, 'emit');
            testHostFixture.debugElement.query(By.css('.fa-info-circle')).triggerEventHandler('click', {});
            testHostFixture.detectChanges();
            flush();
            expect(spy).toHaveBeenCalled();
        }));
        it('should emit an event when the user clicks on the Logo icon', fakeAsync(() => {
            const spy = spyOn(testHostComponent.loginComponent.logoClicked, 'emit');
            testHostFixture.debugElement.query(By.css('.slab-header__logo')).triggerEventHandler('click', {});
            testHostFixture.detectChanges();
            flush();
            expect(spy).toHaveBeenCalled();
        }));
    });
});

const inputMethodTest = (fixture: ComponentFixture<TestHostComponent>, id: string, assertion: string): void => {
    fixture.detectChanges();
    flush();
    const inputUserName = fixture.nativeElement.querySelector(id).value;
    expect(inputUserName).toEqual(assertion);
};

const eventEmitterTest = (component: TestHostComponent, fixture: ComponentFixture<TestHostComponent>, spy: jasmine.Spy): void => {
    component.setUserName('userNameTest');
    fixture.detectChanges();
    fixture.debugElement.query(By.css('#inputUserName')).triggerEventHandler('keyup.enter', {});
    fixture.detectChanges();
    flush();
    expect(spy).toHaveBeenCalled();
};

@Component({
    selector: 'app-host-component',
    template: `<systelab-login
        #login
        [userName]="userName"
        [password]="password"
        [lastName]="lastName"
        [name]="name"
        [email]="email"
        [moreInfo]="moreInfo"
        [version]="version"
        [applicationLogo]="applicationLogo"
    ></systelab-login>`
})
class TestHostComponent {
    @ViewChild('login') public loginComponent: LoginComponent;

    private userName = '';
    private password = '';
    private lastName = '';
    private name = '';
    private email = '';
    private moreInfo = true;
    private version = true;
    private applicationLogo = true;

    public setUserName(userName: string) {
        this.userName = userName;
    }
    public setPassword(password: string) {
        this.password = password;
    }
    public setLastName(lastName: string) {
        this.lastName = lastName;
    }
    public setName(name: string) {
        this.name = name;
    }
    public setEmail(email: string) {
        this.email = email;
    }
}

@Component({
    selector: 'systelab-password-indicator',
    template: ''
})
class SystelabPasswordIndicatorMockComponent {
    @Input() public minPasswordStrengthValue: number;
    @Input() public maxUsernameLength: number;
    @Input() public password: string;
    public isOK = (): boolean => true;
}
