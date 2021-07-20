import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryPeopleComponent } from './category-people.component';

describe('CategoryPeopleComponent', () => {
  let component: CategoryPeopleComponent;
  let fixture: ComponentFixture<CategoryPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryPeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
