import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CltSideBarService } from './providers/sidebar.service';
import { CltSidebarComponent } from './sidebar/sidebar.component';
import { CltNavbarComponent } from './navbar/navbar.component';
import { RouterLink } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CltNavbarComponent,
    CltSidebarComponent
  ],
  exports: [
    CltNavbarComponent,
    CltSidebarComponent
  ],
})
export class CltNavigationsModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CltNavigationsModule,
      providers: [
        CltSideBarService,
      ]
    };
  }
}
