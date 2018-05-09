import { Component, Input, EventEmitter, Output} from "@angular/core";
import { SideBarService } from "../providers/sidebar.service";


/**
 * Item present in sidebar
 */
export interface Item {
  /**
   * icon class (e-g: fa fa-home)
   */
  icon?:string,
  /**
   * id of icon
   */
  id?:string,
  /**
   * Description displat when sidebar is open
   */
  description?:string
  /**
   * click function to interact outside of the component
   */
  click?:Array<any>|string
  /**
   * possibilities to add an other list: Not implemented yet
   */
  list?:Configuration
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
  selector: "sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent {
  /**
   * control css class that open/close sidebar: openHint/closeHint
   */
  hintClass: string = "";
  /**
   * Get the configuration from outside
   */
  @Input("conf") conf: Configuration = { list: [], bottom: [] };
  /**
   * Return the route on click of the sidebar item
   */
  @Output('router') click = new EventEmitter<boolean>();
  /**
   * import dependencies 
   */
  constructor(public sidebar: SideBarService) {}
  /**
   * Go to Home route
   */
  goTo(data) {this.click.emit(data)}

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
    this.hintClass =
      $event.type == "mouseover" && !this.sidebar._open
        ? "openHint"
        : "closeHint";
  }
}
 