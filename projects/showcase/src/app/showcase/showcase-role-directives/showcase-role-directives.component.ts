import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';

import { ShowcaseLoggedUserRolesService } from './showcase-logged-user-roles.service';

@Component({
    selector: 'app-showcase-role-directives',
    templateUrl: './showcase-role-directives.component.html',
    standalone: false
})
export class ShowcaseRoleDirectivesComponent implements OnInit {

	public roleForm: UntypedFormGroup;

	constructor(
		private formBuilder: UntypedFormBuilder,
		private rolesService: ShowcaseLoggedUserRolesService
	) {
		this.roleForm = formBuilder.group({
			basic:  true,
			author: false,
			admin:  false
		});
	}

	public ngOnInit(): void {
		// Utility method to transform the array of roles to an array of strings
		// Fe: [{name: 'user'}, {name: 'author'}] -> ['user', 'author']
		const mapRoleArrayToStringArray = obj => {
			let roles: string[] = [];
			Object.keys(obj)
				.forEach(key => {
					if (obj[key]) {
						roles = [...roles, key];
					}
				});
			return roles;
		};

		// Listen to the changes from the form and update the roles
		// the user has in the rolesService
		this.roleForm.valueChanges
			.pipe(map(mapRoleArrayToStringArray))
			.subscribe(roles => this.rolesService.updateRoles(roles));
	}

}
