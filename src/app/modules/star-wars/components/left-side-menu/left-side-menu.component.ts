import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'left-side-menu',
  templateUrl: './left-side-menu.component.html',
  styleUrls: ['./left-side-menu.component.scss']
})
export class LeftSideMenuComponent {

  constructor(private router: Router) { }

  
  openPeopleCategory(): void {
    const url = this.router.serializeUrl(
      this.router.createUrlTree(
        ['sw', { outlets: { category: 'people' } }]
      )
    );
    this.router.navigateByUrl(url);
  }

  openPlanetsCategory(): void {
    const url = this.router.serializeUrl(
      this.router.createUrlTree(
        ['sw', { outlets: { category: 'planets' } }]
      )
    );
    this.router.navigateByUrl(url);
  }

  openStarShipCategory(): void {
    const url = this.router.serializeUrl(
      this.router.createUrlTree(
        ['sw', { outlets: { category: 'star-ships' } }]
      )
    );
    this.router.navigateByUrl(url);
  }


}
