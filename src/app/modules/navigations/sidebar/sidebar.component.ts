import { Component, Input, EventEmitter, Output} from '@angular/core';
import { CltSideBarService } from '../providers/sidebar.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';


/**
 * Item present in sidebar
 */
export interface Item {
  /**
   * icon class (e-g: fa fa-home)
   */
  icon?: string;
  /**
   * id of icon
   */
  id?: string;
  /**
   * Description displat when sidebar is open
   */
  description?: string;
  /**
   * click function to interact outside of the component
   */
  click?: Function;
  /** url to go */
  url?: string;
  /**
   * possibilities to add an other list: Not implemented yet
   */
  list?: Configuration;
}

/**
 * Configuration object of the sidebar
 */
export interface Configuration {
  /**
   * List of all icons display on the main area
   */
  list?: Array<Item>;

  /**
   * List of all icons display on the bottom area
   */
  bottom?: Array<Item>;
}

/**
 * Display Sidebar on the app component
 * @example
 * const conf: Configuration = {
 * | list: [{
 * | | icon: "fa fa-home",
 * | | description: "Accueil",
 * | | click: ["/home"]
 * | }],
 * | bottom: [{
 * | | icon: "fa fa-cog",
 * | | description: "Settings",
 * | | click: ["/settings"]
 * | }]
 * };
 * <div style="display:flex">
 * | <sidebar [conf]="conf" (router)='click($event)'></sidebar>
 * | <div>I want to go to {{route()}}</div>
 * </div>
 */
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'clt-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('hintState', [
      state('open', style({
        'max-width': '200px'
      })),
      state('close', style({
        'max-width': '0'

      })),
      transition('open => close', animate('100ms ease-in')),
      transition('close => open', animate('100ms ease-out'))
    ])
  ]
})
export class CltSidebarComponent {
  /**
   * control css class that open/close sidebar: openHint/closeHint
   */
  hintState = 'close';
  /**
   * Get the configuration from outside
   */
  @Input('conf') conf: Configuration = { list: [], bottom: [] };

  @Input('img') img: string;
   /**
   * import dependencies
   */
  constructor(public sidebar: CltSideBarService, private router: Router) {
  }
  /**
   * Go to Home route
   */
  goTo(item, event?) {
    if (event) event.preventDefault();
    if (item.hasOwnProperty('url')) this.router.navigateByUrl(item.url);
    if (item.hasOwnProperty('click')) item.click(item);
  }

  newWindow(data) {
    if (data.url) { window.open(data.url); }
  }

  /**
   * Toggle sidebar
   */
  toggleSidebar() {
    this.sidebar.toggle();
  }

  /**
   * Toggle hint beside links icons on hover
   */
  toggleHint($event) {
    this.hintState =
      $event.type === 'mouseover' && !this.sidebar._open
        ? 'open'
        : 'close';
  }
}

