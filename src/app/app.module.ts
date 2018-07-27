import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CltCoreModule } from './modules/core/core.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CltOverlayModule } from './modules/overlay/overlay.module';
import { ThemeModule } from './modules/theme/theme.module';
import { CltNavigationsModule } from './modules/navigations/navigations.module';
import { CltContainersModule } from './modules/containers/containers.module';
import { HttpClientModule } from '@angular/common/http';
import { DemoSDK } from './demo/demo-sdk.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    DemoSDK,
    CltCoreModule.forRoot(),
    CltNavigationsModule.forRoot(),
    CltOverlayModule.forRoot(),
    ThemeModule.forRoot(),
    CltContainersModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', loadChildren: './demo/demo.module#DemoModule'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
