import { Injectable } from '@angular/core';
import { merge as _merge, cloneDeep as _clone} from 'lodash';
import defaultTheme from './default';
import bluegreygreen from './bluegrey-green';
@Injectable({
  providedIn: 'root'
})
export class CltThemeService {
  rootElement: Element;
  themes = [
    {name: 'default', theme: defaultTheme},
    {name: 'bluegreygreen', theme: bluegreygreen}
  ];
  theme: any = {};

  constructor() {
    this.reload(this.themes[0].theme);
  }

  reload(theme?) {
    if (theme) this.theme = _merge(_clone(defaultTheme), theme);
    document.getElementsByTagName('html')[0].setAttribute('style', '');
    Object.keys(this.theme).map(key => this.setStyle(key, this.theme[key]));
  }
  setStyle(property, value) {
    const html = document.getElementsByTagName('html')[0];
    this.theme[property] = value;
    html.style.setProperty(property, value);
  }

}
