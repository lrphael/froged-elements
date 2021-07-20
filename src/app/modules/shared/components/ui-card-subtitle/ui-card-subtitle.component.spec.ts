import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCardSubtitleComponent } from './ui-card-subtitle.component';

describe('UiCardSubtitleComponent', () => {
  let component: UiCardSubtitleComponent;
  let fixture: ComponentFixture<UiCardSubtitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiCardSubtitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiCardSubtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
