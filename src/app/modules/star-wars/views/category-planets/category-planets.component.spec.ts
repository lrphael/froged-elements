import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryPlanetsComponent } from './category-planets.component';

describe('CategoryPlanetsComponent', () => {
  let component: CategoryPlanetsComponent;
  let fixture: ComponentFixture<CategoryPlanetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryPlanetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryPlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
