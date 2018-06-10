import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { DefiCommonService } from './providers/common.service';
import { DefiSpinningIconDirective } from './directives/spinningIcon.directive';
import { DefiClickStopPropagation } from './directives/stopPropagation.directive';
import { DefiToId } from './pipe/toId.pipe';
import { DefiPopoverComponent } from './popover/popover.component';
import { Router, RouterModule, RouterLink } from '@angular/router';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
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
      ]
    };
  }
}
