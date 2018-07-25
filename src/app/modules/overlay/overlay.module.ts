import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefiNotificationsService } from './providers/notifications.service';
import { DefiNotificationsComponent } from './notifications/notifications.component';
import { PopupComponent, BodyDirective } from './popup/popup.component';
import { DefiSidePanelComponent } from './side-panel/side-panel.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    DefiNotificationsComponent,
    PopupComponent,
    BodyDirective,
    DefiSidePanelComponent
  ],
  exports: [
    DefiNotificationsComponent,
    PopupComponent,
    BodyDirective,
    DefiSidePanelComponent
  ]
})
export class DefiOverlayModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: DefiOverlayModule,
      providers: [
        DefiNotificationsService,
      ]
    };
  }
}
