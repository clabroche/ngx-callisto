import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent, MapBridgeComponent } from './map.component';
import { Sample1Component } from './sample1/sample1.component';
import { CltMapModule } from '../../modules/map/map.module';
import { CltDemoSDKModule } from '../demo-sdk.module';

@NgModule({
  imports: [
    CommonModule,
    CltMapModule.forRoot(),
    CltDemoSDKModule
  ],
  declarations: [
    MapComponent,
    Sample1Component,
    MapBridgeComponent
  ],
  entryComponents: [
    MapBridgeComponent
  ]
})
export class MapModuleSample { }
