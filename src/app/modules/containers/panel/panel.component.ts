import { Component, Input, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
  animations: [
    trigger('state', [
      state('close', style({
        height: '0',
        paddingTop: '0',
        paddingBottom: '0'
      })),
      state('open', style({
        height: '*',
        paddingTop: '*',
        paddingBottom: '*'
      })),
      transition('close => open', animate('100ms ease-in')),
      transition('open => close', animate('100ms ease-out'))
    ])
  ]
})
export class PanelComponent implements OnInit {
  @Input() header: string;
  @Input() toggleable = false;
  @Input() collapsed = false;
  state: 'open' | 'close' = 'open';

  ngOnInit() {
    if (this.collapsed) {
      console.log('collapsed')
      this.state = this.collapsed ? 'close' : 'open';

    }
  }
  toggleCollapse() {
    if (this.toggleable) {
      this.collapsed = !this.collapsed;
      this.state = this.collapsed ? 'close' : 'open';
    }
  }
}
