import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../../services/star-wars.service';

@Component({
  selector: 'app-category-starships',
  templateUrl: './category-starships.component.html',
  styleUrls: ['./category-starships.component.scss']
})
export class CategoryStarshipsComponent implements OnInit {

  starShips: Array<any> = [];

  constructor(private swService: StarWarsService) { }

  ngOnInit(): void {
    this.getAllStarShips();
  }

  getAllStarShips(): void {
    const getStarShips = this.swService.getAllStarShips().subscribe((data:any) => {
      this.starShips.push(data.results);
      getStarShips.unsubscribe();
    }, error => {
      getStarShips.unsubscribe();
    })
  }

}
