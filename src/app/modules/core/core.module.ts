import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { CltCommonService } from './providers/common.service';
import { CltSpinningIconDirective } from './directives/spinningIcon.directive';
import { CltClickStopPropagationDirective } from './directives/stopPropagation.directive';
import { CltToId } from './pipe/toId.pipe';
import { CltPopoverComponent } from './popover/popover.component';
@NgModule({
  declarations: [
    CltClickStopPropagationDirective,
    CltSpinningIconDirective,
    CltToId,
    CltPopoverComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CltSpinningIconDirective,
    CltToId,
    CltPopoverComponent,
    CltClickStopPropagationDirective
  ]
})
export class CltCoreModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CltCoreModule,
      providers: [
        CltCommonService,
      ]
    };
  }
}
