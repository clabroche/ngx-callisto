import { AfterViewInit, Component, ViewChild, ComponentFactoryResolver, ViewEncapsulation, AfterContentInit } from '@angular/core';
import { SampleDirective } from './sample.directive';

@Component({
  selector: 'app-map',
  templateUrl: './demo.component.html',
})
export class DemoComponent implements AfterContentInit {
  sampleComponent;
  @ViewChild(SampleDirective) sample: SampleDirective;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}
  ngAfterContentInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.sampleComponent);
    const viewContainerRef = this.sample.viewContainerRef;
    viewContainerRef.clear();
    viewContainerRef.createComponent(componentFactory);
  }
}
