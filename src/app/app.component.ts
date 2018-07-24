import { Component } from '@angular/core';
import { Configuration } from './modules/navigations/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  conf: Configuration = {
    list: [{
      icon: 'fas fa-home',
      description: 'Accueil',
      click: ['/home']
    }],
    bottom: [{
      icon: 'fas fa-cog',
      description: 'Settings',
      click: ['/settings']
    }]
  };
}
