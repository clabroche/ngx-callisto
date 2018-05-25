import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormErrorsComponent } from './form-errors/form-errors.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { BoxComponent } from './box/box.component';

import { CommonService } from './providers/common.service';
import { SideBarService } from './providers/sidebar.service';
import { SidePanelService } from './providers/sidepanel.service';
import { NotificationsService } from './providers/notifications.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DebounceInputDirective } from './directives/debounceInput.directive';
import { SpinningIconDirective } from './directives/spinningIcon.directive';
import { ClickStopPropagation } from './directives/stopPropagation.directive';
import { ValidatorsDirective } from './directives/validators.directive';
import { ShowPasswordDirective } from './directives/showPassword.directive';
import { ToId } from './pipe/toId.pipe';
import { PopoverComponent } from './popover/popover.component';
import { Router, RouterModule, RouterLink } from '@angular/router';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    FormErrorsComponent,
    BoxComponent,
    SidePanelComponent,
    NotificationsComponent,
    DebounceInputDirective,
    ClickStopPropagation,
    SpinningIconDirective,
    ValidatorsDirective,
    ShowPasswordDirective,
    ToId,
  ],
  imports: [
    CommonModule,
    // NoopAnimationsModule,
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    FormErrorsComponent,
    SidePanelComponent,
    NotificationsComponent,
    BoxComponent,
    DebounceInputDirective,
    SpinningIconDirective,
    ValidatorsDirective,
    ShowPasswordDirective,
    ToId,
  ]
})
export class CoreModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        CommonService,
        SideBarService,
        NotificationsService,
        SidePanelService,
      ]
    };
  }
}
