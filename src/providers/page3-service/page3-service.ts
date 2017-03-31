import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';

export class Page3Item {
  title: string;
  note: string;
  icon: string;
}

const iconNames: string[] = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

@Injectable()
export class Page3Service {
  page3data: Array<Page3Item>;
  page3Subject: BehaviorSubject<Array<Page3Item>> = new BehaviorSubject([]);

  constructor() {
    this.createDataForService();
  }

  private createDataForService() {
    this.page3data = [];
    for (let i = 1; i <= 25; i++) {
      let item = new Page3Item();
      item.title = 'Item ' + i;
      item.note = 'This is item #' + i;
      item.icon = iconNames[Math.floor(Math.random() * iconNames.length)];
      this.page3data.push(item);
    }
    this.page3Subject.next(this.page3data);

  }

}
