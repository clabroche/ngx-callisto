import { Component } from "@angular/core";
import { SidePanelService } from "../providers/sidepanel.service";

/**
 * SidePanel Component
 * @example
 * const sp = new SidePanelService()
 * const open = (template, context = {})=>sp.open(template, context)
 * 
 * <div style="display:flex;">
 * |  <div>
 * |  |  <button (click)="open(template)">Open with template</button>
 * |  |  <br/>
 * |  |  <br/>
 * |  |  <input type="text" #inputContext placeholder="Enter a name here"/>
 * |  |  <button (click)="open(template, {value: inputContext.value})">Open with context</button>
 * |  </div>
 * |  <sidePanel></sidePanel>
 * </div>
 * <ng-template #template let-value="value"> Hey {{value}} !</ng-template>
 */
@Component({
  selector: "sidePanel",
  templateUrl: "./side-panel.component.html",
  styleUrls: ["./side-panel.component.scss"]
})
export class SidePanelComponent {
  /**
   * Load dependencies
   */
  constructor(public sidepanel: SidePanelService){}
}
 