import {
  Component,
  Input,
  Directive,
  TemplateRef,
  ContentChild,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
  Renderer2,
  AfterContentInit,
  ChangeDetectorRef,
  OnDestroy
} from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { Subject } from 'rxjs';
import { FormGroup } from '@angular/forms';
/**
 * Display a popup
 */

@Directive({
  selector: '[clt-popup-body]'
})
export class CltBodyDirective {
  constructor(public templateRef: TemplateRef<any>) { }
}
@Component({
  selector: 'clt-popup',
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
export class CltPopupComponent implements AfterContentInit, OnDestroy {
  @ContentChild(CltBodyDirective) bodyTemplate;
  @ViewChild('host') host: ElementRef;
  @ViewChild('hostContainer') hostContainer: ElementRef;
  @Input() body = '';
  @Input() ghost = false;
  @Input() title: string;

  @Input() cancelButton = 'Annuler';
  @Input() validateButton = 'Valider';

  @Input() width;
  @Input() height;
  @Input() direction: 'left' | 'right' | 'top' | 'bottom' | 'center' = 'center';

  @Input() noActions = false;

  @Output('openEvent') openEvent = new EventEmitter();

  context: any;

  _open = false;
  @Input() visible = false;
  @Output() visibleChange = new EventEmitter();
  state = 'close';

  result: Subject<any>;

  form: FormGroup;
  className = 'popup';
  keyEvents;
  constructor(private renderer: Renderer2, private cdr: ChangeDetectorRef) { }

  ngAfterContentInit() {
    this.cdr.detectChanges();
    this.keyEvents = window.onkeyup = (e) => {
      const key = e.keyCode ? e.keyCode : e.which;
      if (key === 27 && this._open) {
        console.log('esc');
        this.close();
      }
    };
  }
  ngOnDestroy() {
    window.removeEventListener('keyup', this.keyEvents);
  }
  open(context?): Subject<any> {
    this.context = context;
    this.result = new Subject();
    this._open = true;
    this.state = 'open';

    setTimeout(_ => {
      this.visibleChange.emit(this._open);
      this.openEvent.emit();
    });
    return this.result;
  }
  close($event?: Event) {
    if ($event) { this.stopPropagation($event); }
    this._open = false;
    this.state = 'close';
    setTimeout(_ => { this.visibleChange.emit(this._open); });
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
