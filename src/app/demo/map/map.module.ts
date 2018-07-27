import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefiContainersModule } from '../../modules/containers/containers.module';
import { MapComponent, MapBridgeComponent } from './map.component';
import { Sample1Component } from './sample1/sample1.component';
import { FormsModule } from '@angular/forms';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { TabViewModule } from 'primeng/tabview';
import { MapModule } from '../../modules/map/map.module';
import { DemoSDK } from '../demo-sdk.module';

@NgModule({
  imports: [
    CommonModule,
    MapModule.forRoot(),
    DemoSDK
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
