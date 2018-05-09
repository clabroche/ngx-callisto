import { sandboxOf } from 'angular-playground';
import { SpinningIconDirective } from './spinningIcon.directive';

export default sandboxOf(SpinningIconDirective, {
  imports: [],
}).add('Simple', {
  context:{
  },
  template: `
    <button (click)="icon.start()">Click to start</button>
    <button>
      <i class="fa fa-minus-circle" aria-hidden="true" spinning-icon #icon="spinning"></i>
    </button>
    <button (click)="icon.stop()">Click to stop</button>
  `
});