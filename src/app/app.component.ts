import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  _open= true
  open(){
    return this._open
  }
  toggle(){
    this._open = ! this._open
  }
}
