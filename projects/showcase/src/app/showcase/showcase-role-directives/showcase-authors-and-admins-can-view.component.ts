import { Component } from '@angular/core';

@Component({
    selector: 'app-showcase-authors-and-admins-can-view',
    template: `
                <div>Only authors and admins can see this</div>
	          `,
    styles: [`
      div {
          width: 300px;
          border: 2px solid green;
          margin-bottom: 5px;
          padding: 4px;
      }
	`],
    standalone: false
})
export class ShowcaseAuthorsAndAdminsCanViewComponent {

	constructor() {
	}
}
