import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
import { RouterModule } from '@angular/router';
import { CoreModule, DefiFormsModule } from '../../public_api';
import { NoopAnimationPlayer } from '@angular/animations';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Browser } from 'protractor';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DefiFormsModule,
    CoreModule,
    RouterModule.forChild([
      {path: '', component: DemoComponent}
    ])
  ],
  exports: [
    DemoComponent,
    RouterModule
  ],
  declarations: [DemoComponent],
})
export class DemoModule { }
