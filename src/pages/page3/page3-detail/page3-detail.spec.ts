import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { IonicModule, NavController, NavParams } from "ionic-angular/index";
import { Page3Detail } from './page3-detail';

class NavParamsMock {
  data = {
    item: {title: 'Item 8', note: 'This is item #8', icon: 'wifi'}
  };

  get(param){
    return this.data[param];
  }
}

describe('Page3 (mock service)', () => {
  let component: Page3Detail;
  let fixture: ComponentFixture<Page3Detail>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page3Detail ],
      imports: [
        IonicModule.forRoot(Page3Detail)
      ],
      providers: [
        NavController,
        { provide: NavParams, useClass: NavParamsMock }
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page3Detail);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.css('.toolbar-title'));
  });

  it('should create component', () => expect(component).toBeDefined() );

  it('should have expected title text', () => {
    fixture.detectChanges();
    const title = debugElement.nativeElement;
    expect(title.innerText).toBe('Item 8');
  });
});
