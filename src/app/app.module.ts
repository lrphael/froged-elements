import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from "./modules/core/core.module";

import { AppComponent } from './app.component';
import { StarWarsListComponent } from './modules/star-wars/views/star-wars-list/star-wars-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StarWarsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
