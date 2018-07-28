import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CltMapComponent } from './map.component';
import { CltMapLayerComponent } from './map-layer/map-layer.component';
import { CltMapMapService } from './providers/map.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CltMapComponent,
    CltMapLayerComponent,
  ],
  exports: [
    CltMapComponent,
    CltMapLayerComponent,
  ],
  entryComponents: [CltMapLayerComponent]
})
export class CltMapModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CltMapModule,
      providers: [
        CltMapMapService
      ]
    };
  }
}
