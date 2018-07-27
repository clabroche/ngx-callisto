import { Directive, OnDestroy, Input, AfterViewChecked, ElementRef, Renderer2, OnInit} from '@angular/core';

/**
 * Load differents directive with an array of key value
 * @example
 * <input type="text" [formControlName]="'hello'" [validators]="form.controls['hello']"/>
 */
@Directive({
  selector: '[defi-show-password]',
})
export class CltShowPasswordDirective implements OnInit {

  /**
   * Load some dependencies
   */
  constructor(private renderer: Renderer2, private hostElement: ElementRef) {}

  ngOnInit(): void {
    const container = this.renderer.createElement('div');
    this.renderer.setStyle(container, 'position', 'relative');
    const div = this.renderer.createElement('i');
    this.renderer.addClass(div, 'fa');
    this.renderer.addClass(div, 'fa-eye-slash');
    this.renderer.addClass(div, 'toggle-eye');
    this.renderer.setStyle(div, 'position', 'absolute');
    this.renderer.setStyle(div, 'top', 0);
    this.renderer.setStyle(div, 'right', 0);
    this.renderer.setStyle(div, 'display', 'inherit');
    this.renderer.setStyle(div, 'cursor', 'pointer');

    this.renderer.listen(div, 'click', event => {
      const input = this.hostElement.nativeElement;
      if (input.type === 'password') {
        input.type = 'text';
        this.renderer.addClass(div, 'fa-eye');
        this.renderer.removeClass(div, 'fa-eye-slash');
      } else {
        input.type = 'password';
        this.renderer.removeClass(div, 'fa-eye');
        this.renderer.addClass(div, 'fa-eye-slash');
      }
    });

    const parent = this.hostElement.nativeElement.parentNode;
    this.renderer.insertBefore(parent, container, this.renderer.nextSibling(this.hostElement.nativeElement));
    this.renderer.appendChild(container, this.hostElement.nativeElement);
    this.renderer.appendChild(container, div);
    // this.renderer.removeChild(parent,this.hostElement.nativeElement)
  }

}
