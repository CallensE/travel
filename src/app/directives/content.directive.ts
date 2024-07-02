import { Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appContent]',
  standalone: true
})
export class ContentDirective implements OnInit{
  @Input('appContent') input = 'Title';
  @Output('appContentChange') output = new EventEmitter<string>();
  element!: HTMLElement;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.element = this.el.nativeElement;
    this.element.contentEditable = 'true';
    this.element.innerText = this.input;
  }

  @HostListener('input')
  onInputChange() {
    this.input = this.element.innerText;
    this.output.emit(this.input);
  }

}
