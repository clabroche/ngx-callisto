import { Injectable } from '@angular/core';
import OlProj from 'ol/proj';
import { HttpClient } from '@angular/common/http';
import Style from 'ol/style/style';
import Icon from 'ol/style/icon';
@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) { }

  convertTolatLong(coordinates) {
    coordinates = this.transformToFloat(coordinates);
    return OlProj.transform(coordinates, 'EPSG:3857', 'EPSG:4326');
  }
  fromLonLat(lonLat) {
    lonLat = this.transformToFloat(lonLat);
    return OlProj.fromLonLat(lonLat);
  }
  private transformToFloat(coordinates) {
    return coordinates.map(coord => {
      if (typeof coord === 'string') return parseFloat(coord);
      return coord;
    });
  }
  reverse(lonlat) {
    return this.http.get(`http://nominatim.openstreetmap.org/reverse?format=json&lon=${lonlat[0]}&lat=${lonlat[1]}`)
      .toPromise()
      .then((reverse: any) => {
        if (!reverse.address) reverse.address = {};
        reverse.address.longitude = lonlat[0];
        reverse.address.latitude  = lonlat[1];
        return reverse.address;
      });
  }
  reverseFromFeature(feature) {
    const coordinates = feature.getGeometry().getCoordinates();
    return this.reverse(this.convertTolatLong(coordinates));
  }

  createStyleIcon(icon) {
    return new Style({
      image: new Icon(icon)
    });
  }

  createBuildingStyleIcon(color = '#8959A8') {
    return this.createStyleIcon({
      color: color,
      crossOrigin: 'anonymous',
      src: '/assets/img/dot-marker.png'
    });
  }

  createAddressStyleIcon() {
    return this.createStyleIcon({
      anchor: [0.5, 46],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      src: '/assets/img/address-marker.png'
    });
  }
}
