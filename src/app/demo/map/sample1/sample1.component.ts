import { CltMapLayerComponent } from '../../../modules/map/map-layer/map-layer.component';
import { MapService } from '../../../modules/map/providers/map.service';
import { CltMapComponent } from '../../../modules/map/map.component';
import { ViewChild, Component, OnInit } from '@angular/core';
import Point from 'ol/geom/point';
@Component({
  selector: 'sample1',
  templateUrl: './sample1.component.html',
}) export class Sample1Component implements OnInit {
  @ViewChild('addressesLayer') addressesLayer: CltMapLayerComponent;
  @ViewChild('buildingsLayer') buildingsLayer: CltMapLayerComponent;
  @ViewChild('map') map: CltMapComponent;
  constructor(private mapservice: MapService) { }
  ngOnInit() {
    for (let i = 0; i < 100; i++) {
      this.addressesLayer.addFeature(new Point(this.mapservice.fromLonLat([this.longitude(), this.latitude()])), {
        style: this.mapservice.createBuildingStyleIcon()
      });
    }
  }
  getRandomArbitrary(min, max) { return Math.random() * (max - min) + min; }
  latitude() { return this.getRandomArbitrary(47.5395, 49.0739); }
  longitude() { return this.getRandomArbitrary(3.8754, 7.3938); }
}
