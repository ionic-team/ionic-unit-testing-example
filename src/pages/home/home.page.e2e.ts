import { browser, by, element } from 'protractor';

describe('App', () => {

  beforeEach(() => {
    browser.get('/');
  });

  it('should have a title', () => {
    expect((element(by.className('title'))).isDisplayed()).toBeTruthy();
  });
});
