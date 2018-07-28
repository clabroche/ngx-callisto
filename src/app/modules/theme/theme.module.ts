import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CltThemeService } from './providers/theme.service';
import { CltThemeManagerComponent } from './theme-manager/theme-manager.component';
import { RouterModule } from '@angular/router';
import { ColorPickerModule } from 'ngx-color-picker';
import { CltOverlayModule } from '../overlay/overlay.module';
import { CltContainersModule } from '../containers/containers.module';
@NgModule({
  imports: [
    CommonModule,
    ColorPickerModule,
    CltContainersModule,
    CltOverlayModule.forRoot()
  ],
  declarations: [CltThemeManagerComponent],
  exports: [CltThemeManagerComponent, RouterModule]
})
export class CltThemeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CltThemeModule,
      providers: [
        CltThemeService
      ]
    };
  }
}
