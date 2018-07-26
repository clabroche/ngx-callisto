import { AfterViewInit, Component, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { SampleDirective } from './sample.directive';

@Component({
  selector: 'app-map',
  templateUrl: './demo.component.html',
})
export class DemoComponent implements AfterViewInit {
  sampleComponent;
  @ViewChild(SampleDirective) sample: SampleDirective;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}
  ngAfterViewInit() {
    console.log(this.sample);

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.sampleComponent);

    const viewContainerRef = this.sample.viewContainerRef;
    viewContainerRef.clear();

    viewContainerRef.createComponent(componentFactory);

  }
}
