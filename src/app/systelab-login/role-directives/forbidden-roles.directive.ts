import { Directive, Input, Inject, OnDestroy, OnInit, TemplateRef, ViewContainerRef, trigger } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { takeUntil, first } from 'rxjs/operators';

import { LoggedUserRolesService } from './logged-user-roles.service';


@Directive({
  selector: '[sltForbiddenRoles]'
})
export class ForbiddenRolesDirective implements OnInit, OnDestroy {

    @Input() sltForbiddenRoles: string[];
    isVisible = false;
    stop$ = new Subject();

    constructor(
        private viewContainerRef: ViewContainerRef,
        private templateRef: TemplateRef<any>,
        private loggedUserRolesService: LoggedUserRolesService
    ) {}

    ngOnInit() {
        this.loggedUserRolesService.getLoggedUserRoles().pipe(takeUntil(this.stop$)).subscribe(
            (loggedUserRoles: string[]) => {
                if (!loggedUserRoles) {
                    this.viewContainerRef.clear();
                }

                const isLogged: boolean = loggedUserRoles && (loggedUserRoles.length > 0);
                if (!isLogged || this.isAnyRoleForbidden(loggedUserRoles)) {
                    this.isVisible = false;
                    this.viewContainerRef.clear();
                } else {
                    if (!this.isVisible) {
                        this.isVisible = true;
                        this.viewContainerRef.createEmbeddedView(this.templateRef);
                    }
                }
            }
        );
    }

    ngOnDestroy() {
        this.stop$.next();
    }

    private isAnyRoleForbidden(roles: string[]): boolean {
        return !!roles.find(
            (role: string): boolean => {
                return !!this.sltForbiddenRoles.find(
                    (forbiddenRole: string): boolean => {
                        return role === forbiddenRole;
                    }
                );
            }
        );
    }
}
