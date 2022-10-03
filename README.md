[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9ff8111ef3074c089b6b84c110612e02)](https://www.codacy.com/gh/systelab/systelab-login/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=systelab/systelab-login&amp;utm_campaign=Badge_Grade)
[![Build Status](https://travis-ci.com/systelab/systelab-login.svg?branch=master)](https://travis-ci.com/systelab/systelab-login)
[![npm version](https://badge.fury.io/js/systelab-login.svg)](https://badge.fury.io/js/systelab-login)
[![Known Vulnerabilities](https://snyk.io/test/github/systelab/systelab-login/badge.svg?targetFile=package.json)](https://snyk.io/test/github/systelab/systelab-login?targetFile=package.json)

# systelab-login

Library with common Systelab login components to speed up our Angular developments


## Working with the repo

```bash
git clone https://github.com/systelab/systelab-login.git
cd systelab-login
npm ci
```

## Publish the library:

Given that you have a user with enough privileges, in order to publish the library in npmjs.com run the following script:

```bash
npm run build-lib
cd dist/systelab-login
npm publish
```

Library will be published at: https://www.npmjs.com/package/systelab-login

## Documentation

Read the [provided documentation](https://github.com/systelab/systelab-login/blob/master/projects/systelab-login/README.md) to use the library

## Version 14.x.x - Angular 14

[Angular 13 news](https://blog.angular.io/angular-v13-is-now-available-cce66f7bc296)

-   **View Engine** is no longer available
-   Libraries built with the latest version of the **APF** [Angular Package Format](https://angular.io/guide/angular-package-format) will no longer require the use of ngcc. As a result of these changes library developers can expect leaner package output and faster execution.
-   The new API removes the need for ComponentFactoryResolver being injected into the constructor. Ivy creates the opportunity to instantiate the component with ViewContainerRef.createComponent without creating an associated factory
-   **End of IE11 support**
-   Angular now supports the use of persistent build cache by default for new v13 projects [More info](https://github.com/angular/angular-cli/issues/21545) and [CLI Cache](https://angular.io/cli/cache)
-   **RxJS 7.4** is now the default for apps created with ng new
-   Dynamically enable/disable validators: allows built-in validators to be disabled by setting the value to null
-   Important improvements to TestBed that now does a better job of tearing down test modules and environments after each test
-   *canceledNavigationResolution* router flag to restore the computed value of the browser history when set to *computed*
-   [TypeScript 4.4](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-4.html)

[Angular 14 news](https://blog.angular.io/angular-v14-is-now-available-391a6db736af)

-   [Standalone Components](https://angular.io/guide/standalone-components)
-   [Typed Angular Forms](https://angular.io/guide/typed-forms)
-   Streamlined page title accessibility
-   Extended developer diagnostics
-   Catch the invalid “Banana in a box” error on your two-way data bindings
-   Catch nullish coalescing on non-nullable values in Angular templates
-   Bind to protected component members directly from the templates
-   Optional injectors in Embedded Views
-   Support for passing in an optional injector when creating an embedded view through *ViewContainerRef.createEmbeddedView* and *TemplateRef.createEmbeddedView*
-   NgModel changes are reflected in the UI for OnPush components
-   [TypeScript 4.6](https://devblogs.microsoft.com/typescript/announcing-typescript-4-6/)

## Version 11 - Angular 12

IE11 support has been deprecated due to the upgrade to Angular 12

Use of [Ivy](https://angular.io/guide/ivy), applications that uses this library have to use Angular 12 and Ivy rendering.

Added --noImplicitOverride flag to allow override methods and get error for unintentionally overrides https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-3.html#override-and-the---noimplicitoverride-flag
