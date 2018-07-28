import { HttpClient } from '@angular/common/http';
export declare class CltMapMapService {
    private http;
    constructor(http: HttpClient);
    convertTolatLong(coordinates: any): any;
    fromLonLat(lonLat: any): any;
    private transformToFloat(coordinates);
    reverse(lonlat: any): Promise<any>;
    reverseFromFeature(feature: any): Promise<any>;
    createStyleIcon(icon: any): any;
    createBuildingStyleIcon(color?: string): any;
    createAddressStyleIcon(): any;
}
