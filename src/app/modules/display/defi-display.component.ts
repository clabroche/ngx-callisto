import {
  Component,
  Input,
  Output,
  ContentChildren,
  OnChanges,
  SimpleChanges,
  EventEmitter,
  QueryList,
  OnInit,
  AfterContentInit } from '@angular/core';
import { CltDisplayItemDirective } from './directives/defi-display-item.directive';

@Component({
  selector: 'defi-display',
  templateUrl: './defi-display.component.html',
  styleUrls: ['./defi-display.component.scss']
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
