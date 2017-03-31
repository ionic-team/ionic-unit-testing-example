import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Page3 } from "../page3/page3";
import { Page3Service } from '../../providers/page3service';
import { IonicModule, NavController } from "ionic-angular/index";

describe('Page3', function () {
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
