import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryStarshipsComponent } from './category-starships.component';

describe('CategoryStarshipsComponent', () => {
  let component: CategoryStarshipsComponent;
  let fixture: ComponentFixture<CategoryStarshipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryStarshipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryStarshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
