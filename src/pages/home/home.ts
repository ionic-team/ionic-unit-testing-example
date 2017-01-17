import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: './home.html'
})
export class HomePage {

	title: string = "My Page";

	constructor() {

	}

	changeTitle(title){
		this.title = title;
	}

}