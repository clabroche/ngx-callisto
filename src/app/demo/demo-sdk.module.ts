import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleCodeComponent } from './sample-code/sample-code.component';
import { CltContainersModule } from '../modules/containers/containers.module';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { TabViewModule } from 'primeng/tabview';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CltFormsModule } from '../modules/forms/forms.module';
import { CltCoreModule } from '../modules/core/core.module';
import { CltNavigationsModule } from '../modules/navigations/navigations.module';
import { CltOverlayModule } from '../modules/overlay/overlay.module';
import { SampleDirective } from './sample.directive';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    CltContainersModule,
    CodemirrorModule,
    FormsModule,
    TabViewModule,
    ReactiveFormsModule,
    FormsModule,
    CltFormsModule,
    HttpClientModule,
  ],
  declarations: [
    SampleCodeComponent,
    SampleDirective,
  ],
  exports: [
    SampleCodeComponent,
    SampleDirective,
    CltContainersModule,
    CodemirrorModule,
    FormsModule,
    TabViewModule,
    ReactiveFormsModule,
    FormsModule,
    CltFormsModule,
    CltNavigationsModule,
    CltOverlayModule,
    CltCoreModule,
  ]
})
export class DemoSDK { }
