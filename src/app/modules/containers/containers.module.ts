import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefiSidePanelComponent } from './side-panel/side-panel.component';
import { DefiSidePanelService } from './providers/sidepanel.service';
import { DefiBoxComponent } from './box/box.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DefiSidePanelComponent,
    DefiBoxComponent
  ]
})
export class DefiContainersModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: DefiContainersModule,
      providers: [
        DefiSidePanelService,
      ]
    };
  }
}
