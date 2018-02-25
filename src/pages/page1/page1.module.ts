import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Page1 } from './page1';

@NgModule({
  declarations: [
    Page1,
  ],
  imports: [
    IonicPageModule.forChild(Page1),
  ],
})
export class Page1Module {}
