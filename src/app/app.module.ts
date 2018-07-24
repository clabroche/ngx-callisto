import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DefiCoreModule } from './modules/core/core.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DemoModule } from './demo/demo.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefiNavigationsModule, DefiContainersModule } from '../public_api';
import { DefiOverlayModule } from './modules/overlay/overlay.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    DefiCoreModule.forRoot(),
    DefiNavigationsModule.forRoot(),
    DefiContainersModule.forRoot(),
    DefiOverlayModule.forRoot(),
    FormsModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: '', loadChildren: './demo/demo.module#DemoModule'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
