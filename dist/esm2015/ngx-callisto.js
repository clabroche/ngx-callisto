import { Component, Input, Output, EventEmitter, NgModule, Injectable, Directive, Renderer2, ElementRef, HostListener, Pipe, ViewChild, ChangeDetectorRef, ViewChildren, TemplateRef, ContentChild, ContentChildren, ViewContainerRef, ComponentFactoryResolver, defineInjectable, inject } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { merge, cloneDeep, reduce, isEqual, map } from 'lodash';
import * as erdImported from 'element-resize-detector';
import { v4 } from 'uuid';
import { Subject } from 'rxjs';
import { __awaiter } from 'tslib';
import { each, filter } from 'bluebird';
import { Subject as Subject$1 } from 'rxjs/Subject';
import { debounceTime } from 'rxjs/operators/debounceTime';
import OlProj from 'ol/proj';
import { HttpClient } from '@angular/common/http';
import Style from 'ol/style/style';
import Icon from 'ol/style/icon';
import Modify from 'ol/interaction/modify';
import Overlay from 'ol/overlay';
import VectorSource from 'ol/source/vector';
import VectorLayer from 'ol/layer/vector';
import Feature from 'ol/feature';
import Map from 'ol/map';
import View from 'ol/view';
import 'ol/layer/layer';
import Tile from 'ol/layer/tile';
import OSM from 'ol/source/osm';
import * as Geocoder from 'ol-geocoder';
import { Router, RouterModule } from '@angular/router';
import { ColorPickerModule } from 'ngx-color-picker';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Display Box Container
 * \@example
 *  <box title="Box title">
 *  |  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
 *  </box>
 */
class CltBoxComponent {
}
CltBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'clt-box',
                template: `<div id="box">
    <div id="box-title">
        {{title}}
    </div>
    <div class="box-container">
        <ng-content></ng-content>
    </div>

</div>`,
                styles: [`:host{width:100%}:host #box{width:100%}:host #box .box-title{font-size:1.2rem}:host #box .box-container{background-color:#fff;-webkit-box-shadow:1px 1px 9px 0 grey;box-shadow:1px 1px 9px 0 grey}`]
            },] },
];
/** @nocollapse */
CltBoxComponent.propDecorators = {
    "title": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CltPanelComponent {
    constructor() {
        this.toggleable = false;
        this.collapsed = false;
        this.toggleChange = new EventEmitter();
        this.state = 'open';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.collapsed) {
            this.state = this.collapsed ? 'close' : 'open';
        }
    }
    /**
     * @return {?}
     */
    toggleCollapse() {
        if (this.toggleable) {
            this.collapsed = !this.collapsed;
            this.state = this.collapsed ? 'close' : 'open';
            this.toggleChange.emit(this.collapsed);
        }
    }
}
CltPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'clt-panel',
                template: `<div class="panel-container">
  <div class="panel-header" *ngIf="header">
    {{header}}
    <div class="panel-actions">
        <button *ngIf='toggleable' (click)="toggleCollapse()">
          <ng-container *ngIf='collapsed'>+</ng-container>
          <ng-container *ngIf='!collapsed'>-</ng-container>
        </button>
    </div>
  </div>
  <div class="panel-body" [@state]="state">
    <ng-content></ng-content>
  </div>
</div>
`,
                styles: [`.panel-container .panel-header{padding:10px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:var(--headerBgColor);color:var(--headerTextColor);border-width:var(--headerBorderWidth);border-color:var(--headerBorderColor);font-weight:var(--headerFontWeight)}.panel-container{margin:5px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;border:var(--contentBorderWidth) solid var(--contentBorderColor)}.panel-container .panel-header{font-weight:700;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.panel-container .panel-header .panel-actions button{border:none;background-color:var(--headerBgColorAccent);color:var(--headerTextColor);padding:3px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-weight:700}.panel-container .panel-header .panel-actions button:hover{background-color:var(--stateHoverBgColor)}.panel-container .panel-body{overflow:hidden;padding:10px}`],
                animations: [
                    trigger('state', [
                        state('close', style({
                            height: '0',
                            paddingTop: '0',
                            paddingBottom: '0'
                        })),
                        state('open', style({
                            height: '*',
                            paddingTop: '*',
                            paddingBottom: '*'
                        })),
                        transition('close => open', animate('100ms ease-in')),
                        transition('open => close', animate('100ms ease-out'))
                    ])
                ]
            },] },
];
/** @nocollapse */
CltPanelComponent.propDecorators = {
    "header": [{ type: Input },],
    "toggleable": [{ type: Input },],
    "collapsed": [{ type: Input },],
    "toggleChange": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CltContainersModule {
}
CltContainersModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    CltBoxComponent,
                    CltPanelComponent
                ],
                exports: [
                    CltBoxComponent,
                    CltPanelComponent
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Describe differences between two object
 * @record
 */

/**
 * Share variable and function commonly use in the app
 */
class CltCommonService {
    /**
     * Instanciate all members
     */
    constructor() {
        this.api = 'http://localhost:3000';
        this.graphQL = this.api + '/graphql';
        this.refreshTokenInterval = 4000;
    }
    /**
     * Test equality objects
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    equalityObjects(a, b) {
        const /** @type {?} */ differences = this.differences(a, b);
        const /** @type {?} */ d = differences.different.length + differences.missing_from_first.length + differences.missing_from_second.length;
        return d === 0 ? true : false;
    }
    /**
     * Load all
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    differences(a, b) {
        const /** @type {?} */ result = {
            different: [],
            missing_from_first: [],
            missing_from_second: []
        };
        reduce(a, (_result, value, key) => {
            if (b.hasOwnProperty(key)) {
                if (isEqual(value, b[key])) {
                    return _result;
                }
                else {
                    if (typeof (a[key]) !== typeof ({}) || typeof (b[key]) !== typeof ({})) {
                        result.different.push(key);
                        return result;
                    }
                    else {
                        const /** @type {?} */ deeper = this.differences(a[key], b[key]);
                        result.different = result.different.concat(map(deeper.different, (sub_path) => key + '.' + sub_path));
                        result.missing_from_second =
                            result.missing_from_second.concat(map(deeper.missing_from_second, (sub_path) => key + '.' + sub_path));
                        result.missing_from_first =
                            result.missing_from_first.concat(map(deeper.missing_from_first, (sub_path) => key + '.' + sub_path));
                        return result;
                    }
                }
            }
            else {
                result.missing_from_second.push(key);
                return result;
            }
        }, result);
        reduce(b, function (_result, value, key) {
            if (a.hasOwnProperty(key)) {
                return _result;
            }
            else {
                _result.missing_from_first.push(key);
                return _result;
            }
        }, result);
        return result;
    }
    /**
     * Wait function
     * @param {?} ms
     * @return {?}
     */
    wait(ms) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, ms);
        });
    }
    /**
     * Flat an object
     * @param {?} obj
     * @return {?}
     */
    flatten(obj) {
        const /** @type {?} */ newObj = {};
        /**
         * @param {?} _obj
         * @return {?}
         */
        function flat(_obj) {
            Object.keys(_obj).map(key => {
                if (typeof _obj[key] === 'object') {
                    flat(_obj[key]);
                }
                else {
                    newObj[key] = _obj[key];
                }
            });
        }
        flat(obj);
        return newObj;
    }
    /**
     * stringifyWithoutPropertiesQuote
     * @param {?} obj
     * @return {?}
     */
    stringifyWithoutPropertiesQuote(obj) {
        return JSON.stringify(obj)
            .replace(/(\{ *"enum" *\: *")([a-z A-Z 0-9]*)" *}/gm, '$2')
            .replace(/\\"/g, '\uFFFF')
            .replace(/\"([^"]+)\":/g, '$1:')
            .replace(/\uFFFF/g, '\\"');
    }
    /**
     * @return {?}
     */
    filter() {
        let /** @type {?} */ filterFun = (value) => value;
        return {
            filter: () => filterFun,
            update: function (search, propertiesToSearch) {
                filterFun = (accounts) => {
                    const /** @type {?} */ tmpAccounts = [];
                    propertiesToSearch.map(propertyToSearch => {
                        accounts.forEach(account => {
                            const /** @type {?} */ accountValue = recursiveCheck(account, propertyToSearch.split('.'));
                            if (accountValue && accountValue.toUpperCase().includes(search.toUpperCase())) {
                                tmpAccounts.push(account);
                            }
                        });
                    });
                    return tmpAccounts.reduce(function (a, b) { if (a.indexOf(b) < 0)
                        a.push(b); return a; }, []);
                };
            }
        };
        /**
         * @param {?} obj
         * @param {?} props
         * @return {?}
         */
        function recursiveCheck(obj, props) {
            if (props.length)
                return recursiveCheck(obj[props[0]], props.slice(1, props.length));
            return obj;
        }
    }
}
CltCommonService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
CltCommonService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * spin an icon
 * \@example
 * <button (click)="icon.start()">Click to start</button>
 * <button>
 * | <i class="fa fa-minus-circle" aria-hidden="true" spinning-icon #icon="spinning"></i>
 * </button>
 * <button (click)="icon.stop()">Click to stop</button>
 */
