import { Component, OnInit, Input, ViewChild, AfterViewInit, ComponentFactoryResolver, Type } from '@angular/core';
import { DemoInterface } from '../demo.interface';
import { MapModule } from '../../modules/map/map.module';
import { SampleDirective } from '../sample.directive';
import { DemoComponent } from '../demo.component';
@Component({
  selector: 'sample-map',
  templateUrl: './map.component.html'
}) export class MapSampleComponent {
}
@Component({
  selector: 'app-map',
  templateUrl: '../demo.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent extends DemoComponent implements DemoInterface {
  name = 'Map';
  link = '/documentation/modules/MapModule.html';
  relativeModule: any = MapModule;
  sampleComponent = MapSampleComponent;
}
