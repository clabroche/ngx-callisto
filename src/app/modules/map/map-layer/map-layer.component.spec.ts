import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CltMapLayerComponent } from './map-layer.component';
import Map from 'ol/map';
import View from 'ol/view';
import Point from 'ol/geom/point';
import { MapService } from '../providers/map.service';
import { HttpClientModule } from '@angular/common/http';
import Feature from 'ol/feature';
import Modify from 'ol/interaction/modify';

describe('CltMapLayerComponent', () => {
  let component: CltMapLayerComponent;
  let fixture: ComponentFixture<CltMapLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CltMapLayerComponent ],
      providers: [MapService],
      imports: [HttpClientModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    const map = new Map({
      view: new View({
        center: [31, -31],
        zoom: 16
      })
    });
    fixture = TestBed.createComponent(CltMapLayerComponent);
    component = fixture.componentInstance;
    component.map = map;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  it('#addFeatures', () => {
    fixture.detectChanges();
    const opts = {
      style: component.mapService.createBuildingStyleIcon(),
      infos: { test: 'test' },
    };
    const feature: any = component.addFeature(new Point([31, -31]), opts);
    expect(component.nbFeatures).toEqual(1);
    expect(component.olLayer.getSource().getFeatures().length).toEqual(1);
    expect(feature.opts).toEqual(opts);

    component.addFeature(new Feature());
    expect(component.nbFeatures).toEqual(2);
    expect(component.olLayer.getSource().getFeatures().length).toEqual(2);
  });
  it('#addOverlay', () => {
    fixture.detectChanges();
    const opts = { overlay: { context: { test: 'test' } } };
    const feature: any = component.addFeature(new Point([31, -31]), opts);
    expect(component.overlays.length).toEqual(1);
    expect(feature.hasOwnProperty('overlay')).toBeTruthy('should have overlay manipulation');
    expect(feature.overlay._open).toBeFalsy('overlay default open is false');
    feature.overlay.open();
    expect(feature.overlay._open).toBeTruthy('overlay should be open');
    feature.overlay.close();
    expect(feature.overlay._open).toBeFalsy('overlay should be close');
    feature.overlay.toggle();
    expect(feature.overlay._open).toBeTruthy('overlay should be open');
    feature.overlay.toggle();
    expect(feature.overlay._open).toBeFalsy('overlay should be close');
    component.removeFeature(feature);
    expect(component.overlays.length).toEqual(0);

    component.addFeature(new Feature(), opts);
    expect(component.overlays.length).toEqual(1);
  });
  it('#removeFeatures', () => {
    fixture.detectChanges();
    const feature = component.addFeature(new Point([31, -31]));
    expect(component.nbFeatures).toEqual(1);
    expect(component.olLayer.getSource().getFeatures().length).toEqual(1);
    component.removeFeature(feature);
    expect(component.nbFeatures).toEqual(0);
    expect(component.olLayer.getSource().getFeatures().length).toEqual(0);
  });
  it('#getFeatures', () => {
    fixture.detectChanges();
    const feature1 = component.addFeature(new Point([31, -31]));
    const feature2 = component.addFeature(new Point([31, -31]));
    const features = component.getFeatures();
    expect(features.includes(feature1)).toBeTruthy('should contain feature1');
    expect(features.includes(feature2)).toBeTruthy('should contain feature2');
  });
  it('#clear', () => {
    fixture.detectChanges();
    component.addFeature(new Point([31, -31]));
    component.addFeature(new Point([31, -31]));
    component.addFeature(new Point([31, -31]));
    component.addFeature(new Point([31, -31]));
    component.addFeature(new Point([31, -31]));
    component.addFeature(new Point([31, -31]));
    component.addFeature(new Point([31, -31]));
    component.addFeature(new Point([31, -31]));
    component.addFeature(new Point([31, -31]));

    component.clear();
    expect(component.olLayer.getSource().getFeatures().length).toEqual(0);
    expect(component.nbFeatures).toEqual(0);
    expect(component.overlays).toEqual([]);
  });
  it('#addModify', () => {
    fixture.detectChanges();
    const modify = component.addModify();
    expect(modify instanceof Modify).toBeTruthy('should return a modify object');
  });
});
