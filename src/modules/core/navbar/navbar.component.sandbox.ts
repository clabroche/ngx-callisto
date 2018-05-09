import { sandboxOf } from 'angular-playground';
import { NavbarComponent } from './navbar.component';

export default sandboxOf(NavbarComponent, {
  imports: []
}).add('Simple', {
  context:{
  },
  template: `
    <navbar name="Hygisoft Web">
      <div logo>
        <img src="assets/img/logo.png" alt="">
      </div>
      <div actions>
        <div class="icon">
          <i class="fa fa-user"></i>
        </div>
      </div>
    </navbar>
      `
});