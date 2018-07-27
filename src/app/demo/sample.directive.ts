import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[sample]'
})
export class SampleDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
