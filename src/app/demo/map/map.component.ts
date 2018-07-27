import { Component } from '@angular/core';
import { DemoInterface } from '../demo.interface';
import { MapModule } from '../../modules/map/map.module';
import { DemoComponent } from '../demo.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapBridgeComponent {
  sample1 = require('./sample1/sample1');
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
  sampleComponent = MapBridgeComponent;
}
