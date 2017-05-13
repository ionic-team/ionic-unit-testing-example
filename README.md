Ionic Unit Testing Example
=====================

UPDATES:
--------
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

If you are using Ionic v2, please see our [ionic-v2-branch](https://github.com/driftyco/ionic-unit-testing-example/tree/ionic-v2-branch).


About this Repository
=====================

This repository is based on the awesome [unit testing example](https://github.com/roblouie/unit-testing-demo) from [@roblouie](https://github.com/roblouie/) :thumbsup:

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
