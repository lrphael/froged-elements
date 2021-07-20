import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StarWarsListComponent } from "./views/star-wars-list/star-wars-list.component";
import { CategoryPeopleComponent } from "./views/category-people/category-people.component";
import { CategoryPlanetsComponent } from "./views/category-planets/category-planets.component";
import { CategoryStarshipsComponent } from "./views/category-starships/category-starships.component";

const routes: Routes = [
  { 
    path: '', component:StarWarsListComponent,
    children: [
      { path: 'people', component: CategoryPeopleComponent, outlet:"category"},
      { path: 'planets', component: CategoryPlanetsComponent, outlet:"category"},
      { path: 'star-ships', component: CategoryStarshipsComponent, outlet:"category"}
    ] 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarWarsRoutingModule { }
