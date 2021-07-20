import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCardActionsComponent } from './ui-card-actions.component';

describe('UiCardActionsComponent', () => {
  let component: UiCardActionsComponent;
  let fixture: ComponentFixture<UiCardActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiCardActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiCardActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
