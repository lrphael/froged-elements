import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './views/home/home.component';

import { LeftSideMenuComponent } from './components/left-side-menu/left-side-menu.component';

@NgModule({
  declarations: [
    HomeComponent,

    LeftSideMenuComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    LeftSideMenuComponent
  ]
})
export class CoreModule { }
