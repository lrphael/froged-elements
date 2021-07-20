import { Component, OnInit } from '@angular/core';

import { StarWarsService } from "../../services/star-wars.service";

@Component({
  selector: 'app-category-people',
  templateUrl: './category-people.component.html',
  styleUrls: ['./category-people.component.scss']
})
export class CategoryPeopleComponent implements OnInit {

  people: Array<any> = [];

  constructor(private swService: StarWarsService) { }

  ngOnInit(): void {
    this.getAllPeople();
  }

  getAllPeople(): void {
    const getPeople = this.swService.getAllPeople().subscribe((data:any) => {
      this.people.push(data.results);
      getPeople.unsubscribe();
    }, error => {
      getPeople.unsubscribe();
    })
  }

}
