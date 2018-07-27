import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'sample-code',
  templateUrl: './sample-code.component.html',
  styleUrls: ['./sample-code.component.scss']
})
export class SampleCodeComponent implements OnChanges {
  @Input() code: {
    html: string;
    js: string;
  };
  constructor() { }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('code')) {
      this.code = {
        js: changes.code.currentValue.js.trim(),
        html: changes.code.currentValue.html.trim(),
      };
    }
  }
}
