import { Component,
  Input,
  SimpleChange,
  OnInit,
  ViewChild,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  ElementRef,
  Renderer2
} from '@angular/core';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import * as resize from 'element-resize-detector';
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
export class PopoverComponent implements AfterContentInit, OnChanges {
  /**
   * Open or close popover;
   * Default: close
   */
  @Input('open') open = false;
  /**
   * Define the placment of popover
   */
  @Input('placement') placement = 'right';
  @ViewChild('popupContainer') popupContainer: ElementRef;
  positionClass = 'popover-right';
  resizeDetector;
  constructor(private renderer: Renderer2) {
    this.resizeDetector = resize({
      strategy: 'scroll' // <- For ultra performance.
    });
  }
  // /**
  //  * Track changes on input open to reflect status on private keys
  //  */
  loadState(open) {
    console.log('loadState', open);
    open ?
      this.renderer.setStyle(this.popupContainer.nativeElement, 'visibility', 'visible') :
      this.renderer.setStyle(this.popupContainer.nativeElement, 'visibility', 'hidden');
  }
  ngOnChanges(changes: { [propName: string]: SimpleChange }) {
    this.loadState(changes['open'].currentValue);
  }
  ngAfterContentInit(): void {
    this.resizeDetector.listenTo(this.popupContainer.nativeElement, (element) => {
      const width = element.offsetWidth;
      const height = element.offsetHeight;
      console.log('Size: ' + width + 'x' + height);
      if (this.placement === 'top' || this.placement === 'bottom') {
        this.renderer.setStyle(this.popupContainer.nativeElement, 'left', '-' + width / 2 + 'px');
      }
      if (this.placement === 'right' || this.placement === 'left') {
        this.renderer.setStyle(this.popupContainer.nativeElement, 'top', '-' + height / 2 + 'px');
      }
    });
  }
}

