import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isStarWarsPage: boolean = false;

  constructor(private location: Location, private router: Router) {
    router.events.subscribe((val) => {
      if( location.path() == '/sw'){
        this.isStarWarsPage = true;
      } else {
        this.isStarWarsPage = false;
      }
    });
  }
}
