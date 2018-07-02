import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { Subject } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
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
export class PopupComponent {

  @Input() body = '';
  @Input() title: string;

  @Input() cancelButton = 'Annuler';
  @Input() validateButton = 'Valider';

  @Input() width = 'auto';
  @Input() height = 'auto';

  @Input() mainColor = '#343a40';

  @Input() noActions = false;

  context: any;

  _open = false;
  state = 'close';

  result: Subject<any>;

  form: FormGroup;

  open(context?): Subject<any> {
    this.context = context;
    this.result = new Subject();
    this._open = true;
    this.state = 'open';
    return this.result;
  }
  close($event?: Event) {
    if ($event) { this.stopPropagation($event); }
    this._open = false;
    this.state = 'close';
    if (this.result) {
      this.result.unsubscribe();
      this.result = null;
     }
  }

  bindForm(form: FormGroup) {
    this.form = form;
    return this;
  }

  stopPropagation($event: Event) {
    $event.stopPropagation();
  }

  out(isValidate, $event?: Event, value?: any) {
    if ($event) { $event.preventDefault(); }
    if (!isValidate) this.result.next(null);
    else if (this.form) this.result.next(this.form.value);
    else this.result.next(value || 'ok');
    this.close();
  }

}
