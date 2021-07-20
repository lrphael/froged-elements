import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[uiRipple]'
})
export class UiRippleDirective {

  private element: ElementRef;
  private buttonElement: HTMLButtonElement;

  constructor(
    private el: ElementRef
  ) {
      this.element = el;
  }

  @HostListener('mousedown', ['$event'])
  onClickUp($event): void {
    this.buttonElement = this.element.nativeElement;
    if (this.buttonElement.classList[0] != 'btn-disabled') {
      this.removeRipple();
      this.createRipple($event);
    }
  }

  createRipple(event):void {
    const diameter = Math.max(this.buttonElement.clientWidth, this.buttonElement.clientHeight);
    const radius = diameter / 2;
    const circle = this.defineCircleStyle(event, radius, diameter);

    circle.classList.add(this.buttonElement.classList[0] == 'btn-basic' ? 'dark' : 'white');
    this.buttonElement.appendChild(circle);
  }

  defineCircleStyle(event, radius, diameter): HTMLSpanElement {
    const circle = document.createElement("span");
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - this.buttonElement.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - this.buttonElement.offsetTop - radius}px`;
    circle.classList.add("ripple");
    return circle;
  }

  removeRipple(): void {
    const rippleArray = document.getElementsByClassName("ripple") as HTMLCollection;
    if (rippleArray) {
      for (let i = 0; i < rippleArray.length; i++) {
        const ripple = rippleArray[i] as HTMLElement;
        ripple.remove();
      }
    }
  }

}