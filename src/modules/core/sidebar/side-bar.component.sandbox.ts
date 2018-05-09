import { sandboxOf } from 'angular-playground';
import { SidebarComponent, Configuration } from "./sidebar.component";
import { SideBarService } from '../providers/sidebar.service';
import { Router } from '@angular/router'

const sb = new SideBarService()
/**
 * Configuration object of navigation bar
 */
const conf: Configuration = {
  /**
   * List of all icons display on the main area
   */
  list: [
    {
      icon: "fa fa-home",
      description: "Accueil",
      click: ["/home"]
    }
  ],
  /**
   * List of all icons display on the bottom area
   */
  bottom: [
    {
      icon: "fa fa-cog",
      description: "Settings",
      click: ["/settings"]
    }
  ]
};
let msg = ''
let click = data => (msg = data);
let route = _=>msg
export default sandboxOf(SidebarComponent, {
  imports: [],
  providers: [
    {
      provide: SideBarService,
      useValue: sb
    }
  ]
}).add("Simple", {
  context: {
    conf,
    msg,
    route,
    click
  },
  template: `
  <div style="display:flex">
    <sidebar [conf]="conf" (router)='click($event)'>
    </sidebar>
    <div>I want to go to {{route()}}</div>
  </div>
  `
});