import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefiNotificationsService } from './providers/notifications.service';
import { DefiNotificationsComponent } from './notifications/notifications.component';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DefiNotificationsComponent,
    PopupComponent
  ],
  exports: [
    DefiNotificationsComponent,
    PopupComponent
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
