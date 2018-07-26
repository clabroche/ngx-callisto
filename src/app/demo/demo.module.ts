import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DefiOverlayModule } from '../modules/overlay/overlay.module';
import { MapComponent, MapSampleComponent } from './map/map.component';
import { DefiFormsModule } from '../modules/forms/forms.module';
import { DefiNavigationsModule } from '../modules/navigations/navigations.module';
import { DefiContainersModule } from '../modules/containers/containers.module';
import { DefiCoreModule } from '../modules/core/core.module';
import { HomeComponent } from './home/home.component';
import { TabViewModule } from 'primeng/tabview';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { SampleDirective } from './sample.directive';
import { DemoComponent } from './demo.component';
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
    TabViewModule,
    CodemirrorModule,
    RouterModule.forChild([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'map', component: MapComponent },
    ])
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    MapComponent,
    HomeComponent,
    SampleDirective,
    MapSampleComponent,
    DemoComponent
  ],
  entryComponents: [MapSampleComponent]
})
export class DemoModule { }
