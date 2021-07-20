import { NgModule } from '@angular/core';
import { HomeComponent } from './views/home/home.component';
import { UiRippleDirective } from './directives/ui-ripple.directive';

@NgModule({
  declarations: [
    HomeComponent,
    UiRippleDirective
  ],
  imports: [
  ],
})
export class CoreModule { }
