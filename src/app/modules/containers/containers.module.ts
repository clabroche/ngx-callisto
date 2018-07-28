import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CltBoxComponent } from './box/box.component';
import { CltPanelComponent } from './panel/panel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CltBoxComponent,
    CltPanelComponent
  ],
  exports: [
    CltBoxComponent,
    CltPanelComponent
  ]
})
export class CltContainersModule {}
