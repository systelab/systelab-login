import { Component } from '@angular/core';

@Component({
    selector: 'app-showcase-only-for-admins',
    template: `
                <div>Only admins can see this section</div>
	          `,
    styles: [`
      div {
          width: 300px;
          border: 2px solid red;
          margin-bottom: 5px;
          padding: 4px;
      }
	`],
    standalone: false
})
export class ShowcaseOnlyForAdminsComponent {

	constructor() {
	}
}
