import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DefiCoreModule, DefiFormsModule, DefiNavigationsModule, DefiContainersModule } from '../../public_api';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DefiOverlayModule } from '../modules/overlay/overlay.module';
import { MapComponent } from './map/map.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DefiFormsModule,
    DefiNavigationsModule,
    DefiContainersModule,
    DefiOverlayModule,
    DefiCoreModule,
    RouterModule.forChild([
      {path: 'map', component: MapComponent}
    ])
  ],
  exports: [
    RouterModule
  ],
  declarations: [MapComponent],
})
export class DemoModule { }
