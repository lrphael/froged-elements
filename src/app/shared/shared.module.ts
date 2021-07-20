import { NgModule } from '@angular/core';

import { UiRippleDirective } from './directives/ui-ripple.directive';

@NgModule({
  declarations: [
    UiRippleDirective
  ],
  exports: [
    UiRippleDirective
  ]
})
export class SharedModule { }
