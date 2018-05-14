import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from '../public_api';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot([{path: '**', component: AppComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
