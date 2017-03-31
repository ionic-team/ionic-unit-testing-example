import { Page3Item, Page3Service } from './page3-service';

describe('Page3Service', () => {
  let service: Page3Service;

  beforeEach(() => service = new Page3Service());

  it('should have a list of 25 items', done => {
    service.page3Subject.subscribe( (value) => {
      expect(value.length).toBe(25);
      done();
    });
  });

  it('should contain Page3Item items', done => {
    service.page3Subject.subscribe( (value) => {
      expect(value[0] instanceof Page3Item).toBeTruthy();
      done();
    });
  });
});
