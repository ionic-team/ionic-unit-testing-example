import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';

export interface Page3Item {
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
    for (let i = 1; i < 26; i++) {
      this.page3data.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: iconNames[Math.floor(Math.random() * iconNames.length)]
      });
    }
    this.page3Subject.next(this.page3data);

  }

}
