import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { UiRippleDirective } from './directives/ui-ripple.directive';
import { UiButtonComponent } from './components/ui-button/ui-button.component';
import { UiCardComponent } from './components/ui-card/ui-card.component';
import { UiCardHeaderComponent } from './components/ui-card-header/ui-card-header.component';
import { UiCardContentComponent } from './components/ui-card-content/ui-card-content.component';
import { UiCardActionsComponent } from './components/ui-card-actions/ui-card-actions.component';
import { UiCardTitleComponent } from './components/ui-card-title/ui-card-title.component';
import { UiCardSubtitleComponent } from './components/ui-card-subtitle/ui-card-subtitle.component';

@NgModule({
  declarations: [
    UiRippleDirective,
    UiButtonComponent,
    UiCardComponent,
    UiCardHeaderComponent,
    UiCardContentComponent,
    UiCardActionsComponent,
    UiCardTitleComponent,
    UiCardSubtitleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    HttpClientModule,

    UiRippleDirective,
    UiButtonComponent,
    UiCardComponent,
    UiCardHeaderComponent,
    UiCardContentComponent,
    UiCardActionsComponent,
    UiCardTitleComponent,
    UiCardSubtitleComponent
  ]
})
export class SharedModule { }
