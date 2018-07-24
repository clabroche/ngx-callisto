import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { MapLayerComponent } from './map-layer/map-layer.component';
import { MapService } from './providers/map.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MapComponent,
    MapLayerComponent,
  ],
  exports: [
    MapComponent,
    MapLayerComponent,
  ],
  entryComponents: [MapLayerComponent]
})
export class MapModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MapModule,
      providers: [
        MapService
      ]
    };
  }
}
