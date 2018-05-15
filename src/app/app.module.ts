import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from '../public_api';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule.forRoot(),
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([{path: '**', component: AppComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
