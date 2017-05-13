import { browser, element, by } from 'protractor';

describe('Page 3', function() {

  // NAVIGATE TO PAGE THREE BEFORE ALL TESTS
  beforeEach(() => {
    browser.get('');
    // GIVE THE BROWSER A SECOND TO CATCH UP
    browser.driver.sleep(1000);

    // LOCATE THE MENU TOGGLE BUTTON
    let menuToggleButton = element(by.css('.bar-button-menutoggle'));
    // click RETURNS A PROMISE
    menuToggleButton.click()
      .then(() => {
        // GET THE UNIQUE ITEM THAT HOLDS THE MENU
        let menuInner = element(by.css('.menu-inner'));
        // GET THE PAGE THREE BUTTON
        let menuItemElement = menuInner.all(by.tagName('button')).get(2);

        // click RETURNS A PROMISE
        return menuItemElement.click();
      });
  });

  // describe INSIDE THE MAIN describe HELPS WITH ORGANIZATION
  describe('when loaded', () => {
    it('should have a title saying Page Three', () => {
      // getTitle RETURNS A PROMISE
      browser.getTitle()
        .then((title) => {
          // TEST THE PAGE TITLE
          expect(title).toEqual('Page Three');
        });
    });
  });
});
