import { Directive, ElementRef, Input, Renderer2, AfterViewInit, ChangeDetectorRef } from '@angular/core';
@Directive({
  selector: '[defiDisplayItem]',
  exportAs: 'defiDisplayItem'
})
export class DefiDisplayItemDirective implements AfterViewInit {
  @Input() name;
  display = true;
  storage: string;

  constructor(public elem: ElementRef, private renderer: Renderer2, private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    if (this.name && this.storage) {
      const display = JSON.parse(window.localStorage.getItem(`display`));
      if (
        display &&
        display.hasOwnProperty([this.storage]) &&
        display[this.storage].hasOwnProperty([this.name]) &&
        display[this.storage][this.name] !== undefined &&
        display[this.storage][this.name] !== null) {
        this.display = display[this.storage][this.name];
      }
    }
    this.cdr.detectChanges();
    this.toggle({checked: this.display});
  }
  toggle({ checked }) {
    this.display = checked;
    if (checked) this.renderer.setStyle(this.elem.nativeElement, 'display', 'initial');
    else this.renderer.setStyle(this.elem.nativeElement, 'display', 'none');
    if (this.name && this.storage) {
      let display = JSON.parse(window.localStorage.getItem(`display`));
      if (!display) {
        display = {};
        display[this.storage] = {};
      }
      display[this.storage][this.name] = checked;
      window.localStorage.setItem(`display`, JSON.stringify(display));
    }
  }
}
