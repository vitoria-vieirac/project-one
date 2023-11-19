import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHightLight]'
})
export class HightLightDirective {

  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = 'yellow';

  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = '';

  }

  @HostBinding('style.backgroundColor') backgroundColor!: string;

  @Input() defaultColor: string = 'white';
  @Input() highLightColor: string = 'yellow';

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor
  }

}
