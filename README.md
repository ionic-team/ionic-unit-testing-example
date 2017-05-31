Ionic Unit Testing Example
=====================

This repository is an example project that gives guidance on setting up your Ionic application for unit testing and end-to-end (E2E) testing. We have been told the folks at Ionic will be adding testing features to new projects in the future. But until then, feel free to borrow from this project as needed.

Special thanks to all of the contributors. With the exception of the Ionic team's updates to the framework, this project is stable. If you have a suggestion, feel free to update code and make a pull request. Find a problem or bug, feel free to file a detailed issue. 

UPDATES:
--------
*2017-05-28: Update to Version 3.3.0*

Thanks to [@danielsogl](https://github.com/danielsogl/) for getting us up-to-date with Ionic 3.3.0, Angular 4.1.2 and Ionic Native 3.10.2.

Thanks to [@johnstonbl01](https://github.com/johnstonbl01/) for adding a couple of mocks that prevent us from seeing some unnecessary warning messages.

*2017-05-12: Update to Version 3* 

We've updated this repo to use Ionic v3.2.1 and Ionic CLI v3.0.0.

If you already have this repository downloaded on your system, after you sync with our Master branch make certain you delete your `node_modules` folder and then run `npm install`.

Also, since we've updated to Ionic CLI v3.0.0, you will need to update your version as well:
```
npm remove -g ionic
npm install -g ionic
```
If you run `ionic -v` it should return `3.0.0` (or better, depending on what has been released.

Looking for Version 2?
----------------------

If you are using Ionic v2, please see our [ionic-v2-branch](https://github.com/ionic-team/ionic-unit-testing-example/tree/ionic-v2-branch).


Credits
=====================

This repository is based on the awesome [unit testing example](https://github.com/roblouie/unit-testing-demo) from [@roblouie](https://github.com/roblouie/) :thumbsup:

Getting Started
===============

To get started, clone this repo, and run `npm install` in the root directory.

Unit Tests
----------

To run the tests, run `npm test`.

See the example test in `src/app/app.component.spec.ts` for an example of a component test.

End-To-End Tests (Browser-Only)
-------------------------------

To serve the app, run `ionic serve`.

To run the end-to-end tests, run (while the app is being served) `npm run e2e`.

See the example end-to-end test in `e2e/app.e2e-spec.ts`.
