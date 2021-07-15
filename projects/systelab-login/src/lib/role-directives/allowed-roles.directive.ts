import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { LoggedUserRolesService } from './logged-user-roles.service';
import { takeUntil } from 'rxjs/operators';

@Directive({
	selector: '[sltAllowedRoles]'
})
export class AllowedRolesDirective implements OnInit, OnDestroy {
	@Input() public sltAllowedRoles: string[];
	public isVisible = false;
	public stop$ = new Subject();

	constructor(
		private viewContainerRef: ViewContainerRef,
		private templateRef: TemplateRef<any>,
		private loggedUserRolesService: LoggedUserRolesService
	) {
	}

	public ngOnInit(): void {
		this.loggedUserRolesService.getLoggedUserRoles()
			.pipe(takeUntil(this.stop$))
			.subscribe(
				(loggedUserRoles: string[]) => {
					if (!loggedUserRoles) {
						this.viewContainerRef.clear();
					}

					const isLogged: boolean = loggedUserRoles && (loggedUserRoles.length > 0);
					if (isLogged && this.isAnyRoleAllowed(loggedUserRoles)) {
						if (!this.isVisible) {
							this.isVisible = true;
							this.viewContainerRef.createEmbeddedView(this.templateRef);
						}
					} else {
						this.isVisible = false;
						this.viewContainerRef.clear();
					}
				}
			);
	}

	public ngOnDestroy(): void {
		this.stop$.next();
	}

	private isAnyRoleAllowed(roles: string[]): boolean {
		return !!roles.find(
			(role: string): boolean => {
				return !!this.sltAllowedRoles.find(
					(allowedRole: string): boolean => {
						return role === allowedRole;
					}
				);
			}
		);
	}
}
