import { NgModule } from '@angular/core';

import { StarWarsRoutingModule } from './star-wars-routing.module';
import { SharedModule } from '../shared/shared.module';

import { CategoryListComponent } from './components/category-list/category-list.component';
import { LeftSideMenuComponent } from "./components/left-side-menu/left-side-menu.component";

import { StarWarsListComponent } from './views/star-wars-list/star-wars-list.component';
import { CategoryPeopleComponent } from './views/category-people/category-people.component';
import { CategoryStarshipsComponent } from './views/category-starships/category-starships.component';
import { CategoryPlanetsComponent } from './views/category-planets/category-planets.component';

@NgModule({
  declarations: [
    StarWarsListComponent,
    CategoryPeopleComponent,
    CategoryStarshipsComponent,
    CategoryPlanetsComponent,

    CategoryListComponent,
    LeftSideMenuComponent
  ],
  imports: [
    StarWarsRoutingModule,
    SharedModule
  ],
})
export class StarWarsModule { }
