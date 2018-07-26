import { Component, ViewChildren, OnInit, AfterViewInit } from '@angular/core';
import { DemoInterface } from '../demo.interface';
import { MapModule } from '../../modules/map/map.module';
import { DemoComponent } from '../demo.component';
import Point from 'ol/geom/point';
import { CltMapLayerComponent } from '../../modules/map/map-layer/map-layer.component';
import { MapService } from '../../modules/map/providers/map.service';
@Component({
  selector: 'sample-map',
  templateUrl: './map.component.html',
}) export class MapSampleComponent implements AfterViewInit {
  @ViewChildren('addressesLayer') addressesLayer: CltMapLayerComponent;
  @ViewChildren('buildingsLayer') buildingsLayer: CltMapLayerComponent;
  constructor(private mapservice: MapService) {}
  ngAfterViewInit() {
    this.addressesLayer.addFeature(new Point([this.latitude, this.longitude]), {
      style: this.mapservice.createAddressStyleIcon()
    });
  }
  getRandomArbitrary(min, max) {return Math.random() * (max - min) + min; }
  latitude() {this.getRandomArbitrary(47.5395, 49.0739); }
  longitude() {this.getRandomArbitrary(3.8754, 7.3938); }
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
