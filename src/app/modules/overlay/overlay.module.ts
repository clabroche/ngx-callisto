import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CltNotificationsService } from './providers/notifications.service';
import { CltNotificationsComponent } from './notifications/notifications.component';
import { PopupComponent, BodyDirective } from './popup/popup.component';
import { CltSidePanelComponent } from './side-panel/side-panel.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CltNotificationsComponent,
    PopupComponent,
    BodyDirective,
    CltSidePanelComponent
  ],
  exports: [
    CltNotificationsComponent,
    PopupComponent,
    BodyDirective,
    CltSidePanelComponent
  ]
})
export class CltOverlayModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CltOverlayModule,
      providers: [
        CltNotificationsService,
      ]
    };
  }
}
