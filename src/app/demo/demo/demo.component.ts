import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { SideBarService, Configuration } from '../../../public_api';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  conf: Configuration = {};
  @ViewChild('popovertest') popovertest;
  @ViewChild('popovertestleft') popovertestleft;
  constructor(private sideBarService: SideBarService, private renderer: Renderer2) {
    sideBarService.open();
    this.conf = {
      /**
       * List of all icons display on the main area
       */
      list: [
        {
          id: 'home',
          icon: 'fa fa-home',
          description: 'Accueil',
          click: function () {
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

  ngOnInit() {
    
  }
}
