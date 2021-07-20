import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.scss']
})
export class UiButtonComponent implements OnInit {

  @Input() disabled: boolean = false;
  @Input() color: '' | 'primary' | 'accent' | 'warn';

  buttonClass: string;

  constructor() { }

  ngOnInit(): void {
    this.applyColorClass();
  }

  applyColorClass(): void {
    if (this.disabled) {
      this.buttonClass = 'btn-disabled';
    } else {
      switch (this.color) {
        case 'primary':
          this.buttonClass = 'btn-primary'
          break;
        case 'accent':
          this.buttonClass = 'btn-accent'
          break;
        case 'warn':
          this.buttonClass = 'btn-warn'
          break;
        default:
          this.buttonClass = 'btn-basic'
          break;
      }
    }
  }

}
