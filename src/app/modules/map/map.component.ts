import {
  Component,
  EventEmitter,
  Input,
  ViewChild,
  ElementRef,
  AfterViewChecked,
  Output,
  ContentChildren,
  QueryList,
  ViewContainerRef,
  ComponentFactoryResolver,
  AfterContentInit,
  Renderer2} from '@angular/core';
import Map from 'ol/map';
import View from 'ol/view';
import Layer from 'ol/layer/layer';
import Tile from 'ol/layer/tile';
import OSM from 'ol/source/osm';
import * as uuid from 'uuid/v4';
import * as Geocoder from 'ol-geocoder';
import { Subject } from 'rxjs';
import { MapLayerComponent } from './map-layer/map-layer.component';
import { MapService } from './providers/map.service';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewChecked, AfterContentInit {
  map: Map;
  initialized = false;
  is_init = new Subject();
  geocoderControl;
  @Input() id = 'map-' + uuid();
  @Input() height: string;
  @Input() center: {longitude?; latitude?} = {};
  @Input() points: Array<any>;
  @Input() defaultLayer: Layer;
  @Input() zoom: number;
  @Output() olclick = new EventEmitter();
  @Output() olchange = new EventEmitter();
  @Output() oldblclick = new EventEmitter();
  @Output() olmoveend = new EventEmitter();
  @Output() olmovestart = new EventEmitter();
  @Output() olpointerdrag = new EventEmitter();
  @Output() olpointermove = new EventEmitter();
  @Output() olpostcompose = new EventEmitter();
  @Output() olpostrender = new EventEmitter();
  @Output() olprecompose = new EventEmitter();
  @Output() olpropertychange = new EventEmitter();
  @Output() olsingleclick = new EventEmitter();

  @Output() geocoder = new EventEmitter();
  @Output() featuremove = new EventEmitter();
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('mapContainer') mapContainer: ElementRef;
  @ViewChild('layersContainer', { read: ViewContainerRef }) layersContainer;
  @ContentChildren(MapLayerComponent) layersComponent: QueryList<MapLayerComponent>;

  constructor(private mapService: MapService, private componentFactoryResolver: ComponentFactoryResolver, private renderer: Renderer2 ) {}
  ngAfterContentInit() {
    this.map = new Map({
      layers: [
        this.defaultLayer ? this.defaultLayer : new Tile({ source: new OSM() })
      ],
      view: new View()
    });
    this.eventManager();
    this.layersComponent.map(layer => {
      this.addLayer(layer);
    });
  }
  ngAfterViewChecked() {
    return new Promise((resolve, reject) => {
      if (this.initialized || !document.getElementById(this.id)) return;
      this.initialized = true;
      if (!this.center.latitude || !this.center.longitude) {
        navigator.geolocation.getCurrentPosition(({coords}) => {
          this.center.latitude = coords.latitude;
          this.center.longitude = coords.longitude;
          this.init().then(resolve).catch(reject);
        }, () => {
          this.center.latitude = 48.8585535;
          this.center.longitude = 2.2940681;
          this.init().then(resolve).catch(reject);
        });
      } else this.init().then(resolve).catch(reject);
    });
  }

  getView() {
    return this.map.getView();
  }

  getCenter() {
    return this.getView().getCenter();
  }

  getCenterToLonLat() {
    return this.mapService.convertTolatLong(this.getCenter());
  }

  setCenter(coordinate, zoom?) {
    this.getView().setCenter(coordinate);
    this.getView().setZoom(zoom || this.zoom || 10);
    // if (this.zoom) this.zoom = undefined;
    return coordinate;
  }

  setCenterFromLonLat(coordinate) {
    return this.setCenter(this.mapService.fromLonLat(coordinate));
  }

  addLayer(component?: MapLayerComponent) {
    if (!component) {
      const layerComponent = this.componentFactoryResolver.resolveComponentFactory(MapLayerComponent);
      component = layerComponent.create(this.layersContainer).instance;
    }
    component.map = this.map;
    this.layersComponent.reset([...this.layersComponent.toArray(), component]);
    this.map.addLayer(component.olLayer);
    component.featuremove.subscribe(_ => {
      this.featuremove.emit();
    });
    return component.olLayer;
  }

  initGeocoder(featureStyle?) {
    this.geocoderControl = new Geocoder('nominatim', {
      provider: 'osm',
      lang: 'fr-FR',
      autoComplete: true,
      autoCompleteMinLength: 4,
      placeholder: 'Rechercher une adresse',
      targetType: 'text-input',
      featureStyle,
      limit: 5,
      countrycodes: 'fr'
    });
    if (this.map) this.map.addControl(this.geocoderControl);
    this.geocoderControl.on('addresschosen', (evt) => {
      this.geocoder.emit(evt);
    });
    return this.geocoderControl;
  }
  removeGeocoder() {
    if (!this.map) return;
    this.map.removeControl(this.geocoderControl);
    this.map.removeLayer(this.geocoderControl.getLayer());
  }

  init() {
    if (this.height) {
      const elem = this.mapContainer.nativeElement;
      this.renderer.setStyle(elem, 'paddingTop', 0);
      this.renderer.setStyle(elem, 'position', 'relative');
      this.renderer.setStyle(elem, 'height', this.height);
    }

    return new Promise((resolve, reject) => {
      this.map.renderSync();
      if (!this.getCenter())
        this.setCenterFromLonLat([this.center.longitude, this.center.latitude]);
      setTimeout(() => {
        this.map.setTarget(this.mapElement.nativeElement);
        resolve();
      }, 0);
    });
  }
  eventManager() {
    this.map.on('singleclick', (event: any) => {
      event.features = this.map.getFeaturesAtPixel(event.pixel);
      if (event.features)
        event.features.map(f => { if (f.hasOwnProperty('overlay')) f.overlay.toggle(); });
      this.olsingleclick.emit(event);
    });
    const events = [
      'change',
      'click',
      'dblclick',
      'moveend',
      'movestart',
      'pointerdrag',
      'pointermove',
      'postcompose',
      'postrender',
      'precompose',
      'propertychange',
    ];
    events.forEach(ev => {
      const output = 'ol' + ev;
      this.map.on(ev, (event: any) => {
        if (event.pixel) event.features = this.map.getFeaturesAtPixel(event.pixel);
        this[output].emit(event);
      });
    });
  }
}
