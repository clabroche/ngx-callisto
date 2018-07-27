import { Component } from '@angular/core';
import { Configuration } from './modules/navigations/sidebar/sidebar.component';
import { CltThemeService } from './modules/theme/providers/theme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  conf: Configuration = {};

  constructor(theme: CltThemeService, router: Router) {
    this.conf = {
      list: [{
        icon: 'fas fa-home',
        description: 'Home',
        url: '/home',
      }, {
        icon: 'fas fa-map',
        description: 'Map',
        url: '/map',
      }],
      bottom: [{
        icon: 'fas fa-book',
        description: 'Documentation',
        click: function() {
          window.open('/documentation/index.html');
        }
      }]
    };
  }
}
