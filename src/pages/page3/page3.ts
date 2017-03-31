import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page3Detail } from './page3-detail/page3-detail';
import { Page3Item, Page3Service } from '../../providers/page3service';

@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html'
})
export class Page3 {
  selectedItem: any;
  items: Array<Page3Item>;

  constructor(
    public navCtrl: NavController,
    public page3Service: Page3Service
  ) {}

  ngOnInit() {
    this.page3Service.page3Subject.subscribe( (items) => {
      this.items = items;
    });
  }

  itemTapped(event, item) {
    this.navCtrl.push(Page3Detail, {
      item: item
    });
  }

}
