import { Directive, ElementRef, HostListener } from '@angular/core';
// import { TouchGestureEventData } from "tns-core-modules/ui/gestures";
// import { AnimationCurve } from "tns-core-modules/ui/enums";

@Directive({
  selector: '[uiRipple]'
})
export class UiRippleDirective {

  private element: ElementRef;

  constructor(el: ElementRef) {
      this.element = el;
  }

  @HostListener('click', ['$event'])
  onClick($event): void {
      this.createRipple($event);
  }

  createRipple(event) {
    const button = this.element.nativeElement;

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  }

}