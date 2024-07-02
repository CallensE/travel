import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  @Input('appHighlight') color: string = '';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.style.background = this.color;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.background = 'lightblue';
  }
}
