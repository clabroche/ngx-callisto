import { Component, Input, EventEmitter, Output} from '@angular/core';
import { SideBarService } from '../providers/sidebar.service';
import { trigger, state, style, transition, animate } from '@angular/animations';


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
  click?: Array<any>|string | Function;
  /**
   * Url to redirect with router
   */
  externalUrl?: string;
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
  selector: 'sidebar',
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
export class SidebarComponent {
  /**
   * control css class that open/close sidebar: openHint/closeHint
   */
  hintState = 'close';
  /**
   * Get the configuration from outside
   */
  @Input('conf') conf: Configuration = { list: [], bottom: [] };

  /**
   * import dependencies
   */
  constructor(public sidebar: SideBarService) {}
  /**
   * Go to Home route
   */
  goTo(data) {
    data.click();
  }

  newWindow(data) {
    if (data.externalUrl) { window.open(data.externalUrl); }
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

