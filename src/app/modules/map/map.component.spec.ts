import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CltMapComponent } from './map.component';
import OlProj from 'ol/proj';
import Layer from 'ol/layer/layer';
import { HttpClientModule } from '@angular/common/http';
import View from 'ol/view';
import { CltMapLayerComponent } from '../map/map-layer/map-layer.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

describe('CltMapComponent', () => {
  let component: CltMapComponent;
  let fixture: ComponentFixture<CltMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [CltMapComponent, CltMapLayerComponent]
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [CltMapLayerComponent],
      }
    }).compileComponents();
  }));

  beforeEach(() => {
    spyOn(navigator.geolocation, 'getCurrentPosition').and.callFake(function () {
      const position = { coords: { latitude: 32, longitude: -96 } };
      arguments[0](position);
    });
    fixture = TestBed.createComponent(CltMapComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(component.hasOwnProperty('id')).toBeTruthy();
    expect(component.hasOwnProperty('initialized')).toBeTruthy();
    expect(component.hasOwnProperty('center')).toBeTruthy();
    expect(component.center.hasOwnProperty('longitude')).toBeTruthy();
    expect(component.center.hasOwnProperty('latitude')).toBeTruthy();
    const map = fixture.debugElement.query(By.css('#' + component.id));
    expect(map).toBeTruthy();
    const [longitudeCenter, latitudeCenter] = component.getCenterToLonLat();
    expect(longitudeCenter).toEqual(component.center.longitude);
    expect(latitudeCenter).toEqual(component.center.latitude);
  });

  it('should init olmap', async() => {
    fixture.detectChanges();
    await fixture.whenStable();
    const mapContainer = fixture.debugElement.query(By.css('#' + component.id)).nativeElement;
    expect(mapContainer.childElementCount > 0).toBeTruthy();
  });
  it('#getView', () => {
    fixture.detectChanges();
    const view = component.getView();
    expect(view instanceof View);
  });

  it('#setCenter, #setCenterFromLonLat', () => {
    fixture.detectChanges();
    let coordinate = component.setCenterFromLonLat([31, -31]);
    expect(Math.round(OlProj.toLonLat(coordinate)[0])).toEqual(31);
    expect(Math.round(OlProj.toLonLat(coordinate)[1])).toEqual(-31);
    expect(coordinate).toEqual(component.getCenter());

    coordinate = component.setCenter([31, -31]);
    expect(coordinate).toEqual([31, -31]);
    expect(coordinate).toEqual(component.getCenter());
  });

  it('#addLayer', () => {
    fixture.detectChanges();
    const layer = component.addLayer();
    expect(layer instanceof Layer).toBeTruthy();
  });
  describe('should set correct size', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(CltMapComponent);
      component = fixture.componentInstance;
    });
    it('on height auto', () => {
      component.height = 'auto';
      fixture.detectChanges();
      expect(component.height).toEqual('auto');
    });
    it('on height 130px', () => {
      component.height = '130px';
      fixture.detectChanges();
      expect(component.height).toEqual('130px');
    });
    it('on nothing', async () => {
      fixture.detectChanges();
      await fixture.whenStable();
      const nativeElement = component.mapElement.nativeElement;
      expect(component.height).toEqual(undefined);
      expect(nativeElement.offsetHeight).toEqual(Math.round(nativeElement.offsetWidth / 1.777777778));
    });
  });
});
