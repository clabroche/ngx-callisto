import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo.component';
import { MapModuleSample } from './map/map.module';
import { MapComponent } from './map/map.component';
import { CltDemoSDKModule } from './demo-sdk.module';
@NgModule({
  imports: [
    CommonModule,
    MapModuleSample,
    CltDemoSDKModule,
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
})
export class DemoModule { }
