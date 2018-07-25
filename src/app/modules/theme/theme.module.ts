import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from './providers/theme.service';
import { ThemeManagerComponent } from './theme-manager/theme-manager.component';
import { RouterModule } from '@angular/router';
import { ColorPickerModule } from 'ngx-color-picker';
import { DefiOverlayModule } from '../overlay/overlay.module';
import { DefiContainersModule } from '../containers/containers.module';
@NgModule({
  imports: [
    CommonModule,
    ColorPickerModule,
    DefiContainersModule,
    DefiOverlayModule.forRoot()
  ],
  declarations: [ThemeManagerComponent],
  exports: [ThemeManagerComponent, RouterModule]
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ThemeModule,
      providers: [
        ThemeService
      ]
    };
  }
}
