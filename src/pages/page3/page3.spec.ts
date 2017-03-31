import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Page3 } from "../page3/page3";
import { Page3Item, Page3Service } from '../../providers/page3service';
import { IonicModule, NavController } from "ionic-angular/index";
import { BehaviorSubject } from 'rxjs';


export class Page3ServiceMock {

  page3data: Array<Page3Item> = [
    {title: 'Item 0', note: 'This is item #0', icon: 'wifi'},
    {title: 'Item 1', note: 'This is item #1', icon: 'wifi'},
    {title: 'Item 2', note: 'This is item #2', icon: 'wifi'},
    {title: 'Item 3', note: 'This is item #3', icon: 'wifi'},
    {title: 'Item 4', note: 'This is item #4', icon: 'wifi'},
    {title: 'Item 5', note: 'This is item #5', icon: 'wifi'},
    {title: 'Item 6', note: 'This is item #6', icon: 'wifi'},
    {title: 'Item 7', note: 'This is item #7', icon: 'wifi'},
    {title: 'Item 8', note: 'This is item #8', icon: 'wifi'},
    {title: 'Item 9', note: 'This is item #9', icon: 'wifi'}
  ];
  page3Subject: BehaviorSubject<Array<Page3Item>> = new BehaviorSubject(this.page3data);
}

describe('Page3 (mock service)', () => {
  let component: Page3;
  let fixture: ComponentFixture<Page3>;
  let debugElement: DebugElement;
  let listDebugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page3 ],
      imports: [
        IonicModule.forRoot(Page3)
      ],
      providers: [
        NavController,
        { provide: Page3Service, useClass: Page3ServiceMock }
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page3);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.css('.toolbar-title'));
    listDebugElement = fixture.debugElement.query(By.css('.list'));
  });

  it('should create component', () => expect(component).toBeDefined() );

  it('should have expected title text', () => {
    fixture.detectChanges();
    const title = debugElement.nativeElement;
    expect(title.innerText).toBe('Page Three');
  });

  it('should have a list of 10 items', async(() => {
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const items = listDebugElement.children.length;
      expect(items).toBe(10);
    });

  }));
});

describe('Page3 (service)', () => {
  let debugElement: DebugElement;
  let listDebugElement: DebugElement;
  let component: Page3;
  let fixture: ComponentFixture<Page3>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page3 ],
      imports: [
        IonicModule.forRoot(Page3)
      ],
      providers: [
        NavController,
        Page3Service
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page3);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.css('.toolbar-title'));
    listDebugElement = fixture.debugElement.query(By.css('.list'));
  });

  it('should create component', () => expect(component).toBeDefined() );

  it('should have expected title text', () => {
    fixture.detectChanges();
    const title = debugElement.nativeElement;
    expect(title.innerText).toBe('Page Three');
  });

  it('should have a list of 25 items', async(() => {
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const items = listDebugElement.children.length;
      expect(items).toBe(25);
    });

  }));
});
