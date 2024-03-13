import {Observable} from 'rxjs';

export class ChangePasswordDialogParametersMock {
    public width = 550;
    public maxHeight = 360;
    public userName = "test userName";
    public minPasswordStrengthValue = 1;
    public action: (oldPassword: string, newPassword: string) => Observable<boolean>;
    public hasNumpad = false;
    public showUsernameField = true;
}

describe('ChangePasswordDialogParameter', () => {
    it('should set numpad invisible by default in change password dialog', () => {
        const parameters = new ChangePasswordDialogParametersMock();

        expect(parameters.hasNumpad).toBeFalsy();
    });

    it('should set userName and display the info in change password dialog', () => {
        const parameters = new ChangePasswordDialogParametersMock();

        expect(parameters.showUsernameField).toBeTrue();
        expect(parameters.userName.length).toBeGreaterThan(0);
    });
});
