import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleCodeComponent } from './sample-code/sample-code.component';
import { DefiContainersModule } from '../modules/containers/containers.module';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { TabViewModule } from 'primeng/tabview';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DefiFormsModule } from '../modules/forms/forms.module';
import { DefiCoreModule } from '../modules/core/core.module';
import { DefiNavigationsModule } from '../modules/navigations/navigations.module';
import { DefiOverlayModule } from '../modules/overlay/overlay.module';
import { SampleDirective } from './sample.directive';

@NgModule({
  imports: [
    CommonModule,
    DefiContainersModule,
    CodemirrorModule,
    FormsModule,
    TabViewModule,
    ReactiveFormsModule,
    FormsModule,
    DefiFormsModule,
  ],
  declarations: [
    SampleCodeComponent,
    SampleDirective,
  ],
  exports: [
    SampleCodeComponent,
    SampleDirective,
    DefiContainersModule,
    CodemirrorModule,
    FormsModule,
    TabViewModule,
    ReactiveFormsModule,
    FormsModule,
    DefiFormsModule,
    DefiNavigationsModule,
    DefiOverlayModule,
    DefiCoreModule,
  ]
})
export class DemoSDK { }
