import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./modules/core/views/home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'sw',
    loadChildren: () =>
    import('./modules/star-wars/start-wars.module').then((module) => module.StarWarsModule),
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
