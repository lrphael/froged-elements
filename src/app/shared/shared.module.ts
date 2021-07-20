import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiRippleDirective } from './directives/ui-ripple.directive';
import { UiButtonComponent } from './components/ui-button/ui-button.component';
import { UiCardComponent } from './components/ui-card/ui-card.component';

@NgModule({
  declarations: [
    UiRippleDirective,
    UiButtonComponent,
    UiCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    UiRippleDirective,
    UiButtonComponent,
    UiCardComponent
  ]
})
export class SharedModule { }
