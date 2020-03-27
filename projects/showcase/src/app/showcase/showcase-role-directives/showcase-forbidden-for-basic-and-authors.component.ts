import { Component } from '@angular/core';

@Component({
	selector: 'app-showcase-forbidden-for-basic-and-authors',
	template: `
                <div>Basic users and authors cannot see this</div>
	          `,
	styles:   [`
      div {
          width: 300px;
          border: 2px solid red;
          margin-bottom: 5px;
          padding: 4px;
      }
	`]
})
export class ShowcaseForbiddenForBasicAndAuthorsComponent {

	constructor() {
	}
}
