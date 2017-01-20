import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { HomePage } from './home';

let comp: HomePage;
let fixture: ComponentFixture<HomePage>;
let de: DebugElement;
let el: HTMLElement;

describe('Page: Home Page', () => {

	beforeEach(async(() => {

		TestBed.configureTestingModule({

			declarations: [MyApp, HomePage],
			
			providers: [

			],

			imports: [
				IonicModule.forRoot(MyApp)
			]

		}).compileComponents();

	}));

	beforeEach(() => {

		fixture = TestBed.createComponent(HomePage);
		comp 	= fixture.componentInstance;

	});

	afterEach(() => {
		fixture.destroy();
		comp = null;
		de = null;
		el = null;
	});

	it('is created', () => {

		expect(fixture).toBeTruthy();
		expect(comp).toBeTruthy();

	});

	it('initialises with a title of My Page', () => {
		expect(comp['title']).toEqual('My Page');
	});

	it('can set the title to a supplied value', () => {

		de = fixture.debugElement.query(By.css('ion-title'));
		el = de.nativeElement;	

		comp.changeTitle('Your Page');
		fixture.detectChanges();
		expect(comp['title']).toEqual('Your Page');
		expect(el.textContent).toContain('Your Page');

	});

});