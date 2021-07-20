import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../../services/star-wars.service';

@Component({
  selector: 'app-category-planets',
  templateUrl: './category-planets.component.html',
  styleUrls: ['./category-planets.component.scss']
})
export class CategoryPlanetsComponent implements OnInit {

  planets: Array<any> = [];

  constructor(private swService: StarWarsService) { }

  ngOnInit(): void {
    this.getAllPlanets();
  }

  getAllPlanets(): void {
    const getPlanets = this.swService.getAllPlanets().subscribe((data:any) => {
      this.planets.push(data.results);
      getPlanets.unsubscribe();
    }, error => {
      getPlanets.unsubscribe();
    })
  }

}
