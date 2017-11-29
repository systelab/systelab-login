import { Component } from '@angular/core';
import { UserCredendials } from './systelab-login/login.component';

@Component({
	selector:    'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {

	public doLogin(credentials: UserCredendials) {
		console.log(credentials);
	}

}
