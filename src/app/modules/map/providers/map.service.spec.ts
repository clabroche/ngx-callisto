import { TestBed, async } from '@angular/core/testing';

import { MapService } from './map.service';
import proj from 'ol/proj';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import Feature from 'ol/feature';
import Point from 'ol/geom/point';
import Icon from 'ol/style/icon';
import Style from 'ol/style/style';

describe('MapService', () => {
  let service: MapService;
  let httpMock: HttpTestingController;
  const dummyAddress = {
    address: { randomProperty: 'randomValue' }
  };
  const dummyEmptyAddress = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MapService]
    });
    service = TestBed.get(MapService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#convertToLonLat', () => {
    expect(service.convertTolatLong([-31, 30])).toEqual(proj.toLonLat([-31, 30]));
    expect(service.convertTolatLong(['-31', '30'])).toEqual(proj.toLonLat([-31, 30]));
  });

  it('#fromLonLat', () => {
    expect(service.fromLonLat(['-31', '30'])).toEqual(proj.fromLonLat([-31, 30]));
    expect(service.fromLonLat(['-31', '30'])).toEqual(proj.fromLonLat([-31, 30]));
  });

  it('#createStyleIcon', () => {
    const icon = { color: '#fff', src: '/assets/img/dot-marker.png'};
    const style = service.createStyleIcon(icon);
    expect(style).toEqual(new Style({ image: new Icon(icon) }));
  });


  it('#createBuildingStyleIcon', () => {
    const style = service.createBuildingStyleIcon();
    expect(style).toEqual(new Style({
      image: new Icon({
        color: '#8959A8',
        crossOrigin: 'anonymous',
        src: '/assets/img/dot-marker.png'
      })
    }));
  });

  it('#createAddressStyleIcon', () => {
    const style = service.createAddressStyleIcon();
    expect(style).toEqual(new Style({
      image: new Icon({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: '/assets/img/address-marker.png'
      })
    }));
  });

  it('#reverse', async(() => {
    const lonlat = [-31, 31];

    service.reverse(lonlat).then(address => {
      expect(address.hasOwnProperty('randomProperty')).toBeTruthy('should propagate addresses properties');
      expect(address.hasOwnProperty('longitude')).toBeTruthy('should have longitude');
      expect(address.hasOwnProperty('latitude')).toBeTruthy('should have latitude');
      expect(address.randomProperty).toEqual('randomValue');
      expect(address.longitude).toEqual(lonlat[0]);
      expect(address.latitude).toEqual(lonlat[1]);
    });

    let req = httpMock.expectOne(`http://nominatim.openstreetmap.org/reverse?format=json&lon=${lonlat[0]}&lat=${lonlat[1]}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyAddress);

    service.reverse(lonlat).then(address => {
      expect(address.hasOwnProperty('longitude')).toBeTruthy('should have longitude');
      expect(address.hasOwnProperty('latitude')).toBeTruthy('should have latitude');
      expect(address.longitude).toEqual(-31);
      expect(address.latitude).toEqual(31);
    });

    req = httpMock.expectOne(`http://nominatim.openstreetmap.org/reverse?format=json&lon=${lonlat[0]}&lat=${lonlat[1]}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyEmptyAddress);
  }));

  it('#reverseFromFeature', async(() => {
    const coordinates: [number, number] = [-31, 31];
    const lonlat: [number, number] = service.convertTolatLong([-31, 31]);
    const feature = new Feature(new Point(coordinates));

    service.reverseFromFeature(feature).then(address => {
      expect(address.hasOwnProperty('randomProperty')).toBeTruthy('should propagate addresses properties');
      expect(address.hasOwnProperty('longitude')).toBeTruthy('should have longitude');
      expect(address.hasOwnProperty('latitude')).toBeTruthy('should have latitude');
      expect(address.randomProperty).toEqual('randomValue');
      expect(address.longitude).toEqual(lonlat[0]);
      expect(address.latitude).toEqual(lonlat[1]);
    });
    const req = httpMock.expectOne(`http://nominatim.openstreetmap.org/reverse?format=json&lon=${lonlat[0]}&lat=${lonlat[1]}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyAddress);
  }));
});
