import { Component } from '@angular/core';
import { Configuration } from '../modules/core/sidebar/sidebar.component';
import { SideBarService } from '../public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  conf: Configuration = {};
  constructor(private sideBarService: SideBarService) {
    sideBarService.open();
    this.conf = {
      /**
       * List of all icons display on the main area
       */
      list: [
        {
          icon: 'fa fa-home',
          description: 'Accueil',
          click: function() {
            console.log('hey');
          }
        }
      ],
      /**
       * List of all icons display on the bottom area
       */
      bottom: [
        {
          icon: 'fa fa-cog',
          description: 'Settings',
          click: function () {
            console.log('ho');
          },
          externalUrl: 'lkjelkjdelk'
        }
      ]
    };
  }
  click($event) {
    console.log($event);
  }
}
