import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCardTitleComponent } from './ui-card-title.component';

describe('UiCardTitleComponent', () => {
  let component: UiCardTitleComponent;
  let fixture: ComponentFixture<UiCardTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiCardTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiCardTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