class CltSpinningIconDirective {
    /**
     * Load some dependencies
     * @param {?} renderer
     * @param {?} hostElement
     */
    constructor(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    start(event) {
        this.renderer.addClass(this.hostElement.nativeElement, 'spin-animation');
        this.renderer.addClass(this.hostElement.nativeElement, 'fa-spinner');
    }
    /**
     * @return {?}
     */
    stop() {
        this.renderer.removeClass(this.hostElement.nativeElement, 'spin-animation');
        this.renderer.removeClass(this.hostElement.nativeElement, 'fa-spinner');
    }
}
CltSpinningIconDirective.decorators = [
    { type: Directive, args: [{
                selector: '[clt-spinning-icon]',
                exportAs: 'clt-spinning-icon'
            },] },
];
/** @nocollapse */
CltSpinningIconDirective.ctorParameters = () => [
    { type: Renderer2, },
    { type: ElementRef, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Prevent bubbling of events
 */
class CltClickStopPropagationDirective {
    /**
     * Trigger click event to stop propagation
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        event.stopPropagation();
    }
}
CltClickStopPropagationDirective.decorators = [
    { type: Directive, args: [{
                selector: '[clt-click-stop-propagation]'
            },] },
];
/** @nocollapse */
CltClickStopPropagationDirective.propDecorators = {
    "onClick": [{ type: HostListener, args: ['click', ['$event'],] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Transform string to be a valid HtmlID
 */
class CltToId {
    /**
     * Transform function
     * It remove special characters
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        return value.split(' ').join('').replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
    }
}
CltToId.decorators = [
    { type: Pipe, args: [{ name: 'clt-toId', pure: true },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const erd = erdImported;
/**
 * Make a popoper around items
 * \@example
 * <popover [open]="open()" placement='right'>
 * |  <button (click)="toggle()" style="width:100px;">hey</button>
 * |  <div popover="content">Hey to you! I'm on your right!</div>
 * </popover>
 */
class CltPopoverComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
        /**
         * Open or close popover;
         * Default: close
         */
        this.open = false;
        /**
         * where popover is show
         */
        this.placement = 'right';
        this.positionClass = 'popover-right';
        this.resizeDetector = erd({
            strategy: 'scroll'
        });
    }
    /**
     * Track changes on input open to reflect status on private keys
     * @param {?} open
     * @return {?}
     */
    loadState(open) {
        open ?
            this.renderer.setStyle(this.popupContainer.nativeElement, 'visibility', 'visible') :
            this.renderer.setStyle(this.popupContainer.nativeElement, 'visibility', 'hidden');
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.loadState(changes['open'].currentValue);
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.resizeDetector.listenTo(this.popupContainer.nativeElement, (element) => {
            const /** @type {?} */ width = element.offsetWidth;
            const /** @type {?} */ height = element.offsetHeight;
            if (this.placement === 'top' || this.placement === 'bottom') {
                this.renderer.setStyle(this.popupContainer.nativeElement, 'left', '-' + width / 2 + 'px');
            }
        });
    }
}
CltPopoverComponent.decorators = [
    { type: Component, args: [{
                selector: 'clt-popover',
                template: `<div class="clt-popover">
    <div class="clt-popover-container {{placement}}" #popupContainer>
        <ng-content select="[popover=content]"></ng-content>
    </div>
    <ng-content></ng-content>
</div>`,
                styles: [`.formGroup{margin-bottom:10px}.formGroup label{width:100%}:host .clt-popover{position:relative;width:100%}:host .clt-popover .clt-popover-container{padding:10px;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:.1s;transition-duration:.1s;-webkit-transition-timing-function:cubic-bezier(.075,.82,.165,1);transition-timing-function:cubic-bezier(.075,.82,.165,1);visibility:hidden;border:1px solid #d2d2d2;position:absolute;z-index:1;background-color:#fff;border-radius:3px}:host .clt-popover .clt-popover-container::after{content:"";position:absolute;border-style:solid;border-width:5px}:host .clt-popover .clt-popover-container.right{left:calc(100% + 10px)}:host .clt-popover .clt-popover-container.right::after{right:100%;top:50%;margin-top:-10px;border-color:transparent #b9b9b9 transparent transparent}:host .clt-popover .clt-popover-container.left{right:calc(100% + 10px)}:host .clt-popover .clt-popover-container.left::after{left:100%;top:50%;margin-top:-10px;border-color:transparent transparent transparent #b9b9b9}:host .clt-popover .clt-popover-container.bottom{top:calc(100% + 10px);left:-101.5px;margin-left:50%}:host .clt-popover .clt-popover-container.bottom::after{left:50%;margin-left:-5px;bottom:100%;border-color:transparent transparent #b9b9b9}:host .clt-popover .clt-popover-container.top{bottom:calc(100% + 10px);left:-101.5px;margin-left:50%}:host .clt-popover .clt-popover-container.top::after{left:50%;margin-left:-5px;top:100%;border-color:#b9b9b9 transparent transparent}:host ::ng-deep ul{list-style:none;margin:0;padding:0}`]
            },] },
];
/** @nocollapse */
CltPopoverComponent.ctorParameters = () => [
    { type: Renderer2, },
];
CltPopoverComponent.propDecorators = {
    "open": [{ type: Input, args: ['open',] },],
    "placement": [{ type: Input, args: ['placement',] },],
    "popupContainer": [{ type: ViewChild, args: ['popupContainer',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CltCoreModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: CltCoreModule,
            providers: [
                CltCommonService,
            ]
        };
    }
}
CltCoreModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    CltClickStopPropagationDirective,
                    CltSpinningIconDirective,
                    CltToId,
                    CltPopoverComponent,
                ],
                imports: [
                    CommonModule,
                ],
                exports: [
                    CltSpinningIconDirective,
                    CltToId,
                    CltPopoverComponent,
                    CltClickStopPropagationDirective
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CltDisplayItemDirective {
    /**
     * @param {?} elem
     * @param {?} renderer
     * @param {?} cdr
     */
    constructor(elem, renderer, cdr) {
        this.elem = elem;
        this.renderer = renderer;
        this.cdr = cdr;
        this.display = true;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.name && this.storage) {
            const /** @type {?} */ display = JSON.parse(window.localStorage.getItem(`display`));
            if (display &&
                display.hasOwnProperty([this.storage]) &&
                display[this.storage].hasOwnProperty([this.name]) &&
                display[this.storage][this.name] !== undefined &&
                display[this.storage][this.name] !== null) {
                this.display = display[this.storage][this.name];
            }
        }
        this.cdr.detectChanges();
        this.toggle({ checked: this.display });
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    toggle({ checked }) {
        this.display = checked;
        if (checked)
            this.renderer.setStyle(this.elem.nativeElement, 'display', 'initial');
        else
            this.renderer.setStyle(this.elem.nativeElement, 'display', 'none');
        if (this.name && this.storage) {
            let /** @type {?} */ display = JSON.parse(window.localStorage.getItem(`display`));
            if (!display) {
                display = {};
                display[this.storage] = {};
            }
            display[this.storage][this.name] = checked;
            window.localStorage.setItem(`display`, JSON.stringify(display));
        }
    }
}
CltDisplayItemDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cltDisplayItem]',
                exportAs: 'cltDisplayItem'
            },] },
];
/** @nocollapse */
CltDisplayItemDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ChangeDetectorRef, },
];
CltDisplayItemDirective.propDecorators = {
    "name": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CltDisplayComponent {
    constructor() {
        this.elements = [];
        this.visibleChange = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('visible')) {
            this.visibleChange.emit(changes["visible"].currentValue);
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.storage)
            this.elements.map(component => component.storage = this.storage);
    }
    /**
     * @param {?} boolean
     * @return {?}
     */
    changeVisibleState(boolean) {
        this.visible = boolean;
        this.visibleChange.emit(boolean);
    }
}
CltDisplayComponent.decorators = [
    { type: Component, args: [{
                selector: 'clt-display',
                template: `<clt-side-panel [visible]="visible" (visibleChange)="changeVisibleState($event)" position="right">
  <h1>Affichage</h1>
  <ul>
    <li *ngFor="let component of elements">
      <div>
        <input type="checkbox" (onChange)="component.toggle($event)" [value]="component.display" />
      </div>
      <div class="display-name">{{component.name}}</div>
    </li>
  </ul>
</clt-side-panel>

<ng-content></ng-content>`,
                styles: [`li{display:-webkit-box;display:-ms-flexbox;display:flex}li .display-name{margin-left:10px;font-weight:700}:host{width:100%}`]
            },] },
];
/** @nocollapse */
CltDisplayComponent.propDecorators = {
    "storage": [{ type: Input },],
    "visible": [{ type: Input },],
    "elements": [{ type: Input },],
    "visibleChange": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Describe a notification
 * @record
 */

/**
 * Control the sidebar outside the component
 */
class CltNotificationsService {
    /**
     * Fetch delay from localStorage
     */
    constructor() {
        /**
         * Component watch this variable to open/close the sidebar
         */
        this.notifications = [];
        /**
         * Emit event that contains complete notification on add
         */
        this.addEvent = new Subject();
        /**
         * Emit event that contains id on remove
         */
        this.removeEvent = new Subject();
        let /** @type {?} */ notificationsDelay = +localStorage.getItem('notificationsDelay');
        if (notificationsDelay < 500) {
            notificationsDelay = 6000;
            localStorage.setItem('notificationsDelay', '6000');
        }
    }
    /**
     * Open sidebar
     * @param {?} title
     * @param {?} msg
     * @return {?}
     */
    add(title, msg) {
        const /** @type {?} */ notif = {
            id: v4(),
            title: title || '',
            msg: msg || ''
        };
        this.addEvent.next(notif);
        notif.timeout = this.defaultTimeout(notif);
        this.notifications.push(notif);
        return notif;
    }
    /**
     * Time to display notification on screen. (Localstorage key: notificationsDelay)
     * @param {?} notif
     * @return {?}
     */
    defaultTimeout(notif) {
        return setTimeout(() => {
            this.delete(notif.id);
        }, +localStorage.getItem('notificationsDelay'));
    }
    /**
     * update notification from id
     * @param {?} id
     * @param {?} _notif
     * @return {?}
     */
    updateNotif(id, _notif) {
        this.notifications.map(notif => {
            if (notif.id === id) {
                if (_notif.msg)
                    notif.msg = _notif.msg;
                if (_notif.title)
                    notif.title = _notif.title;
                clearTimeout(notif.timeout);
                notif.timeout = this.defaultTimeout(notif);
            }
        });
    }
    /**
     * delete a notification
     * @param {?} id
     * @return {?}
     */
    delete(id) {
        this.removeEvent.next(id);
        this.notifications = this.notifications.filter(notif => notif.id !== id);
    }
    /**
     * Delete all notifications
     * @return {?}
     */
    deleteAll() {
        this.notifications.map(notif => this.delete(notif.id));
    }
}
CltNotificationsService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
CltNotificationsService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Display an mini-popup
 */
class CltNotificationsComponent {
    /**
     * Load dependencies instances
     * @param {?} ns
     * @param {?} renderer2
     */
    constructor(ns, renderer2) {
        this.ns = ns;
        this.renderer2 = renderer2;
        this._notifications = [];
        this.ns.addEvent.subscribe(data => this._notifications.push(data));
        this.ns.removeEvent.subscribe((id) => this.deleteNotif(id));
    }
    /**
     * launch css animations and delete notification from id
     * @param {?} id
     * @return {?}
     */
    deleteNotif(id) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            const /** @type {?} */ htmlNotif = yield this.getHtmlNotif(id);
            if (!htmlNotif)
                return;
            this.renderer2.addClass(htmlNotif, 'deleteNotif');
            setTimeout(() => {
                this._notifications = this._notifications.filter(notif => notif.id !== id);
                resolve();
            }, 500);
        }));
    }
    /**
     * delete All notifications
     * @return {?}
     */
    deleteAll() {
        return each(this.htmlNotifications, htmlNotif => {
            this.deleteNotif(htmlNotif.nativeElement.id);
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve();
                }, 50);
            });
        });
    }
    /**
     * Get HTML ref of the concern id
     * @param {?} id
     * @return {?}
     */
    getHtmlNotif(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const /** @type {?} */ htmlNotif = yield filter(this.htmlNotifications, _htmlNotif => _htmlNotif.nativeElement.id === id);
            if (htmlNotif.length)
                return htmlNotif.pop().nativeElement;
        });
    }
}
CltNotificationsComponent.decorators = [
    { type: Component, args: [{
                selector: 'clt-notifications',
                template: `<div id="notifications">
    <div id="closeAll" *ngIf='_notifications.length' (click)="deleteAll()">
        <i class="fa fa-trash" aria-hidden="true"></i>
    </div>
    <div class="notifsWrapper">
        <div class="notifWrapper" (click)="ns.delete(notif.id)" #notifModel *ngFor="let notif of _notifications" [id]="notif.id">
            <div class="notifContainer">
                <div class="title">
                    {{notif.title}}
                </div>
                <div class="msg">
                    {{notif.msg}}
                </div>
            </div>
        </div>
    </div>
</div>`,
                styles: [`.formGroup{margin-bottom:10px}.formGroup label{width:100%}@-webkit-keyframes openNotif{0%{max-height:0}to{max-height:400px}}@keyframes openNotif{0%{max-height:0}to{max-height:400px}}@-webkit-keyframes closeNotif{0%{max-height:400px}to{max-height:0}}@keyframes closeNotif{0%{max-height:400px}to{max-height:0}}#notifications{z-index:100000;position:fixed;bottom:20px;right:20px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}#notifications #closeAll{text-align:right}#notifications #closeAll i{font-size:1.7em;background-color:#343a40;color:#fff;padding:10px;-webkit-box-shadow:0 0 10px grey;box-shadow:0 0 10px grey}#notifications .notifWrapper{-webkit-animation-name:openNotif;animation-name:openNotif;-webkit-animation-duration:.4s;animation-duration:.4s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;overflow-y:hidden;-webkit-box-shadow:0 0 10px grey;box-shadow:0 0 10px grey;margin-top:10px;background-color:#343a40;color:#fff}#notifications .notifWrapper.deleteNotif{-webkit-animation-name:closeNotif;animation-name:closeNotif;-webkit-animation-duration:.4s;animation-duration:.4s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}#notifications .notifWrapper .notifContainer{padding:10px;width:400px}#notifications .notifWrapper .notifContainer .title{width:100%;border-bottom:1px solid #fff}#notifications .notifWrapper .notifContainer .msg{width:100%;padding-top:10px}`]
            },] },
];
/** @nocollapse */
CltNotificationsComponent.ctorParameters = () => [
    { type: CltNotificationsService, },
    { type: Renderer2, },
];
CltNotificationsComponent.propDecorators = {
    "htmlNotifications": [{ type: ViewChildren, args: ['notifModel',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Display a popup
 */
class CltBodyDirective {
    /**
     * @param {?} templateRef
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
CltBodyDirective.decorators = [
    { type: Directive, args: [{
                selector: '[clt-popup-body]'
            },] },
];
/** @nocollapse */
CltBodyDirective.ctorParameters = () => [
    { type: TemplateRef, },
];
class CltPopupComponent {
    /**
     * @param {?} renderer
     * @param {?} cdr
     */
    constructor(renderer, cdr) {
        this.renderer = renderer;
        this.cdr = cdr;
        this.body = '';
        this.ghost = false;
        this.cancelButton = 'Annuler';
        this.validateButton = 'Valider';
        this.direction = 'center';
        this.noActions = false;
        this.openEvent = new EventEmitter();
        this._open = false;
        this.visible = false;
        this.visibleChange = new EventEmitter();
        this.state = 'close';
        this.className = 'popup';
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.cdr.detectChanges();
        this.keyEvents = window.onkeyup = (e) => {
            const /** @type {?} */ key = e.keyCode ? e.keyCode : e.which;
            if (key === 27 && this._open) {
                console.log('esc');
                this.close();
            }
        };
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        window.removeEventListener('keyup', this.keyEvents);
    }
    /**
     * @param {?=} context
     * @return {?}
     */
    open(context) {
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
    /**
     * @param {?=} $event
     * @return {?}
     */
    close($event) {
        if ($event) {
            this.stopPropagation($event);
        }
        this._open = false;
        this.state = 'close';
        setTimeout(_ => { this.visibleChange.emit(this._open); });
        if (this.result) {
            this.result.unsubscribe();
            this.result = null;
        }
    }
    /**
     * @param {?} form
     * @return {?}
     */
    bindForm(form) {
        this.form = form;
        return this;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    stopPropagation($event) {
        $event.stopPropagation();
    }
    /**
     * @param {?} isValidate
     * @param {?=} $event
     * @param {?=} value
     * @return {?}
     */
    out(isValidate, $event, value) {
        if ($event) {
            $event.preventDefault();
        }
        if (!isValidate)
            this.result.next(null);
        else if (this.form)
            this.result.next(this.form.value);
        else
            this.result.next(value || 'ok');
        this.close();
    }
}
CltPopupComponent.decorators = [
    { type: Component, args: [{
                selector: 'clt-popup',
                template: `<div class="host {{direction}} {{ghost ? 'ghost' : ''}}" (click)="close($event)" [@openState]="state" #host>
  <div class="host-container" *ngIf="_open" [ngStyle]="{width:width, height:height}" (click)="stopPropagation($event)" #hostContainer>
    <div class="host-title" #titleRef [ngClass]='titleRef.children.length ? "": "nothing"'>
      <ng-content select="[title]"></ng-content>
      <div *ngIf='!titleRef?.children?.length && title'>
        {{title}}
      </div>
    <div class="close" (click)="out(false)">x</div>
    </div>
    <div class="host-body">
      <div *ngIf='body;else bodyTemplateContainer'>
        {{body}}
      </div>
      <ng-template #bodyTemplateContainer>
        <ng-container [ngTemplateOutlet]="bodyTemplate?.templateRef"></ng-container>
      </ng-template>
    </div>
    <div class="host-actions" *ngIf='!noActions'>
      <button class="host-action host-cancel" (click)="out(false)">{{cancelButton}}</button>
      <button class="host-action host-ok" [ngClass]="{'host-disable': form?.invalid}" [disabled]="form?.invalid" (click)="out(true)">{{validateButton}}</button>
    </div>
  </div>
</div>`,
                styles: [`.host .host-container .host-title{padding:10px;font-weight:700;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:var(--headerBgColor);color:var(--headerTextColor);border-width:var(--headerBorderWidth);border-color:var(--headerBorderColor);font-weight:var(--headerFontWeight)}.host{position:absolute;bottom:0;left:0;width:100vw;height:100vh;z-index:1000;background-color:rgba(0,0,0,.8);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;opacity:0}.host .host-container{-webkit-box-shadow:0 0 20px 1px #000;box-shadow:0 0 20px 1px #000;min-width:400px;background-color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;max-height:100vh;max-width:100vw;pointer-events:auto}.host .host-container .host-title{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.host .host-container .host-title.nothing{padding:0}.host .host-container .host-title .close{border:none;background-color:var(--headerBgColorAccent);color:var(--headerTextColor);padding:3px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:15px;height:15px;cursor:pointer}.host .host-container .host-title .close:hover{background-color:var(--stateHoverBgColor)}.host .host-container .host-body{padding:10px;-webkit-box-flex:1;-ms-flex:1;flex:1;overflow-y:auto}.host .host-container .host-body::ng-deep>.ng-star-inserted{height:100%}.host .host-container .host-actions{display:-webkit-box;display:-ms-flexbox;display:flex}.host .host-container .host-actions .host-action{padding:10px;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#fff;cursor:pointer;border:none}.host .host-container .host-actions .host-action.host-ok{background-color:#28a745}.host .host-container .host-actions .host-action.host-cancel{background-color:#dc3545}.host .host-container .host-actions .host-action.host-disable{background-color:#a2a2a2}.host.bottom,.host.right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.host.left,.host.top{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.host.left,.host.right{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.host.left>.host-container,.host.right>.host-container{height:100%}.host.bottom,.host.top{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.host.bottom>.host-container,.host.top>.host-container{width:100%}.host.ghost{pointer-events:none;background-color:transparent}`],
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
            },] },
];
/** @nocollapse */
CltPopupComponent.ctorParameters = () => [
    { type: Renderer2, },
    { type: ChangeDetectorRef, },
];
CltPopupComponent.propDecorators = {
    "bodyTemplate": [{ type: ContentChild, args: [CltBodyDirective,] },],
    "host": [{ type: ViewChild, args: ['host',] },],
    "hostContainer": [{ type: ViewChild, args: ['hostContainer',] },],
    "body": [{ type: Input },],
    "ghost": [{ type: Input },],
    "title": [{ type: Input },],
    "cancelButton": [{ type: Input },],
    "validateButton": [{ type: Input },],
    "width": [{ type: Input },],
    "height": [{ type: Input },],
    "direction": [{ type: Input },],
    "noActions": [{ type: Input },],
    "openEvent": [{ type: Output, args: ['openEvent',] },],
    "visible": [{ type: Input },],
    "visibleChange": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * SidePanel Component
 * \@example
 * const sp = new SidePanelService()
 * const open = (template, context = {})=>sp.open(template, context)
 *
 * <div style="display:flex;">
 * |  <div>
 * |  |  <button (click)="open(template)">Open with template</button>
 * |  |  <br/>
 * |  |  <br/>
 * |  |  <input type="text" #inputContext placeholder="Enter a name here"/>
 * |  |  <button (click)="open(template, {value: inputContext.value})">Open with context</button>
 * |  </div>
 * |  <sidePanel></sidePanel>
 * </div>
 * <ng-template #template let-value="value"> Hey {{value}} !</ng-template>
 */
class CltSidePanelComponent extends CltPopupComponent {
    /**
     * Load dependencies
     * @param {?} renderer
     * @param {?} cdr
     */
    constructor(renderer, cdr) {
        super(renderer, cdr);
        this.className = 'sidepanel';
        this.direction = 'right';
    }
}
CltSidePanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'clt-side-panel',
                template: `<div class="host {{direction}} {{ghost ? 'ghost' : ''}}" (click)="close($event)" [@openState]="state" #host>
  <div class="host-container" *ngIf="_open" [ngStyle]="{width:width, height:height}" (click)="stopPropagation($event)" #hostContainer>
    <div class="host-title" #titleRef [ngClass]='titleRef.children.length ? "": "nothing"'>
      <ng-content select="[title]"></ng-content>
      <div *ngIf='!titleRef?.children?.length && title'>
        {{title}}
      </div>
    <div class="close" (click)="out(false)">x</div>
    </div>
    <div class="host-body">
      <div *ngIf='body;else bodyTemplateContainer'>
        {{body}}
      </div>
      <ng-template #bodyTemplateContainer>
        <ng-container [ngTemplateOutlet]="bodyTemplate?.templateRef"></ng-container>
      </ng-template>
    </div>
    <div class="host-actions" *ngIf='!noActions'>
      <button class="host-action host-cancel" (click)="out(false)">{{cancelButton}}</button>
      <button class="host-action host-ok" [ngClass]="{'host-disable': form?.invalid}" [disabled]="form?.invalid" (click)="out(true)">{{validateButton}}</button>
    </div>
  </div>
</div>`,
                styles: [`.host .host-container .host-title{padding:10px;font-weight:700;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:var(--headerBgColor);color:var(--headerTextColor);border-width:var(--headerBorderWidth);border-color:var(--headerBorderColor);font-weight:var(--headerFontWeight)}.host{position:absolute;bottom:0;left:0;width:100vw;height:100vh;z-index:1000;background-color:rgba(0,0,0,.8);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;opacity:0}.host .host-container{-webkit-box-shadow:0 0 20px 1px #000;box-shadow:0 0 20px 1px #000;min-width:400px;background-color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;max-height:100vh;max-width:100vw;pointer-events:auto}.host .host-container .host-title{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.host .host-container .host-title.nothing{padding:0}.host .host-container .host-title .close{border:none;background-color:var(--headerBgColorAccent);color:var(--headerTextColor);padding:3px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:15px;height:15px;cursor:pointer}.host .host-container .host-title .close:hover{background-color:var(--stateHoverBgColor)}.host .host-container .host-body{padding:10px;-webkit-box-flex:1;-ms-flex:1;flex:1;overflow-y:auto}.host .host-container .host-body::ng-deep>.ng-star-inserted{height:100%}.host .host-container .host-actions{display:-webkit-box;display:-ms-flexbox;display:flex}.host .host-container .host-actions .host-action{padding:10px;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#fff;cursor:pointer;border:none}.host .host-container .host-actions .host-action.host-ok{background-color:#28a745}.host .host-container .host-actions .host-action.host-cancel{background-color:#dc3545}.host .host-container .host-actions .host-action.host-disable{background-color:#a2a2a2}.host.bottom,.host.right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.host.left,.host.top{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.host.left,.host.right{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.host.left>.host-container,.host.right>.host-container{height:100%}.host.bottom,.host.top{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.host.bottom>.host-container,.host.top>.host-container{width:100%}.host.ghost{pointer-events:none;background-color:transparent}`],
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
            },] },
];
/** @nocollapse */
CltSidePanelComponent.ctorParameters = () => [
    { type: Renderer2, },
    { type: ChangeDetectorRef, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CltOverlayModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: CltOverlayModule,
            providers: [
                CltNotificationsService,
            ]
        };
    }
}
CltOverlayModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [
                    CltNotificationsComponent,
                    CltPopupComponent,
                    CltBodyDirective,
                    CltSidePanelComponent
                ],
                exports: [
                    CltNotificationsComponent,
                    CltPopupComponent,
                    CltBodyDirective,
                    CltSidePanelComponent
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CltDisplayModule {
}
CltDisplayModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    CltOverlayModule
                ],
                declarations: [CltDisplayComponent, CltDisplayItemDirective],
                exports: [CltDisplayComponent, CltDisplayItemDirective]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Directive that debounce an element that supports keyListener
 * \@example
 * <input type="text" debounce-input (debounce)="doSomething($event.target.value)" [debounceTime]="200" />
 */
class CltDebounceInputDirective {
    constructor() {
        /**
         * Describe the debounce time; Default: 500ms
         */
        this.debounceTime = 500;
        /**
         * Emit and call function after the debounce time
         */
        this.debounce = new EventEmitter();
        /**
         * Observable that register the flow
         */
        this.subject = new Subject$1();
    }
    /**
     * Register observable pipe that describe the flow of the debounce directive
     * @return {?}
     */
    ngOnInit() {
        this.createSubsription();
    }
    /**
     * @return {?}
     */
    createSubsription() {
        this.subscription = this.subject.pipe(debounceTime(this.debounceTime)).subscribe(e => this.debounce.emit(e));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["debounceTime"] && this.subject.observers[0])
            this.subject.observers[0]['dueTime'] = changes["debounceTime"].currentValue;
    }
    /**
     * Unregister observable on the component destruct
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    /**
     * Trigger keyup event and inject it to the pipe of the debounce
     * @param {?} event
     * @return {?}
     */
    keyupEvent(event) {
        event.preventDefault();
        event.stopPropagation();
        this.subject.next(event);
    }
}
CltDebounceInputDirective.decorators = [
    { type: Directive, args: [{
                selector: '[clt-debounce-input]'
            },] },
];
/** @nocollapse */
CltDebounceInputDirective.propDecorators = {
    "debounceTime": [{ type: Input },],
    "debounce": [{ type: Output },],
    "keyupEvent": [{ type: HostListener, args: ['keyup', ['$event'],] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Load differents directive with an array of key value
 * \@example
 * <input type="text" [formControlName]="'hello'" [validators]="form.controls['hello']"/>
 */
class CltShowPasswordDirective {
    /**
     * Load some dependencies
     * @param {?} renderer
     * @param {?} hostElement
     */
    constructor(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const /** @type {?} */ container = this.renderer.createElement('div');
        this.renderer.setStyle(container, 'position', 'relative');
        const /** @type {?} */ div = this.renderer.createElement('i');
        this.renderer.addClass(div, 'fa');
        this.renderer.addClass(div, 'fa-eye-slash');
        this.renderer.addClass(div, 'toggle-eye');
        this.renderer.setStyle(div, 'position', 'absolute');
        this.renderer.setStyle(div, 'top', 0);
        this.renderer.setStyle(div, 'right', 0);
        this.renderer.setStyle(div, 'display', 'inherit');
        this.renderer.setStyle(div, 'cursor', 'pointer');
        this.renderer.listen(div, 'click', event => {
            const /** @type {?} */ input = this.hostElement.nativeElement;
            if (input.type === 'password') {
                input.type = 'text';
                this.renderer.addClass(div, 'fa-eye');
                this.renderer.removeClass(div, 'fa-eye-slash');
            }
            else {
                input.type = 'password';
                this.renderer.removeClass(div, 'fa-eye');
                this.renderer.addClass(div, 'fa-eye-slash');
            }
        });
        const /** @type {?} */ parent = this.hostElement.nativeElement.parentNode;
        this.renderer.insertBefore(parent, container, this.renderer.nextSibling(this.hostElement.nativeElement));
        this.renderer.appendChild(container, this.hostElement.nativeElement);
        this.renderer.appendChild(container, div);
        // this.renderer.removeChild(parent,this.hostElement.nativeElement)
    }
}
CltShowPasswordDirective.decorators = [
    { type: Directive, args: [{
                selector: '[clt-show-password]',
            },] },
];
/** @nocollapse */
CltShowPasswordDirective.ctorParameters = () => [
    { type: Renderer2, },
    { type: ElementRef, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Load differents directive with an array of key value
 * \@example
 * <input type="text" [formControlName]="'hello'" [validators]="form.controls['hello']"/>
 */
class CltValidatorsDirective {
    /**
     * Load some dependencies
     * @param {?} renderer
     * @param {?} hostElement
     */
    constructor(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
    }
    /**
     * Launch validator check for the first time init
     * @return {?}
     */
    ngAfterViewChecked() {
        this.onInputChange();
    }
    /**
     * Change appearance of input with goodInput/badInout class
     * @return {?}
     */
    onInputChange() {
        if (this.hostElement.nativeElement.disabled) {
            this.renderer.removeClass(this.hostElement.nativeElement, 'badInput');
            this.renderer.removeClass(this.hostElement.nativeElement, 'goodInput');
            return;
        }
        if (this.cltValidators.valid) {
            this.renderer.addClass(this.hostElement.nativeElement, 'goodInput');
            this.renderer.removeClass(this.hostElement.nativeElement, 'badInput');
        }
        else {
            this.renderer.addClass(this.hostElement.nativeElement, 'badInput');
            this.renderer.removeClass(this.hostElement.nativeElement, 'goodInput');
        }
    }
}
CltValidatorsDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cltValidators]',
            },] },
];
/** @nocollapse */
CltValidatorsDirective.ctorParameters = () => [
    { type: Renderer2, },
    { type: ElementRef, },
];
CltValidatorsDirective.propDecorators = {
    "cltValidators": [{ type: Input },],
    "onInputChange": [{ type: HostListener, args: ['input',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Encapsule an input and all validators attached
 * \@example
 *
 *  <form (submit)="" [formGroup]="form">
 * | <input type="text" [formControlName]="'email'" placeholder="Email">
 * | <formErrors [model]="form.controls['email']"></formErrors>
 * </form>
 */
class CltFormErrorsComponent {
}
CltFormErrorsComponent.decorators = [
    { type: Component, args: [{
                selector: 'clt-form-errors',
                template: `<!-- {{model.errors | json}} -->

<ul *ngIf="model && model.errors">
    <li *ngIf="model.errors.pattern" class="hint">
         <ng-container *ngIf="patternName; else notPatternName">
            {{patternName}}
        </ng-container>
        <ng-template #notPatternName>
            Pattern: {{model.errors.pattern.requiredPattern}}
        </ng-template>
    </li>
    <li *ngIf="model.errors.required" class="hint">
        Obligatoire
    </li>
    <li *ngIf="model.errors.minlength" class="hint">
        Contient au moins {{model.errors.minlength.requiredLength}} caractères
    </li>
    <li *ngIf="model.errors.maxlength" class="hint">
        Contient au plus {{model.errors.maxlength.requiredLength}} caractères
    </li>
    <li *ngIf="model.errors.recheckPassphrase" class="hint">
        Doit correspondre à la phrase de passe
    </li>
    <li *ngIf="model.errors.email" class="hint">
        Doit être un email
    </li>
</ul>
`,
                styles: [`.formGroup{margin-bottom:10px}.formGroup label{width:100%}:host{display:inline-block;font-size:.7em;width:100%;min-height:.7em;top:-2px;line-height:0;text-align:right;color:#dc3545}`]
            },] },
];
/** @nocollapse */
CltFormErrorsComponent.propDecorators = {
    "model": [{ type: Input, args: ['model',] },],
    "patternName": [{ type: Input, args: ['patternName',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CltFormsModule {
}
CltFormsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    CltFormErrorsComponent,
                    CltDebounceInputDirective,
                    CltValidatorsDirective,
                    CltShowPasswordDirective,
                ],
                exports: [
                    CltFormErrorsComponent,
                    CltDebounceInputDirective,
                    CltValidatorsDirective,
                    CltShowPasswordDirective,
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Check if passphrase are the same
 */
class CltPassword {
    /**
     * check function
     * @param {?} AC
     * @return {?}
     */
    static MatchPassword(AC) {
        const /** @type {?} */ confirmPassword = AC.value.passphrase;
        const /** @type {?} */ password = AC.value.recheckPassphrase; // to get value in input tag
        if (confirmPassword !== password) {
            return { recheckPassphrase: true };
        }
        else
            return null;
    }
    /**
     * Return a password
     * @param {?=} length
     * @return {?}
     */
    static GeneratePassword(length = 12) {
        const /** @type {?} */ charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=';
        let /** @type {?} */ retVal = '';
        for (let /** @type {?} */ i = 0, /** @type {?} */ n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CltMapMapService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
    }
    /**
     * @param {?} coordinates
     * @return {?}
     */
    convertTolatLong(coordinates) {
        coordinates = this.transformToFloat(coordinates);
        return OlProj.transform(coordinates, 'EPSG:3857', 'EPSG:4326');
    }
    /**
     * @param {?} lonLat
     * @return {?}
     */
    fromLonLat(lonLat) {
        lonLat = this.transformToFloat(lonLat);
        return OlProj.fromLonLat(lonLat);
    }
    /**
     * @param {?} coordinates
     * @return {?}
     */
    transformToFloat(coordinates) {
        return coordinates.map(coord => {
            if (typeof coord === 'string')
                return parseFloat(coord);
            return coord;
        });
    }
    /**
     * @param {?} lonlat
     * @return {?}
     */
    reverse(lonlat) {
        return this.http.get(`http://nominatim.openstreetmap.org/reverse?format=json&lon=${lonlat[0]}&lat=${lonlat[1]}`)
            .toPromise()
            .then((reverse) => {
            if (!reverse.address)
                reverse.address = {};
            reverse.address.longitude = lonlat[0];
            reverse.address.latitude = lonlat[1];
            return reverse.address;
        });
    }
    /**
     * @param {?} feature
     * @return {?}
     */
    reverseFromFeature(feature) {
        const /** @type {?} */ coordinates = feature.getGeometry().getCoordinates();
        return this.reverse(this.convertTolatLong(coordinates));
    }
    /**
     * @param {?} icon
     * @return {?}
     */
    createStyleIcon(icon) {
        return new Style({
            image: new Icon(icon)
        });
    }
    /**
     * @param {?=} color
     * @return {?}
     */
    createBuildingStyleIcon(color = '#8959A8') {
        return this.createStyleIcon({
            color: color,
            crossOrigin: 'anonymous',
            src: '/assets/img/dot-marker.png'
        });
    }
    /**
     * @return {?}
     */
    createAddressStyleIcon() {
        return this.createStyleIcon({
            anchor: [0.5, 46],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            src: '/assets/img/address-marker.png'
        });
    }
}
CltMapMapService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
CltMapMapService.ctorParameters = () => [
    { type: HttpClient, },
];
/** @nocollapse */ CltMapMapService.ngInjectableDef = defineInjectable({ factory: function CltMapMapService_Factory() { return new CltMapMapService(inject(HttpClient)); }, token: CltMapMapService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CltMapLayerComponent {
    /**
     * @param {?} mapService
     */
    constructor(mapService) {
        this.mapService = mapService;
        this.overlays = [];
        this.nbFeatures = 0;
        this.featuremove = new EventEmitter();
        this.createLayer();
    }
    /**
     * @return {?}
     */
    getSource() {
        return this.olLayer ? this.olLayer.getSource() : undefined;
    }
    /**
     * @return {?}
     */
    createLayer() {
        const /** @type {?} */ layer = new VectorLayer({
            source: new VectorSource()
        });
        this.olLayer = layer;
        return this.olLayer;
    }
    /**
     * @param {?} geomOrFeature
     * @param {?=} opts
     * @return {?}
     */
    addFeature(geomOrFeature, opts) {
        if (geomOrFeature instanceof Feature) {
            this.olLayer.getSource().addFeature(geomOrFeature);
            if (opts && opts.overlay)
                this.addOverlay(geomOrFeature, opts.overlay);
            this.nbFeatures++;
            return geomOrFeature;
        }
        const /** @type {?} */ newFeature = new Feature({
            geometry: geomOrFeature,
        });
        newFeature.on('change', ev => {
            this.featuremove.emit(ev);
            if (ev.target.hasOwnProperty('overlay') && ev.target.overlay._open)
                ev.target.overlay.open();
        });
        newFeature.opts = opts || {};
        if (opts && opts.style)
            newFeature.setStyle(opts.style);
        if (opts && opts.infos)
            newFeature.setProperties(opts.infos);
        if (opts && opts.overlay)
            this.addOverlay(newFeature, opts.overlay);
        this.olLayer.getSource().addFeature(newFeature);
        this.nbFeatures++;
        return newFeature;
    }
    /**
     * @param {?} feature
     * @param {?} infos
     * @param {?=} positioning
     * @param {?=} offset
     * @return {?}
     */
    addOverlay(feature, infos, positioning = 'bottom-center', offset = [0, -25]) {
        const /** @type {?} */ uuid = v4();
        infos.uuid = uuid;
        this.overlays.push(infos);
        const /** @type {?} */ popup = new Overlay({
            positioning,
            stopEvent: true,
            offset: offset
        });
        const /** @type {?} */ overlay = {};
        overlay.opts = infos;
        overlay.instance = popup;
        overlay.open = () => {
            overlay._open = true;
            this.overlayDisplay(popup, feature);
        };
        overlay.close = () => {
            overlay._open = false;
            this.overlayHide(popup);
        };
        overlay.toggle = () => {
            overlay._open ? overlay.close() : overlay.open();
        };
        feature.overlay = overlay;
        setTimeout(() => {
            popup.setElement(document.getElementById(uuid));
            this.map.addOverlay(popup);
        }, 0);
        return popup;
    }
    /**
     * @param {?} overlay
     * @param {?} feature
     * @return {?}
     */
    overlayDisplay(overlay, feature) {
        overlay.setPosition(feature.getGeometry().getCoordinates());
    }
    /**
     * @param {?} overlay
     * @return {?}
     */
    overlayHide(overlay) {
        overlay.setPosition(undefined);
    }
    /**
     * @return {?}
     */
    getFeatures() {
        return this.olLayer ? this.olLayer.getSource().getFeatures() : undefined;
    }
    /**
     * @return {?}
     */
    clear() {
        if (this.olLayer) {
            this.olLayer.getSource().clear();
            this.nbFeatures = 0;
            this.overlays = [];
        }
    }
    /**
     * @return {?}
     */
    addModify() {
        this.modify = new Modify({ source: this.olLayer.getSource() });
        if (this.map)
            this.map.addInteraction(this.modify);
        return this.modify;
    }
    /**
     * @return {?}
     */
    removeModify() {
        if (this.map)
            this.map.removeInteraction(this.modify);
        this.modify = undefined;
    }
    /**
     * @param {?} feature
     * @return {?}
     */
    removeFeature(feature) {
        if (feature.hasOwnProperty('overlay')) {
            const /** @type {?} */ i = this.overlays.indexOf(feature.overlay.opts);
            this.overlays.splice(i, 1);
        }
        if (this.olLayer)
            this.olLayer.getSource().removeFeature(feature);
        this.nbFeatures--;
    }
}
CltMapLayerComponent.decorators = [
    { type: Component, args: [{
                selector: 'clt-map-layer',
                template: `<div [id]="overlay.uuid" *ngFor="let overlay of overlays">
  <ng-container *ngTemplateOutlet='overlay.template; context: {$implicit:overlay.context}'></ng-container>
</div>`,
                styles: [``]
            },] },
];
/** @nocollapse */
CltMapLayerComponent.ctorParameters = () => [
    { type: CltMapMapService, },
];
CltMapLayerComponent.propDecorators = {
    "featuremove": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CltMapComponent {
    /**
     * @param {?} mapService
     * @param {?} componentFactoryResolver
     * @param {?} renderer
     */
    constructor(mapService, componentFactoryResolver, renderer) {
        this.mapService = mapService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.renderer = renderer;
        this.initialized = false;
        this.is_init = new Subject();
        this.id = 'map-' + v4();
        this.center = {};
        this.olclick = new EventEmitter();
        this.olchange = new EventEmitter();
        this.oldblclick = new EventEmitter();
        this.olmoveend = new EventEmitter();
        this.olmovestart = new EventEmitter();
        this.olpointerdrag = new EventEmitter();
        this.olpointermove = new EventEmitter();
        this.olpostcompose = new EventEmitter();
        this.olpostrender = new EventEmitter();
        this.olprecompose = new EventEmitter();
        this.olpropertychange = new EventEmitter();
        this.olsingleclick = new EventEmitter();
        this.geocoder = new EventEmitter();
        this.featuremove = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.map = new Map({
            layers: [
                this.defaultLayer ? this.defaultLayer : new Tile({ source: new OSM() })
            ],
            view: new View()
        });
        this.eventManager();
        this.layersComponent.map(layer => {
            this.addLayer(layer);
        });
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        this.map.updateSize();
        return new Promise((resolve, reject) => {
            if (this.initialized || !document.getElementById(this.id))
                return;
            this.initialized = true;
            if (!this.center.latitude || !this.center.longitude) {
                navigator.geolocation.getCurrentPosition(({ coords }) => {
                    this.center.latitude = coords.latitude;
                    this.center.longitude = coords.longitude;
                    this.init().then(resolve).catch(reject);
                }, () => {
                    this.center.latitude = 48.8585535;
                    this.center.longitude = 2.2940681;
                    this.init().then(resolve).catch(reject);
                });
            }
            else
                this.init().then(resolve).catch(reject);
        });
    }
    /**
     * @return {?}
     */
    getView() {
        return this.map.getView();
    }
    /**
     * @return {?}
     */
    getCenter() {
        return this.getView().getCenter();
    }
    /**
     * @return {?}
     */
    getCenterToLonLat() {
        return this.mapService.convertTolatLong(this.getCenter());
    }
    /**
     * @param {?} coordinate
     * @param {?=} zoom
     * @return {?}
     */
    setCenter(coordinate, zoom) {
        this.getView().setCenter(coordinate);
        this.getView().setZoom(zoom || this.zoom || 10);
        // if (this.zoom) this.zoom = undefined;
        return coordinate;
    }
    /**
     * @param {?} coordinate
     * @return {?}
     */
    setCenterFromLonLat(coordinate) {
        return this.setCenter(this.mapService.fromLonLat(coordinate));
    }
    /**
     * @param {?=} component
     * @return {?}
     */
    addLayer(component) {
        if (!component) {
            const /** @type {?} */ layerComponent = this.componentFactoryResolver.resolveComponentFactory(CltMapLayerComponent);
            component = layerComponent.create(this.layersContainer).instance;
        }
        component.map = this.map;
        this.layersComponent.reset([...this.layersComponent.toArray(), component]);
        this.map.addLayer(component.olLayer);
        component.featuremove.subscribe(_ => {
            this.featuremove.emit();
        });
        return component.olLayer;
    }
    /**
     * @param {?=} featureStyle
     * @return {?}
     */
    initGeocoder(featureStyle) {
        this.geocoderControl = new Geocoder('nominatim', {
            provider: 'osm',
            lang: 'fr-FR',
            autoComplete: true,
            autoCompleteMinLength: 4,
            placeholder: 'Rechercher une adresse',
            targetType: 'text-input',
            featureStyle,
            limit: 5,
            countrycodes: 'fr'
        });
        if (this.map)
            this.map.addControl(this.geocoderControl);
        this.geocoderControl.on('addresschosen', (evt) => {
            this.geocoder.emit(evt);
        });
        return this.geocoderControl;
    }
    /**
     * @return {?}
     */
    removeGeocoder() {
        if (!this.map)
            return;
        this.map.removeControl(this.geocoderControl);
        this.map.removeLayer(this.geocoderControl.getLayer());
    }
    /**
     * @return {?}
     */
    init() {
        if (this.height) {
            const /** @type {?} */ elem = this.mapContainer.nativeElement;
            this.renderer.setStyle(elem, 'paddingTop', 0);
            this.renderer.setStyle(elem, 'position', 'relative');
            if (this.height)
                this.renderer.setStyle(elem, 'height', this.height);
        }
        return new Promise((resolve, reject) => {
            this.map.renderSync();
            if (!this.getCenter())
                this.setCenterFromLonLat([this.center.longitude, this.center.latitude]);
            setTimeout(() => {
                this.map.setTarget(this.mapElement.nativeElement);
                resolve();
            }, 0);
        });
    }
    /**
     * @return {?}
     */
    eventManager() {
        this.map.on('singleclick', (event) => {
            event.features = this.map.getFeaturesAtPixel(event.pixel);
            if (event.features)
                event.features.map(f => { if (f.hasOwnProperty('overlay'))
                    f.overlay.toggle(); });
            this.olsingleclick.emit(event);
        });
        const /** @type {?} */ events = [
            'change',
            'click',
            'dblclick',
            'moveend',
            'movestart',
            'pointerdrag',
            'pointermove',
            'postcompose',
            'postrender',
            'precompose',
            'propertychange',
        ];
        events.forEach(ev => {
            const /** @type {?} */ output = 'ol' + ev;
            this.map.on(ev, (event) => {
                if (event.pixel)
                    event.features = this.map.getFeaturesAtPixel(event.pixel);
                this[output].emit(event);
            });
        });
    }
}
CltMapComponent.decorators = [
    { type: Component, args: [{
                selector: 'clt-map',
                template: `<div class="map-container" #mapContainer>
    <div 
        [id]="id" 
        class="map" #map>
        <ng-content></ng-content> <!-- for overlays ... -->
        <ng-template #layersContainer></ng-template>
    </div>
</div>`,
                styles: [`.map-container{position:relative;padding-top:56.25%}.map-container .map{width:100%;min-height:200px;position:absolute;overflow:hidden;top:0;height:100%}`]
            },] },
];
/** @nocollapse */
CltMapComponent.ctorParameters = () => [
    { type: CltMapMapService, },
    { type: ComponentFactoryResolver, },
    { type: Renderer2, },
];
CltMapComponent.propDecorators = {
    "id": [{ type: Input },],
    "height": [{ type: Input },],
    "center": [{ type: Input },],
    "points": [{ type: Input },],
    "defaultLayer": [{ type: Input },],
    "zoom": [{ type: Input },],
    "olclick": [{ type: Output },],
    "olchange": [{ type: Output },],
    "oldblclick": [{ type: Output },],
    "olmoveend": [{ type: Output },],
    "olmovestart": [{ type: Output },],
    "olpointerdrag": [{ type: Output },],
    "olpointermove": [{ type: Output },],
    "olpostcompose": [{ type: Output },],
    "olpostrender": [{ type: Output },],
    "olprecompose": [{ type: Output },],
    "olpropertychange": [{ type: Output },],
    "olsingleclick": [{ type: Output },],
    "geocoder": [{ type: Output },],
    "featuremove": [{ type: Output },],
    "mapElement": [{ type: ViewChild, args: ['map',] },],
    "mapContainer": [{ type: ViewChild, args: ['mapContainer',] },],
    "layersContainer": [{ type: ViewChild, args: ['layersContainer', { read: ViewContainerRef },] },],
    "layersComponent": [{ type: ContentChildren, args: [CltMapLayerComponent,] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CltMapModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: CltMapModule,
            providers: [
                CltMapMapService
            ]
        };
    }
}
CltMapModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    CltMapComponent,
                    CltMapLayerComponent,
                ],
                exports: [
                    CltMapComponent,
                    CltMapLayerComponent,
                ],
                entryComponents: [CltMapLayerComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Navbar Component
 *
 * ng-content:
 *  - [logo] element on the left
 *  - [actions] element on the right
 * \@example
 *  <navbar name="Hygisoft Web">
 * |  <div logo>
 * |  |  <img src="assets/img/logo.png" alt="">
 * |  </div>
 * |  <div right>
 * |  |  <div class="icon">
 * |  |  | <i class="fa fa-user"></i>
 * |  |  </div>
 * |  </div>
 * </navbar>
 */
class CltNavbarComponent {
    /**
     * Load dependencies instances
     */
    constructor() {
        /**
         * Name displaying on left after icon
         */
        this.name = '';
    }
}
CltNavbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'clt-navbar',
                template: `<div id="navbar" [ngStyle]="{'background-image': img ? 'url(img)' : ''}">
  <div id="leftRight">
    <div id="left">
      <div id="logoContainer">
        <ng-content select="[logo]"></ng-content>
      </div>
      <div id="description">
        {{name}}
      </div>
    </div>
    <div id="right">
      <ng-content selector="[right]"></ng-content>
    </div>
  </div>
</div>`,
                styles: [`.formGroup{margin-bottom:10px}.formGroup label{width:100%}#navbar{height:60px;position:relative;max-height:60px!important;color:var(--headerTextColor);background-color:var(--headerBgColor);-webkit-box-shadow:0 2px 11px #00000080;box-shadow:0 2px 11px #00000080}#navbar i{color:var(--headerTextColor)!important;font-size:2.5rem!important}#navbar #leftRight{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%}#navbar #leftRight #left{height:100%;padding-left:5px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}#navbar #leftRight #left #logoContainer{height:80%}#navbar #leftRight #left #logoContainer ::ng-deep [logo]{height:100%;border-radius:100%;overflow:hidden}#navbar #leftRight #left #logoContainer ::ng-deep [logo] img{height:100%}#navbar #leftRight #left #description{margin-left:10px;color:#fff;font-size:1.2em}#navbar #leftRight::ng-deep #right>[right]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;margin-right:10px}#navbar #leftRight::ng-deep #right>[right] i{border:none;background-color:var(--headerBgColor);color:var(--headerTextColor);padding:3px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:1.7em}#navbar #leftRight::ng-deep #right>[right] i:hover{background-color:var(--stateHoverBgColor)}`]
            },] },
];
/** @nocollapse */
CltNavbarComponent.ctorParameters = () => [];
CltNavbarComponent.propDecorators = {
    "name": [{ type: Input, args: ['name',] },],
    "img": [{ type: Input, args: ['img',] },],
    "url": [{ type: Input, args: ['url',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Control the sidebar outside the component
 */
class CltSideBarService {
    constructor() {
        /**
         * Component watch this variable to open/close the sidebar
         */
        this._open = false;
    }
    /**
     * Open sidebar
     * @return {?}
     */
    open() {
        this._open = true;
    }
    /**
     * Close sidebar
     * @return {?}
     */
    close() {
        this._open = false;
    }
    /**
     * Toggle sidebar
     * @return {?}
     */
    toggle() {
        this._open = !this._open;
    }
}
CltSideBarService.decorators = [
    { type: Injectable },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Item present in sidebar
 * @record
 */

/**
 * Configuration object of the sidebar
 * @record
 */

/**
 * Display Sidebar on the app component
 * \@example
 * const conf: Configuration = {
 * | list: [{
 * | | icon: "fa fa-home",
 * | | description: "Accueil",
 * | | click: ["/home"]
 * | }],
 * | bottom: [{
 * | | icon: "fa fa-cog",
 * | | description: "Settings",
 * | | click: ["/settings"]
 * | }]
 * };
 * <div style="display:flex">
 * | <sidebar [conf]="conf" (router)='click($event)'></sidebar>
 * | <div>I want to go to {{route()}}</div>
 * </div>
 */
class CltSidebarComponent {
    /**
     * import dependencies
     * @param {?} sidebar
     * @param {?} router
     */
    constructor(sidebar, router) {
        this.sidebar = sidebar;
        this.router = router;
        /**
         * control css class that open/close sidebar: openHint/closeHint
         */
        this.hintState = 'close';
        /**
         * Get the configuration from outside
         */
        this.conf = { list: [], bottom: [] };
    }
    /**
     * Go to Home route
     * @param {?} item
     * @param {?=} event
     * @return {?}
     */
    goTo(item, event) {
        if (event)
            event.preventDefault();
        if (item.hasOwnProperty('url'))
            this.router.navigateByUrl(item.url);
        if (item.hasOwnProperty('click'))
            item.click(item);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    newWindow(data) {
        if (data.url) {
            window.open(data.url);
        }
    }
    /**
     * Toggle sidebar
     * @return {?}
     */
    toggleSidebar() {
        this.sidebar.toggle();
    }
    /**
     * Toggle hint beside links icons on hover
     * @param {?} $event
     * @return {?}
     */
    toggleHint($event) {
        this.hintState =
            $event.type === 'mouseover' && !this.sidebar._open
                ? 'open'
                : 'close';
    }
}
CltSidebarComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'clt-sidebar',
                template: `<div class="openSidebar" 
    [ngClass]="{'openSidebar':sidebar._open, 'closeSidebar':!sidebar._open}"
    [ngStyle]="{'background-image': img ? 'url(img)' : ''}"
    id="sidebar">
    <div class="list">
        <div *ngFor='let item of conf.list'>
            <ng-container *ngTemplateOutlet="linkTemplate;context:{$implicit:item}"></ng-container>  
        </div>
    </div>
    <div class="bottomList">
        <div *ngFor='let item of conf.bottom'>
            <ng-container *ngTemplateOutlet="linkTemplate;context:{$implicit:item}"></ng-container>
        </div>
        <div id="toggleSidebar" class="item" (click)="toggleSidebar();" [ngClass]="{'openSidebar':sidebar._open, 'closeSidebar':!sidebar._open}">
            <div class="icon" >
                <i class="fa fa-arrow-right"></i>
            </div>
        </div>
    </div>
</div>

<ng-template #linkTemplate let-item>
    <a id="{{item.id}}" class="item" [href]="item.url ? item.url : ''" (click)="goTo(item, $event)" (auxclick)="newWindow(item)" (mouseover)="toggleHint($event)" (mouseleave)="toggleHint($event)">
        <div class="icon">
            <i class="{{item.icon}}"></i>
        </div>
        <div class="description" [ngClass]="{'openSidebar':sidebar._open, 'closeSidebar':!sidebar._open}">
            {{item.description}}
        </div>
        <div id="hint-{{item.id}}" class="hintContainer"  [@hintState]="hintState">
            <div class="hint">{{item.description}}</div>
        </div>
    </a>
</ng-template>
`,
                styles: [`.formGroup{margin-bottom:10px}.formGroup label{width:100%}@-webkit-keyframes openSidebar{0%{width:40px}to{width:175px}}@keyframes openSidebar{0%{width:40px}to{width:175px}}@-webkit-keyframes closeSidebar{0%{width:175px}to{width:40px}}@keyframes closeSidebar{0%{width:175px}to{width:40px}}@-webkit-keyframes openSidebarDescription{0%{width:0}to{width:40px}}@keyframes openSidebarDescription{0%{width:0}to{width:40px}}@-webkit-keyframes closeSidebarDescription{0%{width:40px}to{width:0}}@keyframes closeSidebarDescription{0%{width:40px}to{width:0}}@-webkit-keyframes openSidebarIcon{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(-1);transform:scale(-1)}}@keyframes openSidebarIcon{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(-1);transform:scale(-1)}}@-webkit-keyframes closeSidebarIcon{0%{-webkit-transform:scale(-1);transform:scale(-1)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes closeSidebarIcon{0%{-webkit-transform:scale(-1);transform:scale(-1)}to{-webkit-transform:scale(1);transform:scale(1)}}#sidebar{height:100%;overflow-x:hidden;width:40px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;background-size:auto 100%;background-color:#fff;position:relative;color:#616161;-webkit-box-shadow:2px 0 11px #00000080;box-shadow:2px 0 11px #00000080}#sidebar:before{content:"";height:70px;background-color:var(--headerBgColorAccent)}#sidebar.openSidebar{-webkit-animation-name:openSidebar;animation-name:openSidebar;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}#sidebar.closeSidebar{-webkit-animation-name:closeSidebar;animation-name:closeSidebar;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}#sidebar .bottomList,#sidebar .list{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%}#sidebar .bottomList.list,#sidebar .list.list{height:100%}#sidebar .bottomList .item,#sidebar .list .item{-webkit-box-shadow:none;box-shadow:none;-webkit-box-pack:left;-ms-flex-pack:left;justify-content:left;margin:0;border:none;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;padding-bottom:10px;padding-top:10px;color:#616161}#sidebar .bottomList .item:hover,#sidebar .list .item:hover{background-color:rgba(0,0,0,.1)}#sidebar .bottomList .item .hintContainer,#sidebar .list .item .hintContainer{position:absolute;overflow:hidden;left:40px;max-width:0;z-index:3;background-color:#e7e7e7}#sidebar .bottomList .item .hintContainer .hint,#sidebar .list .item .hintContainer .hint{color:#636363;padding:10px}#sidebar .bottomList .item .icon,#sidebar .list .item .icon{width:40px;text-align:center;font-size:1.3rem}#sidebar .bottomList .item .description.openSidebar,#sidebar .list .item .description.openSidebar{-webkit-animation-name:openSidebarDescription;animation-name:openSidebarDescription;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}#sidebar .bottomList .item .description.closeSidebar,#sidebar .list .item .description.closeSidebar{-webkit-animation-name:closeSidebarDescription;animation-name:closeSidebarDescription;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}#sidebar .bottomList #toggleSidebar,#sidebar .list #toggleSidebar{background-color:var(--headerBgColorAccent);color:var(--headerTextColor)}#sidebar .bottomList #toggleSidebar .icon,#sidebar .list #toggleSidebar .icon{font-size:1em}#sidebar .bottomList #toggleSidebar.openSidebar,#sidebar .list #toggleSidebar.openSidebar{-webkit-animation-name:openSidebarIcon;animation-name:openSidebarIcon;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}#sidebar .bottomList #toggleSidebar.closeSidebar,#sidebar .list #toggleSidebar.closeSidebar{-webkit-animation-name:closeSidebarIcon;animation-name:closeSidebarIcon;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}`],
                animations: [
                    trigger('hintState', [
                        state('open', style({
                            'max-width': '200px'
                        })),
                        state('close', style({
                            'max-width': '0'
                        })),
                        transition('open => close', animate('100ms ease-in')),
                        transition('close => open', animate('100ms ease-out'))
                    ])
                ]
            },] },
];
/** @nocollapse */
CltSidebarComponent.ctorParameters = () => [
    { type: CltSideBarService, },
    { type: Router, },
];
CltSidebarComponent.propDecorators = {
    "conf": [{ type: Input, args: ['conf',] },],
    "img": [{ type: Input, args: ['img',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CltNavigationsModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: CltNavigationsModule,
            providers: [
                CltSideBarService,
            ]
        };
    }
}
CltNavigationsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [
                    CltNavbarComponent,
                    CltSidebarComponent
                ],
                exports: [
                    CltNavbarComponent,
                    CltSidebarComponent
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var defaultTheme = {
    "--fontSize": "1em",
    "--borderRadius": "0px",
    "--headerBorderWidth": "0px",
    "--headerBorderColor": "transparent",
    "--headerBgColor": "#466c80",
    "--headerBgColorAccent": "#2f5466",
    "--headerTextColor": "white",
    "--headerFontWeight": "bold",
    "--headerIconTextColor": "#ffffff",
    "--contentBorderWidth": "1px",
    "--contentBorderColor": "#dddddd",
    "--contentBgColor": "#ffffff",
    "--contentTextColor": "#362b36",
    "--stateDefaultBorderWidth": "0px",
    "--stateDefaultBorderColor": "transparent",
    "--stateDefaultBgColor": "#466c80",
    "--stateDefaultTextColor": "#ffffff",
    "--stateActiveBorderColor": "transparent",
    "--stateActiveBgColor": "#7CB342",
    "--stateActiveTextColor": "#ffffff",
    "--stateHighlightBorderColor": "transparent",
    "--stateHighlightBgColor": "#7CB342",
    "--stateHighlightTextColor": "#ffffff",
    "--stateFocusBorderColor": "transparent",
    "--stateFocusBgColor": "#e4f1fb",
    "--stateFocusTextColor": "#0070a3",
    "--stateErrorBorderColor": "transparent",
    "--stateErrorBgColor": "#cd0a0a",
    "--stateErrorTextColor": "#ffffff",
    "--stateHoverBorderColor": "transparent",
    "--stateHoverBgColor": "#455a64",
    "--stateHoverTextColor": "white",
    "--inputBgColor": "#ffffff",
    "--inputTextColor": "#222222",
    "--invalidInputBorderColor": "transparent",
    "--inputGroupTextColor": "#2779aa",
    "--inputDefaultBorderWidth": "1px",
    "--inputDefaultBorderColor": "#dddddd",
    "--inputDefaultBgColor": "#ffffff",
    "--inputDefaultTextColor": "#000000"
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var bluegreygreen = {
    "--headerBgColor": "#607D8B",
    "--headerBgColorAccent": "#455a64",
    "--stateDefaultBgColor": "#9eafb7"
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CltThemeService {
    constructor() {
        this.themes = [
            { name: 'default', theme: defaultTheme },
            { name: 'bluegreygreen', theme: bluegreygreen }
        ];
        this.theme = {};
        this.reload(this.themes[0].theme);
    }
    /**
     * @param {?=} theme
     * @return {?}
     */
    reload(theme) {
        if (theme)
            this.theme = merge(cloneDeep(defaultTheme), theme);
        document.getElementsByTagName('html')[0].setAttribute('style', '');
        Object.keys(this.theme).map(key => this.setStyle(key, this.theme[key]));
    }
    /**
     * @param {?} property
     * @param {?} value
     * @return {?}
     */
    setStyle(property, value) {
        const /** @type {?} */ html = document.getElementsByTagName('html')[0];
        this.theme[property] = value;
        html.style.setProperty(property, value);
    }
}
CltThemeService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
CltThemeService.ctorParameters = () => [];
/** @nocollapse */ CltThemeService.ngInjectableDef = defineInjectable({ factory: function CltThemeService_Factory() { return new CltThemeService(); }, token: CltThemeService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var mockdataTable = [{ "first_name": "Salomone", "last_name": "Andriveaux", "email": "sandriveaux0@google.pl", "gender": "Male", "city": "Sukoreno", "street_address": "45677 Oneill Plaza" },
    { "first_name": "Bartram", "last_name": "Berriman", "email": "bberriman1@umich.edu", "gender": "Male", "city": "Miyang", "street_address": "33 Oak Road" },
    { "first_name": "Judye", "last_name": "Lambdon", "email": "jlambdon2@ucla.edu", "gender": "Female", "city": "Jeonju", "street_address": "6725 Summer Ridge Alley" },
    { "first_name": "Benedick", "last_name": "Gamlyn", "email": "bgamlyn3@theatlantic.com", "gender": "Male", "city": "Vavuniya", "street_address": "225 Merrick Plaza" },
    { "first_name": "Alaster", "last_name": "Balthasar", "email": "abalthasar4@sourceforge.net", "gender": "Male", "city": "Bonoua", "street_address": "6 Cordelia Road" },
    { "first_name": "Enrique", "last_name": "Pickhaver", "email": "epickhaver5@twitter.com", "gender": "Male", "city": "Majzar", "street_address": "6 Oxford Circle" },
    { "first_name": "Chevy", "last_name": "Agnolo", "email": "cagnolo6@adobe.com", "gender": "Male", "city": "Acao", "street_address": "1930 Gateway Crossing" },
    { "first_name": "Ky", "last_name": "Mill", "email": "kmill7@issuu.com", "gender": "Male", "city": "Bol’shoy Karay", "street_address": "576 Arkansas Avenue" },
    { "first_name": "Lorry", "last_name": "Lawrenceson", "email": "llawrenceson8@artisteer.com", "gender": "Female", "city": "Skomlin", "street_address": "848 Loftsgordon Drive" },
    { "first_name": "Quincy", "last_name": "Belison", "email": "qbelison9@google.ru", "gender": "Male", "city": "Taotang", "street_address": "1952 Clarendon Center" },
    { "first_name": "Reba", "last_name": "Wankel", "email": "rwankela@rambler.ru", "gender": "Female", "city": "Sam Khok", "street_address": "83997 Debs Court" },
    { "first_name": "Reggi", "last_name": "Hale", "email": "rhaleb@webs.com", "gender": "Female", "city": "Obroshyne", "street_address": "16619 3rd Center" },
    { "first_name": "Barbi", "last_name": "Franzke", "email": "bfranzkec@weibo.com", "gender": "Female", "city": "Yitulihe", "street_address": "73 Merchant Avenue" },
    { "first_name": "Basil", "last_name": "Duplan", "email": "bdupland@mozilla.com", "gender": "Male", "city": "Tempursari Wetan", "street_address": "56 Florence Street" },
    { "first_name": "Hedvig", "last_name": "Skillett", "email": "hskillette@oakley.com", "gender": "Female", "city": "Huayllo", "street_address": "140 Merchant Way" },
    { "first_name": "Flinn", "last_name": "Chadwyck", "email": "fchadwyckf@army.mil", "gender": "Male", "city": "Huangshanguan", "street_address": "3853 Graedel Road" },
    { "first_name": "Dane", "last_name": "Danilovich", "email": "ddanilovichg@amazon.co.jp", "gender": "Male", "city": "‘Ayn Ḩalāqīm", "street_address": "35 Hoard Avenue" },
    { "first_name": "Florry", "last_name": "Brou", "email": "fbrouh@studiopress.com", "gender": "Female", "city": "Venda do Valador", "street_address": "36 Russell Plaza" },
    { "first_name": "Jaine", "last_name": "Napthine", "email": "jnapthinei@state.gov", "gender": "Female", "city": "Xiaocun", "street_address": "83437 Corscot Avenue" },
    { "first_name": "Yoshi", "last_name": "Crystal", "email": "ycrystalj@disqus.com", "gender": "Female", "city": "Plumtree", "street_address": "2732 Moulton Terrace" }];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CltThemeManagerComponent {
    /**
     * @param {?} themeService
     * @param {?} common
     */
    constructor(themeService, common) {
        this.themeService = themeService;
        this.common = common;
        this.mockData = mockdataTable;
        this.variables = [];
        this.currentTheme = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.variables = Object.keys(this.themeService.theme);
    }
    /**
     * @param {?} theme
     * @return {?}
     */
    changeTheme(theme) {
        const /** @type {?} */ selectedTheme = this.themeService.themes.filter(_theme => _theme.name === theme)[0];
        this.currentTheme = selectedTheme.name;
        this.themeService.reload(selectedTheme.theme);
    }
    /**
     * @return {?}
     */
    difference() {
        const /** @type {?} */ differences = this.common.differences(this.themeService.theme, this.themeService.themes[0].theme).different;
        if (differences.length) {
            const /** @type {?} */ json = {};
            differences.forEach(difference => {
                json[difference] = this.themeService.theme[difference];
            });
            return json;
        }
        return {};
    }
    /**
     * @param {?} variable
     * @param {?} style
     * @return {?}
     */
    changeStyle(variable, style$$1) {
        this.themeService.setStyle(variable, style$$1);
    }
    /**
     * @return {?}
     */
    export() {
        console.log('hey');
        const /** @type {?} */ link = this.exportButton.nativeElement;
        link.download = this.exportInput.nativeElement.value + '.json' || 'theme.json';
        const /** @type {?} */ data = 'text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.difference()));
        link.href = 'data:' + data;
    }
    /**
     * @return {?}
     */
    getTheme() {
        return encodeURIComponent(JSON.stringify(this.themeService.theme));
    }
}
CltThemeManagerComponent.decorators = [
    { type: Component, args: [{
                selector: 'clt-theme-manager',
                template: `<div id="theme-manager">
  <clt-panel *ngIf="difference()" header="Export" [toggleable]="true" [collapsed]="true">
    <label>Nom du theme</label>
    <input type="text" [value]="currentTheme || 'default'" #exportInput>
    <a href="#" #exportButton>
      <button class='btn btn-primary' (click)='export()'>
        Télécharger le theme
      </button>
    </a>
    <button class='btn btn-primary' (click)='jsonPopup.open()'>
      Voir le theme
    </button>
  </clt-panel>

  <clt-panel header="Gestionnaire de theme" [toggleable]="true" [collapsed]="true">
    <h3>Selection</h3>
    <select name="theme" id="theme" (change)="changeTheme($event.target.value)" #selectedTheme>
      <option *ngFor="let theme of themeService.themes" [value]="theme.name">{{theme.name}}</option>
    </select>
  </clt-panel>

  <clt-panel header="Gestionnaire de style" [toggleable]="true" [collapsed]="true">
    <div>Gestionnaire de style</div>
    <div class="themeChanger-list">
      <div class="themeChanger-color">
        <h3>Header</h3>
        <ng-container *ngFor="let variable of variables">
          <ul>
            <li *ngIf="variable.includes('header')">
              <label>{{variable}}</label>
              <div>
                <div *ngIf="variable.includes('Color')" [(colorPicker)]="themeService.theme[variable]" (colorPickerChange)="themeService.setStyle(variable, $event)"
                  class='colorPicker' [ngStyle]="{'background-color':themeService.theme[variable] }">
                </div>
                <input *ngIf="!variable.includes('Color')" [value]='themeService.theme[variable]' (change)="themeService.setStyle(variable, $event.target.value)"
                />
              </div>
            </li>
          </ul>
        </ng-container>
        <h3>Content</h3>
        <ng-container *ngFor="let variable of variables">
          <ul>
            <li *ngIf="variable.includes('content')">
              <label>{{variable}}</label>
              <div>
                <div *ngIf="variable.includes('Color')" [(colorPicker)]="themeService.theme[variable]" (colorPickerChange)="themeService.setStyle(variable, $event)"
                  class='colorPicker' [ngStyle]="{'background-color':themeService.theme[variable] }">
                </div>
                <input *ngIf="!variable.includes('Color')" [value]='themeService.theme[variable]' (change)="themeService.setStyle(variable, $event.target.value)"
                />
              </div>
            </li>
          </ul>
        </ng-container>
        <h3>State Default</h3>
        <ng-container *ngFor="let variable of variables">
          <ul>
            <li *ngIf="variable.includes('stateDefault')">
              <label>{{variable}}</label>
              <div>
                <div *ngIf="variable.includes('Color')" [(colorPicker)]="themeService.theme[variable]" (colorPickerChange)="themeService.setStyle(variable, $event)"
                  class='colorPicker' [ngStyle]="{'background-color':themeService.theme[variable] }">
                </div>
                <input *ngIf="!variable.includes('Color')" [value]='themeService.theme[variable]' (change)="themeService.setStyle(variable, $event.target.value)"
                />
              </div>
            </li>
          </ul>
        </ng-container>
        <h3>State Active</h3>
        <ng-container *ngFor="let variable of variables">
          <ul>
            <li *ngIf="variable.includes('stateActive')">
              <label>{{variable}}</label>
              <div>
                <div *ngIf="variable.includes('Color')" [(colorPicker)]="themeService.theme[variable]" (colorPickerChange)="themeService.setStyle(variable, $event)"
                  class='colorPicker' [ngStyle]="{'background-color':themeService.theme[variable] }">
                </div>
                <input *ngIf="!variable.includes('Color')" [value]='themeService.theme[variable]' (change)="themeService.setStyle(variable, $event.target.value)"
                />
              </div>
            </li>
          </ul>
        </ng-container>
        <h3>State Highlight</h3>
        <ng-container *ngFor="let variable of variables">
          <ul>
            <li *ngIf="variable.includes('stateHighlight')">
              <label>{{variable}}</label>
              <div>
                <div *ngIf="variable.includes('Color')" [(colorPicker)]="themeService.theme[variable]" (colorPickerChange)="themeService.setStyle(variable, $event)"
                  class='colorPicker' [ngStyle]="{'background-color':themeService.theme[variable] }">
                </div>
                <input *ngIf="!variable.includes('Color')" [value]='themeService.theme[variable]' (change)="themeService.setStyle(variable, $event.target.value)"
                />
              </div>
            </li>
          </ul>
        </ng-container>
        <h3>State Focus</h3>
        <ng-container *ngFor="let variable of variables">
          <ul>
            <li *ngIf="variable.includes('stateFocus')">
              <label>{{variable}}</label>
              <div>
                <div *ngIf="variable.includes('Color')" [(colorPicker)]="themeService.theme[variable]" (colorPickerChange)="changeStyle(variable, $event)"
                  class='colorPicker' [ngStyle]="{'background-color':themeService.theme[variable] }">
                </div>
                <input *ngIf="!variable.includes('Color')" [value]='themeService.theme[variable]' (change)="changeStyle(variable, $event.target.value)"
                />
              </div>
            </li>
          </ul>
        </ng-container>
        <h3>State Error</h3>
        <ng-container *ngFor="let variable of variables">
          <ul>
            <li *ngIf="variable.includes('stateError')">
              <label>{{variable}}</label>
              <div>
                <div *ngIf="variable.includes('Color')" [(colorPicker)]="themeService.theme[variable]" (colorPickerChange)="themeService.setStyle(variable, $event)"
                  class='colorPicker' [ngStyle]="{'background-color':themeService.theme[variable] }">
                </div>
                <input *ngIf="!variable.includes('Color')" [value]='themeService.theme[variable]' (change)="themeService.setStyle(variable, $event.target.value)"
                />
              </div>
            </li>
          </ul>
        </ng-container>
        <h3>State Hover</h3>
        <ng-container *ngFor="let variable of variables">
          <ul>
            <li *ngIf="variable.includes('stateHover')">
              <label>{{variable}}</label>
              <div>
                <div *ngIf="variable.includes('Color')" [(colorPicker)]="themeService.theme[variable]" (colorPickerChange)="themeService.setStyle(variable, $event)"
                  class='colorPicker' [ngStyle]="{'background-color':themeService.theme[variable] }">
                </div>
                <input *ngIf="!variable.includes('Color')" [value]='themeService.theme[variable]' (change)="themeService.setStyle(variable, $event.target.value)"
                />
              </div>
            </li>
          </ul>
        </ng-container>
      </div>
    </div>
  </clt-panel>
</div>

<clt-popup title='Json' [body]="difference() | json" #jsonPopup></clt-popup>
`,
                styles: [`#theme-manager{height:95%;max-width:450px;-ms-flex-negative:0;flex-shrink:0}#theme-manager h2{margin-top:.5em}#theme-manager label{margin:0}#theme-manager .colorPicker{width:25px;height:25px;border:1px solid #000}#theme-manager li{border-bottom:1px solid #a9a9a9;padding:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}#theme-manager li>div{width:40%}#theme-manager li input{width:100%}#theme-manager .preview{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;margin-left:10px}`]
            },] },
];
/** @nocollapse */
CltThemeManagerComponent.ctorParameters = () => [
    { type: CltThemeService, },
    { type: CltCommonService, },
];
CltThemeManagerComponent.propDecorators = {
    "exportButton": [{ type: ViewChild, args: ['exportButton',] },],
    "exportInput": [{ type: ViewChild, args: ['exportInput',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CltThemeModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: CltThemeModule,
            providers: [
                CltThemeService
            ]
        };
    }
}
CltThemeModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ColorPickerModule,
                    CltContainersModule,
                    CltOverlayModule.forRoot()
                ],
                declarations: [CltThemeManagerComponent],
                exports: [CltThemeManagerComponent, RouterModule]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { CltBoxComponent, CltContainersModule, CltPanelComponent, CltCoreModule, CltSpinningIconDirective, CltClickStopPropagationDirective, CltToId, CltPopoverComponent, CltCommonService, CltDisplayItemDirective, CltDisplayComponent, CltDisplayModule, CltDebounceInputDirective, CltShowPasswordDirective, CltValidatorsDirective, CltFormErrorsComponent, CltFormsModule, CltPassword, CltMapLayerComponent, CltMapComponent, CltMapModule, CltMapMapService, CltNavbarComponent, CltNavigationsModule, CltSideBarService, CltSidebarComponent, CltNotificationsComponent, CltOverlayModule, CltBodyDirective, CltPopupComponent, CltNotificationsService, CltSidePanelComponent, CltThemeService, CltThemeManagerComponent, CltThemeModule };
//# sourceMappingURL=ngx-callisto.js.map
