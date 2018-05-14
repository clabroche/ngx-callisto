import { sandboxOf } from 'angular-playground';
import { PopoverComponent } from './popover.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

let bool = true
const open = _=>bool
const toggle = _=> {bool=!bool; return bool}

export default sandboxOf(PopoverComponent, {
  imports: [
    NgbModule.forRoot()
  ],
}).add('Simple', {
  context:{
    toggle,
    open
  },
  template: `
      <div class="container" style="display: flex; justify-content: center; height: 100vh; align-items: center;">
        <popover [open]="open()" placement='top'>
          <div popover="content">Hey to you !  I'm on your top!</div>
          <popover [open]="open()" placement='bottom'>
            <div popover="content">Hey to you !  I'm on your bottom!</div>
            <popover [open]="open()" placement='left'>
              <div popover="content">Hey to you !  I'm on your left!</div>
              <popover [open]="open()" placement='right'>
                <button (click)="toggle()" style="width:100px;">hey</button>
                <div popover="content">Hey to you! I'm on your right!</div>
              </popover>
            </popover>
          </popover>
        </popover>
      </div>
  `
});