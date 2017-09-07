# Ionic Unit Testing Example

**This repository is an example project that gives guidance on setting up your Ionic application for unit testing and end-to-end (E2E) testing.** We have been told the folks at Ionic will be adding testing features to new projects in the future. But until then, feel free to borrow from this project as needed.

Special thanks to all of the contributors. With the exception of the Ionic team's updates to the framework, this project is stable. If you have a suggestion, feel free to update code and make a pull request. Find a problem or bug, feel free to file a detailed issue. 

## How to Configure Your Ionic Application for Testing

Read [this tutorial](https://leifwells.github.io/2017/08/27/testing-in-ionic-configure-existing-projects-for-testing/) for instructions on how to apply the testing configuration in this project to your own project. 

## Mocking Classes for Ionic
When a developer unit tests a component, the objective is to isolate that component as much as possible. In the case of an Ionic page, you may have Ionic components like `NavController`, `LoadingContoller`, or `Platform`. Adding these components means adding pieces of the Ionic framework to your test, thus not isolating the component. As part of this example, the file `test-config/mocks-ionic.ts` is provided for creating simple mocks for many of the classes in Ionic that you may need. You may use the classes from this file in test files inside the `TestBed.configureComponent()` method argument's `provider` array as seen in our [example unit test file](https://github.com/ionic-team/ionic-unit-testing-example/blob/master/src/app/app.component.spec.ts).

There are other mocking options that should be mentioned:
**[ionic-mocks](https://github.com/stonelasley/ionic-mocks)**
**[ionic-test-doubles](https://github.com/DomesticApp/ionic-test-doubles)**

Also worth mentioning is [ionic-native-mocks](https://github.com/chrisgriffith/ionic-native-mocks) which can be helpful when mocks for Ionic Native classes used in your project are needed.

Getting Started with this Project
-----------

To get started, clone this repo, and run `npm install` in the root directory.

```sh
git clone https://github.com/ionic-team/ionic-unit-testing-example.git
cd ionic-unit-testing-example
npm install
```
Then, you should run `ionic serve` to make sure the project loads.

### Unit Tests

To run the tests, run `npm run test`.

See the example test in `src/app/app.component.spec.ts` for an example of a component test.

### End-To-End Tests (Browser-Only)

To serve the app, run `ionic serve`.

To run the end-to-end tests, run (while the app is being served) `npm run e2e`.

See the example end-to-end test in `e2e/app.e2e-spec.ts`.

UPDATES:
--------
### **2017-09-05: Added Code Coverage Functionality**

Thanks to @lathonez, we now have functioning code coverage functionality. With this update, developers can run `npm run test-coverage` which will run the project's unit tests with Karma and produce documentation that gives guidance on how well the project's tests cover the code.

![Example Image of Completed Code Coverage](https://user-images.githubusercontent.com/1648535/30074946-54a36e50-9241-11e7-9ca8-6263d0353c58.png)

The documentation is created inside the `/coverage` folder (ignored by git).

## Looking for Version 2?

If you are using Ionic v2, please see our [ionic-v2-branch](https://github.com/ionic-team/ionic-unit-testing-example/tree/ionic-v2-branch).

## Credits

This repository is based on the awesome [unit testing example](https://github.com/roblouie/unit-testing-demo) from [@roblouie](https://github.com/roblouie/) :thumbsup:

Past Updates
==========

### **2017-08-26: Update to `ionic-angular` version 3.6.0**

We updated the project to `ionic-angular` version `3.6.0`. Developers wishing to use this should also update Ionic CLI for a better experience. With today's update, this project is now at version `0.0.5`.

## **Added: Fix for assets not being found by Karma**

Thanks to [@datencia](https://github.com/datencia) for providing an update to our Karma configuration that properly sets the Karma base path so that image assets can be found during testing. This fix should also work any JSON data files you might want to use for testing. He also provided an image and updated our sample unit test spec file that tests that the image is found. 

#### **Added: Update code to match Ionic templates**

Thanks (again) to [@danielsogl](https://github.com/danielsogl/) for providing a code update to the project so that our code matches code created by using the `ionic start` command. Having this code properly match is important as it provides the best practice guidance for handling application start up.

#### *2017-05-28: Update to Version 3.3.0*

Thanks to [@danielsogl](https://github.com/danielsogl/) for getting us up-to-date with Ionic 3.3.0, Angular 4.1.2 and Ionic Native 3.10.2.

Thanks to [@johnstonbl01](https://github.com/johnstonbl01/) for adding a couple of mocks that prevent us from seeing some unnecessary warning messages.

#### *2017-05-12: Update to Version 3* 

We've updated this repo to use Ionic v3.2.1 and Ionic CLI v3.0.0.

If you already have this repository downloaded on your system, after you sync with our Master branch make certain you delete your `node_modules` folder and then run `npm install`.

Also, since we've updated to Ionic CLI v3.0.0, you will need to update your version as well:
```
npm remove -g ionic
npm install -g ionic
```
If you run `ionic -v` it should return `3.0.0` (or better, depending on what has been released.
