import { Renderer2, ChangeDetectorRef } from '@angular/core';
import { PopupComponent } from '../popup/popup.component';
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
export declare class CltSidePanelComponent extends PopupComponent {
    className: string;
    direction: 'left' | 'right' | 'top' | 'bottom' | 'center';
    /**
     * Load dependencies
     */
    constructor(renderer: Renderer2, cdr: ChangeDetectorRef);
}
