import { NgModule } from '@angular/core';

import { StarWarsRoutingModule } from './star-wars-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LeftSideMenuComponent } from './components/left-side-menu/left-side-menu.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryPeopleComponent } from './views/category-people/category-people.component';
import { CategoryStarshipsComponent } from './views/category-starships/category-starships.component';
import { CategoryPlanetsComponent } from './views/category-planets/category-planets.component';

@NgModule({
  declarations: [
  LeftSideMenuComponent,
  CategoryListComponent,
  CategoryPeopleComponent,
  CategoryStarshipsComponent,
  CategoryPlanetsComponent],
  imports: [
    StarWarsRoutingModule,
    SharedModule
  ],
})
export class StarWarsModule { }
