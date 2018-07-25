import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DefiOverlayModule } from '../modules/overlay/overlay.module';
import { MapComponent } from './map/map.component';
import { DefiFormsModule } from '../modules/forms/forms.module';
import { DefiNavigationsModule } from '../modules/navigations/navigations.module';
import { DefiContainersModule } from '../modules/containers/containers.module';
import { DefiCoreModule } from '../modules/core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
