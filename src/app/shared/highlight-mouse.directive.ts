import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {


  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = 'yellow';

  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = '';

  }

  @HostBinding('style.backgroundColor') backgroundColor!: string;

  constructor() {

   }

}
