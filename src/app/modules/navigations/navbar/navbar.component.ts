import { Component, Input } from '@angular/core';

/**
 * Navbar Component
 *
 * ng-content:
 *  - [logo] element on the left
 *  - [actions] element on the right
 * @example
 *  <navbar name="Hygisoft Web">
    |  <div logo>
    |  |  <img src="assets/img/logo.png" alt="">
    |  </div>
    |  <div actions>
    |  |  <div class="icon">
    |  |  | <i class="fa fa-user"></i>
    |  |  </div>
    |  </div>
    </navbar>
 */
@Component({
  selector: 'defi-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class DefiNavbarComponent {
  /**
   * Name displaying on left after icon
   */
  @Input('name') name = '';

  @Input('img') img: string;

  /**
   * Load dependencies instances
   */
  constructor() {}
}

