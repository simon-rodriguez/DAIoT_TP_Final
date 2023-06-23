import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorBoton]'
})
export class ColorBotonDirective {

  constructor(private el:ElementRef) { }

  @HostListener ('mouseenter') onMouseEnter() {
    this.changeColor('red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor('transparent');
  }

  private changeColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
