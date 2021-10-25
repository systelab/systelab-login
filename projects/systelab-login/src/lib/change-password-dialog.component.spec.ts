import {ComponentFixture, TestBed} from '@angular/core/testing';
import {DialogRef, MessagePopupService} from 'systelab-components';
import {I18nService, SystelabTranslateModule} from 'systelab-translate';
import {ChangePasswordDialog, ChangePasswordDialogParameters} from './change-password-dialog.component';

describe('ChangePasswordDialogComponent', () => {
    let component: ChangePasswordDialog;
    let fixture: ComponentFixture<ChangePasswordDialog>;

    beforeEach(async () => {
        const spyDialogRef = jasmine.createSpyObj('DialogRef', ['close']);

        await TestBed.configureTestingModule({
            declarations: [ChangePasswordDialog],
            imports: [
                SystelabTranslateModule
            ],
            providers: [
                MessagePopupService,
                {provide: DialogRef, useValue: spyDialogRef},
                {provide: I18nService, useClass: I18nService}
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ChangePasswordDialog);
        component = fixture.componentInstance;
    });

    it('should set numpad invisible by default in change password dialog', () => {
		const parameters = new ChangePasswordDialogParameters();

		expect(parameters.hasNumpad).toBeFalsy();
    });
});
