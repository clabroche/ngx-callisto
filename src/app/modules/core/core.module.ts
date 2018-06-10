import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { DefiNotificationsComponent } from './notifications/notifications.component';
import { DefiCommonService } from './providers/common.service';
import { DefiNotificationsService } from './providers/notifications.service';
import { DefiSpinningIconDirective } from './directives/spinningIcon.directive';
import { DefiClickStopPropagation } from './directives/stopPropagation.directive';
import { DefiToId } from './pipe/toId.pipe';
import { DefiPopoverComponent } from './popover/popover.component';
import { Router, RouterModule, RouterLink } from '@angular/router';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    DefiNotificationsComponent,
    DefiClickStopPropagation,
    DefiSpinningIconDirective,
    DefiToId,
    DefiPopoverComponent,
  ],
  imports: [
    CommonModule,
    // NoopAnimationsModule,
  ],
  exports: [
    DefiNotificationsComponent,
    DefiSpinningIconDirective,
    DefiToId,
    DefiPopoverComponent,
  ]
})
export class DefiCoreModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: DefiCoreModule,
      providers: [
        DefiCommonService,
        DefiNotificationsService,
      ]
    };
  }
}
