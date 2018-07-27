import { TemplateRef, EventEmitter } from '@angular/core';
import Map from 'ol/map';
import Modify from 'ol/interaction/modify';
import VectorLayer from 'ol/layer/vector';
import { MapService } from '../providers/map.service';
export declare class CltMapLayerComponent {
    mapService: MapService;
    olLayer: VectorLayer;
    map: Map;
    overlays: Array<any>;
    nbFeatures: number;
    modify: Modify;
    featuremove: EventEmitter<{}>;
    constructor(mapService: MapService);
    getSource(): any;
    createLayer(): any;
    addFeature(geomOrFeature: any, opts?: {
        style?;
        infos?;
        overlay?: {
            template?: TemplateRef<any>;
            context?: any;
        };
    }): any;
    addOverlay(feature: any, infos: any, positioning?: string, offset?: number[]): any;
    overlayDisplay(overlay: any, feature: any): void;
    overlayHide(overlay: any): void;
    getFeatures(): any;
    clear(): void;
    addModify(): any;
    removeModify(): void;
    removeFeature(feature: any): void;
}
