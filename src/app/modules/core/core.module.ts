import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { DefiCommonService } from './providers/common.service';
import { DefiSpinningIconDirective } from './directives/spinningIcon.directive';
import { DefiClickStopPropagation } from './directives/stopPropagation.directive';
import { DefiToId } from './pipe/toId.pipe';
import { DefiPopoverComponent } from './popover/popover.component';
@NgModule({
  declarations: [
    DefiClickStopPropagation,
    DefiSpinningIconDirective,
    DefiToId,
    DefiPopoverComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DefiSpinningIconDirective,
    DefiToId,
    DefiPopoverComponent,
    DefiClickStopPropagation
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
