import { Component, Renderer2, ChangeDetectorRef } from '@angular/core';
import { PopupComponent } from '../../overlay/popup/popup.component';
import { trigger, state, transition, animate, style } from '@angular/animations';

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
  selector: 'defi-side-panel',
  templateUrl: '../popup/popup.component.html',
  styleUrls: ['./side-panel.component.scss'],
  animations: [
    trigger('openState', [
      state('open', style({
        'display': 'flex',
        'opacity': '1'
      })),
      state('close', style({
        'display': 'none',
        'opacity': '0'
      })),
      transition('open => close', animate('100ms ease-in')),
      transition('close => open', animate('100ms ease-out'))
    ])
  ]
})
export class DefiSidePanelComponent extends PopupComponent {
  className = 'sidepanel';
  direction: 'left' | 'right' | 'top' | 'bottom' | 'center'
    = 'right';

  /**
   * Load dependencies
   */
  constructor(renderer: Renderer2, cdr: ChangeDetectorRef) {
    super(renderer, cdr);
  }
}

