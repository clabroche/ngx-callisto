import { Component, Input, Injectable, Renderer2, ViewChildren, Directive, EventEmitter, HostListener, Output, ElementRef, Pipe, ViewChild, NgModule } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { v4 } from 'uuid';
import { Subject } from 'rxjs';
import { __awaiter } from 'tslib';
import { each, filter } from 'bluebird';
import { reduce, isEqual, map } from 'lodash';
import { Subject as Subject$1 } from 'rxjs/Subject';
import { debounceTime } from 'rxjs/operators/debounceTime';
import * as erdImported from 'element-resize-detector';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
class BoxComponent {
}
BoxComponent.decorators = [
    { type: Component, args: [{
                selector: "box",
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
BoxComponent.propDecorators = {
    "title": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Control the sidebar outside the component
 */
class SideBarService {
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
SideBarService.decorators = [
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
class SidebarComponent {
    /**
     * import dependencies
     * @param {?} sidebar
     */
    constructor(sidebar) {
        this.sidebar = sidebar;
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
     * @param {?} data
     * @return {?}
     */
    goTo(data) {
        data.click();
    }
    /**
     * @param {?} data
     * @return {?}
     */
    newWindow(data) {
        if (data.externalUrl) {
            window.open(data.externalUrl);
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
SidebarComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'sidebar',
                template: `<div class="openSidebar" 
    [ngClass]="{'openSidebar':sidebar._open, 'closeSidebar':!sidebar._open}"
    [ngStyle]="{'background-image': url ? 'url(img)' : ''}"
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
    <div id="{{item.id}}" class="item" (click)="goTo(item)" (auxclick)="newWindow(item)" (mouseover)="toggleHint($event)" (mouseleave)="toggleHint($event)">
        <div class="icon">
            <i class="{{item.icon}}"></i>
        </div>
        <div class="description" [ngClass]="{'openSidebar':sidebar._open, 'closeSidebar':!sidebar._open}">
            {{item.description}}
        </div>
        <div id="hint-{{item.id}}" class="hintContainer"  [@hintState]="hintState">
            <div class="hint">{{item.description}}</div>
        </div>
    </div>
</ng-template>
`,
                styles: [`.formGroup{margin-bottom:10px}.formGroup label{width:100%}@-webkit-keyframes openSidebar{0%{width:40px}to{width:175px}}@keyframes openSidebar{0%{width:40px}to{width:175px}}@-webkit-keyframes closeSidebar{0%{width:175px}to{width:40px}}@keyframes closeSidebar{0%{width:175px}to{width:40px}}@-webkit-keyframes openSidebarDescription{0%{width:0}to{width:40px}}@keyframes openSidebarDescription{0%{width:0}to{width:40px}}@-webkit-keyframes closeSidebarDescription{0%{width:40px}to{width:0}}@keyframes closeSidebarDescription{0%{width:40px}to{width:0}}@-webkit-keyframes openSidebarIcon{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(-1);transform:scale(-1)}}@keyframes openSidebarIcon{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(-1);transform:scale(-1)}}@-webkit-keyframes closeSidebarIcon{0%{-webkit-transform:scale(-1);transform:scale(-1)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes closeSidebarIcon{0%{-webkit-transform:scale(-1);transform:scale(-1)}to{-webkit-transform:scale(1);transform:scale(1)}}#sidebar{color:#fff;height:100%;overflow-x:hidden;width:40px;background-color:#343a40;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;background-size:auto 100%}#sidebar.openSidebar{-webkit-animation-name:openSidebar;animation-name:openSidebar;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}#sidebar.closeSidebar{-webkit-animation-name:closeSidebar;animation-name:closeSidebar;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}#sidebar .bottomList,#sidebar .list{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%}#sidebar .bottomList.list,#sidebar .list.list{height:100%}#sidebar .bottomList .item,#sidebar .list .item{-webkit-box-shadow:none;box-shadow:none;-webkit-box-pack:left;-ms-flex-pack:left;justify-content:left;margin:0;border:none;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;padding-bottom:15px;padding-top:15px}#sidebar .bottomList .item:hover,#sidebar .list .item:hover{background-color:rgba(0,0,0,.5)}#sidebar .bottomList .item .hintContainer,#sidebar .list .item .hintContainer{position:absolute;overflow:hidden;left:40px;max-width:0;background-color:#1d2124;z-index:3}#sidebar .bottomList .item .hintContainer .hint,#sidebar .list .item .hintContainer .hint{color:#fff;padding:10px}#sidebar .bottomList .item .icon,#sidebar .list .item .icon{width:40px;text-align:center;font-size:1.5em}#sidebar .bottomList .item .description.openSidebar,#sidebar .list .item .description.openSidebar{-webkit-animation-name:openSidebarDescription;animation-name:openSidebarDescription;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}#sidebar .bottomList .item .description.closeSidebar,#sidebar .list .item .description.closeSidebar{-webkit-animation-name:closeSidebarDescription;animation-name:closeSidebarDescription;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}#sidebar .bottomList #toggleSidebar,#sidebar .list #toggleSidebar{background-color:rgba(0,0,0,.5)}#sidebar .bottomList #toggleSidebar .icon,#sidebar .list #toggleSidebar .icon{font-size:1em}#sidebar .bottomList #toggleSidebar.openSidebar,#sidebar .list #toggleSidebar.openSidebar{-webkit-animation-name:openSidebarIcon;animation-name:openSidebarIcon;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}#sidebar .bottomList #toggleSidebar.closeSidebar,#sidebar .list #toggleSidebar.closeSidebar{-webkit-animation-name:closeSidebarIcon;animation-name:closeSidebarIcon;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}`],
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
SidebarComponent.ctorParameters = () => [
    { type: SideBarService, },
];
SidebarComponent.propDecorators = {
    "conf": [{ type: Input, args: ['conf',] },],
    "img": [{ type: Input, args: ['img',] },],
};

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
 * |  <div actions>
 * |  |  <div class="icon">
 * |  |  | <i class="fa fa-user"></i>
 * |  |  </div>
 * |  </div>
 * </navbar>
 */
class NavbarComponent {
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
NavbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'navbar',
                template: `<div id="navbar" [ngStyle]="{'background-image': url ? 'url(img)' : ''}">
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
      <div id="actions">
        <ng-content selector="[action]"></ng-content>
      </div>
    </div>
  </div>
</div>`,
                styles: [`.formGroup{margin-bottom:10px}.formGroup label{width:100%}#navbar{height:40px;background-color:#343a40;color:#fff;max-height:40px;background-size:100%}#navbar #leftRight{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%}#navbar #leftRight #left{height:100%;padding-left:5px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}#navbar #leftRight #left #logoContainer{height:80%}#navbar #leftRight #left #logoContainer ::ng-deep [logo]{height:100%;border-radius:100%;overflow:hidden}#navbar #leftRight #left #logoContainer ::ng-deep [logo] img{height:100%}#navbar #leftRight #left #description{margin-left:10px;color:#fff;font-size:1.2em}#navbar #leftRight #right{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;margin-right:10px}#navbar #leftRight #right #actions{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}#navbar #leftRight #right #actions ::ng-deep .icon{font-size:1.7em}`]
            },] },
];
/** @nocollapse */
NavbarComponent.ctorParameters = () => [];
NavbarComponent.propDecorators = {
    "name": [{ type: Input, args: ['name',] },],
    "img": [{ type: Input, args: ['img',] },],
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
class FormErrorsComponent {
}
FormErrorsComponent.decorators = [
    { type: Component, args: [{
                selector: "formErrors",
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
                styles: [`.formGroup{margin-bottom:10px}.formGroup label{width:100%}`]
            },] },
];
/** @nocollapse */
FormErrorsComponent.propDecorators = {
    "model": [{ type: Input, args: ['model',] },],
    "patternName": [{ type: Input, args: ['patternName',] },],
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
class NotificationsService {
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
        let /** @type {?} */ notificationsDelay = +localStorage.getItem("notificationsDelay");
        if (notificationsDelay < 500) {
            notificationsDelay = 6000;
            localStorage.setItem("notificationsDelay", "6000");
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
            title: title || "",
            msg: msg || ""
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
        }, +localStorage.getItem("notificationsDelay"));
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
NotificationsService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
NotificationsService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Display an mini-popup
 * \@example
 * const ns= new NotificationsService()
 * const getFirstNotifId = _=>ns.notifications[0].id
 * const random=_=>Math.random()
 *
 * <button (click)="ns.add('add','test')">Add notif</button>
 * <button (click)="ns.delete(getFirstNotifId())">delete notif</button>
 * <button (click)="ns.deleteAll()">delete all notif</button>
 * <button (click)="ns.updateNotif(getFirstNotifId(),{title:random(),msg: random()})">Update notif</button>
 * <notifications></notifications>
 */
class NotificationsComponent {
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
            this.renderer2.addClass(htmlNotif, "deleteNotif");
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
            let /** @type {?} */ htmlNotif = yield filter(this.htmlNotifications, htmlNotif => htmlNotif.nativeElement.id === id);
            if (htmlNotif.length)
                return htmlNotif.pop().nativeElement;
        });
    }
}
NotificationsComponent.decorators = [
    { type: Component, args: [{
                selector: "notifications",
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
NotificationsComponent.ctorParameters = () => [
    { type: NotificationsService, },
    { type: Renderer2, },
];
NotificationsComponent.propDecorators = {
    "htmlNotifications": [{ type: ViewChildren, args: ['notifModel',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Control the sidePanel outside the component
 */
class SidePanelService {
    constructor() {
        /**
         * Component watch this variable to open/close the sidePanel
         */
        this._open = false;
    }
    /**
     * Open sidePanel
     * @param {?=} template
     * @param {?=} context
     * @return {?}
     */
    open(template, context) {
        if (template)
            this.template = template;
        if (context)
            this.context = context;
        this._open = true;
    }
    /**
     * Close sidePanel
     * @return {?}
     */
    close() {
        this._open = false;
    }
    /**
     * Toggle sidePanel
     * @return {?}
     */
    toggle() {
        this._open = !this._open;
    }
}
SidePanelService.decorators = [
    { type: Injectable },
];

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
class SidePanelComponent {
    /**
     * Load dependencies
     * @param {?} sidepanel
     */
    constructor(sidepanel) {
        this.sidepanel = sidepanel;
    }
}
SidePanelComponent.decorators = [
    { type: Component, args: [{
                selector: "sidePanel",
                template: `<div id="sidePanelClose" [ngClass]="{'openSidePanel':sidepanel._open, 'closeSidePanel':!sidepanel._open}" (click)="sidepanel._open=false">
    <i class='fa fa-chevron-right'></i>
    <div id="sidePanelContainer" click-stop-propagation>
        <ng-container *ngTemplateOutlet="sidepanel.template; context: sidepanel.context"></ng-container>
    </div>
</div>
 `,
                styles: [`.formGroup{margin-bottom:10px}.formGroup label{width:100%}@-webkit-keyframes openSidePanel{0%{max-width:0;padding-left:0}100%{padding-left:10%;max-width:100vw}}@keyframes openSidePanel{0%{max-width:0;padding-left:0}100%{padding-left:10%;max-width:100vw}}@-webkit-keyframes closeSidePanel{0%{padding-left:10%;max-width:100vw}100%{padding-left:0;max-width:0}}@keyframes closeSidePanel{0%{padding-left:10%;max-width:100vw}100%{padding-left:0;max-width:0}}:host{height:100%}:host #sidePanelClose{position:absolute;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;right:0;width:100vw;height:100%;background-color:rgba(0,0,0,.7);max-width:0;overflow-x:hidden}:host #sidePanelClose i{color:#fff;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#343a40;padding-left:10px;padding-right:10px}:host #sidePanelClose ::ng-deep #sideHeader{background-color:#343a40;color:#fff;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:10px}:host #sidePanelClose ::ng-deep #sideContainer{padding:20px}:host #sidePanelClose #sidePanelContainer{background-color:#fff;height:100%}:host #sidePanelClose.closeSidePanel{-webkit-animation-name:closeSidePanel;animation-name:closeSidePanel;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}:host #sidePanelClose.openSidePanel{-webkit-animation-name:openSidePanel;animation-name:openSidePanel;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}`]
            },] },
];
/** @nocollapse */
SidePanelComponent.ctorParameters = () => [
    { type: SidePanelService, },
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
class CommonService {
    /**
     * Instanciate all members
     */
    constructor() {
        this.api = "http://localhost:3000";
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
        var /** @type {?} */ result = {
            different: [],
            missing_from_first: [],
            missing_from_second: []
        };
        reduce(a, (result, value, key) => {
            if (b.hasOwnProperty(key)) {
                if (isEqual(value, b[key]))
                    return result;
                else {
                    if (typeof (a[key]) != typeof ({}) || typeof (b[key]) != typeof ({})) {
                        result.different.push(key);
                        return result;
                    }
                    else {
                        var /** @type {?} */ deeper = this.differences(a[key], b[key]);
                        result.different = result.different.concat(map(deeper.different, (sub_path) => key + "." + sub_path));
                        result.missing_from_second = result.missing_from_second.concat(map(deeper.missing_from_second, (sub_path) => key + "." + sub_path));
                        result.missing_from_first = result.missing_from_first.concat(map(deeper.missing_from_first, (sub_path) => key + "." + sub_path));
                        return result;
                    }
                }
            }
            else {
                result.missing_from_second.push(key);
                return result;
            }
        }, result);
        reduce(b, function (result, value, key) {
            if (a.hasOwnProperty(key))
                return result;
            else {
                result.missing_from_first.push(key);
                return result;
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
         * @param {?} obj
         * @return {?}
         */
        function flat(obj) {
            Object.keys(obj).map(key => {
                if (typeof obj[key] === "object")
                    flat(obj[key]);
                else
                    newObj[key] = obj[key];
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
            .replace(/\\"/g, "\uFFFF")
            .replace(/\"([^"]+)\":/g, "$1:")
            .replace(/\uFFFF/g, "\\\"");
    }
}
CommonService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
CommonService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Directive that debounce an element that supports keyListener
 * \@example
 * <input type="text" debounce-input (debounce)="doSomething($event.target.value)" [debounceTime]="200" />
 */
class DebounceInputDirective {
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
DebounceInputDirective.decorators = [
    { type: Directive, args: [{
                selector: '[debounce-input]'
            },] },
];
/** @nocollapse */
DebounceInputDirective.propDecorators = {
    "debounceTime": [{ type: Input },],
    "debounce": [{ type: Output },],
    "keyupEvent": [{ type: HostListener, args: ['keyup', ['$event'],] },],
};

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
class SpinningIconDirective {
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
SpinningIconDirective.decorators = [
    { type: Directive, args: [{
                selector: "[spinning-icon]",
                exportAs: 'spinning'
            },] },
];
/** @nocollapse */
SpinningIconDirective.ctorParameters = () => [
    { type: Renderer2, },
    { type: ElementRef, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Prevent bubbling of events
 * \@example
 *  <div (click)="doSomething()"> // not call when click happenned on child
 *  | <div click-stop-propagation></div>
 *  </div>
 */
class ClickStopPropagation {
    /**
     * Trigger click event to stop propagation
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        event.stopPropagation();
    }
}
ClickStopPropagation.decorators = [
    { type: Directive, args: [{
                selector: "[click-stop-propagation]"
            },] },
];
/** @nocollapse */
ClickStopPropagation.propDecorators = {
    "onClick": [{ type: HostListener, args: ["click", ["$event"],] },],
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
class ValidatorsDirective {
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
        if (this.validators.valid) {
            this.renderer.addClass(this.hostElement.nativeElement, 'goodInput');
            this.renderer.removeClass(this.hostElement.nativeElement, 'badInput');
        }
        else {
            this.renderer.addClass(this.hostElement.nativeElement, 'badInput');
            this.renderer.removeClass(this.hostElement.nativeElement, 'goodInput');
        }
    }
}
ValidatorsDirective.decorators = [
    { type: Directive, args: [{
                selector: '[validators]',
                host: {
                    "(input)": 'onInputChange($event)'
                }
            },] },
];
/** @nocollapse */
ValidatorsDirective.ctorParameters = () => [
    { type: Renderer2, },
    { type: ElementRef, },
];
ValidatorsDirective.propDecorators = {
    "validators": [{ type: Input },],
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
class ShowPasswordDirective {
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
ShowPasswordDirective.decorators = [
    { type: Directive, args: [{
                selector: '[show-password]',
            },] },
];
/** @nocollapse */
ShowPasswordDirective.ctorParameters = () => [
    { type: Renderer2, },
    { type: ElementRef, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Transform string to be a valid HtmlID
 */
class ToId {
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
ToId.decorators = [
    { type: Pipe, args: [{ name: 'toId', pure: true },] },
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
class PopoverComponent {
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
         * Define the placment of popover
         */
        this.placement = 'right';
        this.positionClass = 'popover-right';
        this.resizeDetector = erd({
            strategy: 'scroll' // <- For ultra performance.
        });
    }
    /**
     * @param {?} open
     * @return {?}
     */
    loadState(open) {
        console.log('loadState', open);
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
            console.log('Size: ' + width + 'x' + height);
            if (this.placement === 'top' || this.placement === 'bottom') {
                this.renderer.setStyle(this.popupContainer.nativeElement, 'left', '-' + width / 2 + 'px');
            }
            if (this.placement === 'right' || this.placement === 'left') {
                this.renderer.setStyle(this.popupContainer.nativeElement, 'top', '-' + height / 2 + 'px');
            }
        });
    }
}
PopoverComponent.decorators = [
    { type: Component, args: [{
                selector: 'popover',
                template: `<div class="defi-popover">
    <div class="defi-popover-container {{placement}}" #popupContainer>
        <ng-content select="[popover=content]"></ng-content>
    </div>
    <ng-content></ng-content>
</div>`,
                styles: [`.formGroup{margin-bottom:10px}.formGroup label{width:100%}:host .defi-popover{position:relative;display:inline-block}:host .defi-popover .defi-popover-container{padding:10px;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:.1s;transition-duration:.1s;-webkit-transition-timing-function:cubic-bezier(.075,.82,.165,1);transition-timing-function:cubic-bezier(.075,.82,.165,1);visibility:hidden;border:1px solid #d2d2d2;position:absolute;z-index:1;background-color:#fff;border-radius:3px}:host .defi-popover .defi-popover-container::after{content:"";position:absolute;border-style:solid;border-width:5px}:host .defi-popover .defi-popover-container.right{left:calc(100% + 10px);top:-31px;margin-top:25%}:host .defi-popover .defi-popover-container.right::after{right:100%;top:50%;margin-top:-10px;border-color:transparent #b9b9b9 transparent transparent}:host .defi-popover .defi-popover-container.left{right:calc(100% + 10px);top:-31px;margin-top:25%}:host .defi-popover .defi-popover-container.left::after{left:100%;top:50%;margin-top:-10px;border-color:transparent transparent transparent #b9b9b9}:host .defi-popover .defi-popover-container.bottom{top:calc(100% + 10px);left:-101.5px;margin-left:50%}:host .defi-popover .defi-popover-container.bottom::after{left:50%;margin-left:-5px;bottom:100%;border-color:transparent transparent #b9b9b9}:host .defi-popover .defi-popover-container.top{bottom:calc(100% + 10px);left:-101.5px;margin-left:50%}:host .defi-popover .defi-popover-container.top::after{left:50%;margin-left:-5px;top:100%;border-color:#b9b9b9 transparent transparent}:host ::ng-deep ul{list-style:none;margin:0;padding:0}`]
            },] },
];
/** @nocollapse */
PopoverComponent.ctorParameters = () => [
    { type: Renderer2, },
];
PopoverComponent.propDecorators = {
    "open": [{ type: Input, args: ['open',] },],
    "placement": [{ type: Input, args: ['placement',] },],
    "popupContainer": [{ type: ViewChild, args: ['popupContainer',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CoreModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: CoreModule,
            providers: [
                CommonService,
                SideBarService,
                NotificationsService,
                SidePanelService,
            ]
        };
    }
}
CoreModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SidebarComponent,
                    NavbarComponent,
                    FormErrorsComponent,
                    BoxComponent,
                    SidePanelComponent,
                    NotificationsComponent,
                    DebounceInputDirective,
                    ClickStopPropagation,
                    SpinningIconDirective,
                    ValidatorsDirective,
                    ShowPasswordDirective,
                    ToId,
                    PopoverComponent,
                ],
                imports: [
                    CommonModule,
                    NgbModule.forRoot(),
                ],
                exports: [
                    SidebarComponent,
                    NavbarComponent,
                    FormErrorsComponent,
                    SidePanelComponent,
                    NotificationsComponent,
                    BoxComponent,
                    DebounceInputDirective,
                    SpinningIconDirective,
                    ValidatorsDirective,
                    ShowPasswordDirective,
                    ToId,
                    PopoverComponent,
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Check if passphrase are the same
 * \@example
 *  fb.group({
 *      passphrase: ["",Validators.required],
 *      recheckPassphrase: ["",Validators.required],
 *  }, { validator: MatchPassword.MatchPassword })
 *
 *  <form [formGroup]="formPassphrases">
 *  |  <div class="label" for="passphrase">Passphrase</div>
 *  |  <input type="password" [formControlName]="'passphrase'" />
 *  |
 *  |  <div class="label" for="recheckPassphrase">Recheck passphrase</div>
 *  |  <input type="password" [formControlName]="'recheckPassphrase'" />
 *  |
 *  |  <button [disabled]="formPassphrases.invalid">Submit button</button>
 *  </form>
 *  MatchPassword: {{formPassphrases.valid}}
 */
class Password {
    /**
     * check function
     * @param {?} AC
     * @return {?}
     */
    static MatchPassword(AC) {
        let /** @type {?} */ confirmPassword = AC.value.passphrase;
        let /** @type {?} */ password = AC.value.recheckPassphrase; // to get value in input tag
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
        const /** @type {?} */ charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
        let /** @type {?} */ retVal = "";
        for (var /** @type {?} */ i = 0, /** @type {?} */ n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
    }
}

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

export { BoxComponent, CoreModule, DebounceInputDirective, ShowPasswordDirective, SpinningIconDirective, ClickStopPropagation, ValidatorsDirective, FormErrorsComponent, NavbarComponent, NotificationsComponent, ToId, PopoverComponent, CommonService, NotificationsService, SideBarService, SidePanelService, SidePanelComponent, SidebarComponent, Password };
//# sourceMappingURL=ngx-defi-core.js.map
