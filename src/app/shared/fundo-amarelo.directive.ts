import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private elementRef: ElementRef,
    private renderer: Renderer2) {

    this.renderer.setStyle(elementRef.nativeElement, 'background-color', 'yellow')
   }

}
