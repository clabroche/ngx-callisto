import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefiSideBarService } from './providers/sidebar.service';
import { DefiSidebarComponent } from './sidebar/sidebar.component';
import { DefiNavbarComponent } from './navbar/navbar.component';
import { RouterLink } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    DefiNavbarComponent,
    DefiSidebarComponent
  ],
  exports: [
    DefiNavbarComponent,
    DefiSidebarComponent
  ],
})
export class DefiNavigationsModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: DefiNavigationsModule,
      providers: [
        DefiSideBarService,
      ]
    };
  }
}
