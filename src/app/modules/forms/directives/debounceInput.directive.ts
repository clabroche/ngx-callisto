import { Directive, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output, SimpleChanges, OnChanges } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { debounceTime } from 'rxjs/operators/debounceTime';

/**
 * Directive that debounce an element that supports keyListener
 * @example
 * <input type="text" debounce-input (debounce)="doSomething($event.target.value)" [debounceTime]="200" />
 */
@Directive({
  selector: '[defi-debounce-input]'
})
export class CltDebounceInputDirective implements OnInit, OnDestroy, OnChanges {
  /**
   * Describe the debounce time; Default: 500ms
   */
  @Input() debounceTime = 500;
  /**
   * Emit and call function after the debounce time
   */
  @Output() debounce = new EventEmitter();
  /**
   * Observable that register the flow
   */
  private subject = new Subject();
  /**
   * Instance of the observable to close when component die
   */
  private subscription: Subscription;



  /**
   * Register observable pipe that describe the flow of the debounce directive
   */
  ngOnInit() {
    this.createSubsription();
  }
  createSubsription() {
    this.subscription = this.subject.pipe(
      debounceTime(this.debounceTime)
    ).subscribe(e => this.debounce.emit(e));
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.debounceTime && this.subject.observers[0]) this.subject.observers[0]['dueTime'] = changes.debounceTime.currentValue;
  }
  /**
   * Unregister observable on the component destruct
   */
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /**
   * Trigger keyup event and inject it to the pipe of the debounce
   */
  @HostListener('keyup', ['$event'])
  keyupEvent(event) {
    event.preventDefault();
    event.stopPropagation();
    this.subject.next(event);
  }
}
