import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DefiCoreModule } from './modules/core/core.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefiOverlayModule } from './modules/overlay/overlay.module';
import { ThemeModule } from './modules/theme/theme.module';
import { DefiNavigationsModule } from './modules/navigations/navigations.module';
import { DefiContainersModule } from './modules/containers/containers.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DefiCoreModule.forRoot(),
    DefiNavigationsModule.forRoot(),
    DefiOverlayModule.forRoot(),
    ThemeModule.forRoot(),
    DefiContainersModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', loadChildren: './demo/demo.module#DemoModule'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
