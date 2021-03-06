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
    |  <div right>
    |  |  <div class="icon">
    |  |  | <i class="fa fa-user"></i>
    |  |  </div>
    |  </div>
    </navbar>
 */
export declare class CltNavbarComponent {
    /**
     * Name displaying on left after icon
     */
    name: string;
    img: string;
    url: string;
    /**
     * Load dependencies instances
     */
    constructor();
}
