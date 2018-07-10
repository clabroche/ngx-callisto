import { sandboxOf } from 'angular-playground';
import { DefiNavbarComponent } from './navbar.component';

export default sandboxOf(DefiNavbarComponent, {
  imports: []
}).add('Simple', {
  context: {
  },
  template: `
    <navbar name="Hygisoft Web">
      <div logo>
        <img src="assets/img/logo.png" alt="">
      </div>
      <div right>
        <div class="icon">
          <i class="fa fa-user"></i>
        </div>
      </div>
    </navbar>
      `
});
