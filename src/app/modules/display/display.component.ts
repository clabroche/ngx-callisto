import {
  Component,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
  EventEmitter,
  AfterContentInit } from '@angular/core';
import { CltDisplayItemDirective } from './directives/display-item.directive';

@Component({
  selector: 'clt-display',
  templateUrl: './clt-display.component.html',
  styleUrls: ['./clt-display.component.scss']
})
export class CltDisplayComponent implements OnChanges, AfterContentInit {
  @Input() storage: string;
  @Input() visible: boolean;
  @Input() elements: CltDisplayItemDirective[] = [];
  @Output() visibleChange = new EventEmitter();
  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('visible')) {
      this.visibleChange.emit(changes.visible.currentValue);
    }
  }
  ngAfterContentInit() {
    if (this.storage) this.elements.map(component => component.storage = this.storage);
  }
  changeVisibleState(boolean: boolean) {
    this.visible = boolean;
    this.visibleChange.emit(boolean);
  }
}
