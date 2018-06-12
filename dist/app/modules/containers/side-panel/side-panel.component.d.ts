import { DefiSidePanelService } from "../providers/sidepanel.service";
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
export declare class DefiSidePanelComponent {
    sidepanel: DefiSidePanelService;
    /**
     * Load dependencies
     */
    constructor(sidepanel: DefiSidePanelService);
}
