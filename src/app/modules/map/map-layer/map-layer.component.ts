import { Component, TemplateRef, Output, EventEmitter } from '@angular/core';
import Map from 'ol/map';
import Modify from 'ol/interaction/modify';
import Overlay from 'ol/overlay';
import VectorSource from 'ol/source/vector';
import VectorLayer from 'ol/layer/vector';
import Feature from 'ol/feature';
import * as v4 from 'uuid/v4';
import { MapService } from '../providers/map.service';
@Component({
  selector: 'clt-map-layer',
  templateUrl: './map-layer.component.html',
  styleUrls: ['./map-layer.component.scss']
})
export class CltMapLayerComponent {

  olLayer: VectorLayer;
  map: Map;
  overlays: Array<any> = [];
  nbFeatures = 0;
  modify: Modify;
  @Output() featuremove = new EventEmitter();

  constructor(public mapService: MapService) {
    this.createLayer();
  }

  getSource() {
    return this.olLayer ? this.olLayer.getSource() : undefined;
  }

  createLayer() {
    const layer = new VectorLayer({
      source: new VectorSource()
    });
    this.olLayer = layer;
    return this.olLayer;
  }
  addFeature(geomOrFeature, opts?: {
    style?,
    infos?,
    overlay?: {
      template?: TemplateRef<any>,
      context?: any
    }
  }) {
    if (geomOrFeature instanceof Feature) {
      this.olLayer.getSource().addFeature(geomOrFeature);
      if (opts && opts.overlay) this.addOverlay(geomOrFeature, opts.overlay);
      this.nbFeatures++;
      return geomOrFeature;
    }
    const newFeature: any = new Feature({
      geometry: geomOrFeature,
    });
    newFeature.on('change', ev => {
      this.featuremove.emit(ev);
      if (ev.target.hasOwnProperty('overlay') && ev.target.overlay._open)
        ev.target.overlay.open();
    });
    newFeature.opts = opts || {};
    if (opts && opts.style) newFeature.setStyle(opts.style);
    if (opts && opts.infos) newFeature.setProperties(opts.infos);
    if (opts && opts.overlay) this.addOverlay(newFeature, opts.overlay);
    this.olLayer.getSource().addFeature(newFeature);
    this.nbFeatures++;
    return newFeature;
  }

  addOverlay(feature, infos, positioning = 'bottom-center', offset = [0, -25]) {
    const uuid = v4();
    infos.uuid = uuid;
    this.overlays.push(infos);
    const popup = new Overlay({
      positioning,
      stopEvent: true,
      offset: offset
    });
    const overlay: any = {};
    overlay.opts = infos;
    overlay.instance = popup;
    overlay.open = () => {
      overlay._open = true;
      this.overlayDisplay(popup, feature);
    };
    overlay.close = () => {
      overlay._open = false;
      this.overlayHide(popup);
    };
    overlay.toggle = () => {
      overlay._open ? overlay.close() : overlay.open();
    };
    feature.overlay = overlay;
    setTimeout(() => {
      popup.setElement(document.getElementById(uuid));
      this.map.addOverlay(popup);
    }, 0);
    return popup;
  }


  overlayDisplay(overlay, feature) {
    overlay.setPosition(feature.getGeometry().getCoordinates());
  }
  overlayHide(overlay) {
    overlay.setPosition(undefined);
  }


  getFeatures() {
    return this.olLayer ? this.olLayer.getSource().getFeatures() : undefined;
  }
  clear() {
    if (this.olLayer) {
      this.olLayer.getSource().clear();
      this.nbFeatures = 0;
      this.overlays = [];
    }
  }
  addModify() {
    this.modify = new Modify({ source: this.olLayer.getSource() });
    if (this.map) this.map.addInteraction(this.modify);
    return this.modify;
  }
  removeModify() {
    if (this.map) this.map.removeInteraction(this.modify);
    this.modify = undefined;
  }

  removeFeature(feature) {
    if (feature.hasOwnProperty('overlay')) {
      const i = this.overlays.indexOf(feature.overlay.opts);
      this.overlays.splice(i, 1);
    }
    if (this.olLayer) this.olLayer.getSource().removeFeature(feature);
    this.nbFeatures--;
  }
}
