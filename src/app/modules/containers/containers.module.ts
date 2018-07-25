import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefiBoxComponent } from './box/box.component';
import { PanelComponent } from './panel/panel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DefiBoxComponent,
    PanelComponent
  ],
  exports: [
    DefiBoxComponent,
    PanelComponent
  ]
})
export class DefiContainersModule {}
