import { Component } from '@angular/core';

@Component({
    selector: 'app-showcase-logged-users-can-view',
    template: `
                <div>Any logged user can see this</div>
	          `,
    styles: [`
      div {
          width: 300px;
          border: 2px solid black;
          margin-bottom: 5px;
          padding: 4px;
      }
	`],
    standalone: false
})
export class ShowcaseLoggedUsersCanViewComponent {

	constructor() {
	}
}
