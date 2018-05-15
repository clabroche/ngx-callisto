import { Component, Input, SimpleChange, OnInit, ViewChild, OnChanges } from '@angular/core';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';

/**
 * Make a popoper around items
 * @example
 * <popover [open]="open()" placement='right'>
    |  <button (click)="toggle()" style="width:100px;">hey</button>
    |  <div popover="content">Hey to you! I'm on your right!</div>
    </popover>
 */
@Component({
  selector: 'popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit, OnChanges  {
  /**
   * Open or close popover;
   * Default: close
   */
  @Input('open') open = false;
  /**
   * Define the placment of popover
   */
  @Input('placement') placement = 'right';
  /**
   * private boolean to watching open/close status
   */
  @ViewChild('popover') popover: NgbPopover;
  /**
   * Track changes on input open to reflect status on private keys
   */
  ngOnChanges(changes: { [propName: string]: SimpleChange }) {
    this.loadState(changes['open'].currentValue);
  }
  loadState(open) {
    open ? this.popover.open() : this.popover.close();
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.loadState(this.open);
    }, 100);
  }
}

