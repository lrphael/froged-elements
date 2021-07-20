import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiRippleDirective } from './directives/ui-ripple.directive';
import { UiButtonComponent } from './components/ui-button/ui-button.component';

@NgModule({
  declarations: [
    UiRippleDirective,
    UiButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    UiRippleDirective,
    UiButtonComponent
  ]
})
export class SharedModule { }
