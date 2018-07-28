import { Component, Input, SimpleChanges, OnChanges, ViewChildren, QueryList } from '@angular/core';
import { CodemirrorComponent } from '@ctrl/ngx-codemirror';

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
  @ViewChildren('codeMirror') codeMirrors: QueryList<CodemirrorComponent>;
  constructor() { }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('code')) {
      this.code = {
        js: changes.code.currentValue.js.trim(),
        html: changes.code.currentValue.html.trim(),
      };
    }
  }
  refreshCode() {
    setTimeout(() => {
      this.codeMirrors.forEach(codeMirror=>{
        console.log('refresh')
        codeMirror.codeMirror.refresh();
      })
    });
  }
}
