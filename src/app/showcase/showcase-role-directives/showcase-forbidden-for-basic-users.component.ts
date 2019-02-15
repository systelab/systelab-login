import { Component } from '@angular/core';

@Component({
	selector: 'app-showcase-forbidden-for-basic-users',
	template: `
                <div>Basic users cannot see this</div>
	          `,
	styles:   [`
      div {
          width: 300px;
          border: 2px solid green;
          margin-bottom: 5px;
          padding: 4px;
      }
	`]
})
export class ShowcaseForbiddenForBasicUsersComponent {

	constructor() {
	}

}
