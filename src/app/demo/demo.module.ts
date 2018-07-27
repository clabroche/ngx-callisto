import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DefiOverlayModule } from '../modules/overlay/overlay.module';
import { DefiFormsModule } from '../modules/forms/forms.module';
import { DefiNavigationsModule } from '../modules/navigations/navigations.module';
import { DefiContainersModule } from '../modules/containers/containers.module';
import { DefiCoreModule } from '../modules/core/core.module';
import { HomeComponent } from './home/home.component';
import { TabViewModule } from 'primeng/tabview';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { SampleDirective } from './sample.directive';
import { DemoComponent } from './demo.component';
import { MapModule } from '../modules/map/map.module';
import { MapModuleSample } from './map/map.module';
import { MapComponent } from './map/map.component';
import { DemoSDK } from './demo-sdk.module';
@NgModule({
  imports: [
    CommonModule,
    MapModuleSample,
    DemoSDK,
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
    HomeComponent,
    DemoComponent,
  ],
  entryComponents: []
})
export class DemoModule { }
