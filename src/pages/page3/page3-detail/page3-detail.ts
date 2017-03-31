import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Page3Item } from '../../../providers/page3-service/page3-service';

@Component({
  selector: 'page3-detail',
  templateUrl: 'page3-detail.html'
})
export class Page3Detail {
  selectedItem: Page3Item;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams
    ) {
      this.selectedItem = navParams.get('item');
    }

}
