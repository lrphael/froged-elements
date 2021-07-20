import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './views/home/home.component';


@NgModule({
  declarations: [
    HomeComponent,

  ],
  imports: [
    SharedModule
  ]
})
export class CoreModule { }
