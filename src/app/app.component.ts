import { Component } from '@angular/core';
import { Configuration } from './modules/navigations/sidebar/sidebar.component';
import { ThemeService } from './modules/theme/providers/theme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  conf: Configuration = {};

  constructor(theme: ThemeService, ) {
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
        icon: 'fas fa-map',
        description: 'Documentation',
        url: '/documentation'
      }]
    };
  }
}
