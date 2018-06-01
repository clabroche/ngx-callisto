(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/animations'), require('uuid'), require('rxjs'), require('bluebird'), require('lodash'), require('rxjs/Subject'), require('rxjs/operators/debounceTime'), require('element-resize-detector'), require('@angular/common'), require('@ng-bootstrap/ng-bootstrap')) :
	typeof define === 'function' && define.amd ? define('ngx-defi-core', ['exports', '@angular/core', '@angular/animations', 'uuid', 'rxjs', 'bluebird', 'lodash', 'rxjs/Subject', 'rxjs/operators/debounceTime', 'element-resize-detector', '@angular/common', '@ng-bootstrap/ng-bootstrap'], factory) :
	(factory((global['ngx-defi-core'] = {}),global.ng.core,global.ng.animations,global.uuid,global.rxjs,global.bluebird,global.lodash,global.Rx,global.Rx.Observable.prototype,global.erdImported,global.ng.common,global.ngBootstrap));
}(this, (function (exports,core,animations,uuid,rxjs,bluebird,lodash,Subject,debounceTime,erdImported,common,ngBootstrap) { 'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */






function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var BoxComponent = /** @class */ (function () {
    function BoxComponent() {
    }
    return BoxComponent;
}());
BoxComponent.decorators = [
    { type: core.Component, args: [{
                selector: "box",
                template: "<div id=\"box\">\n    <div id=\"box-title\">\n        {{title}}\n    </div>\n    <div class=\"box-container\">\n        <ng-content></ng-content>\n    </div>\n\n</div>",
                styles: [":host{width:100%}:host #box{width:100%}:host #box .box-title{font-size:1.2rem}:host #box .box-container{background-color:#fff;-webkit-box-shadow:1px 1px 9px 0 grey;box-shadow:1px 1px 9px 0 grey}"]
            },] },
];
BoxComponent.propDecorators = {
    "title": [{ type: core.Input },],
};
var SideBarService = /** @class */ (function () {
    function SideBarService() {
        this._open = false;
    }
    SideBarService.prototype.open = function () {
        this._open = true;
    };
    SideBarService.prototype.close = function () {
        this._open = false;
    };
    SideBarService.prototype.toggle = function () {
        this._open = !this._open;
    };
    return SideBarService;
}());
SideBarService.decorators = [
    { type: core.Injectable },
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(sidebar) {
        this.sidebar = sidebar;
        this.hintState = 'close';
        this.conf = { list: [], bottom: [] };
    }
    SidebarComponent.prototype.goTo = function (data) {
        data.click();
    };
    SidebarComponent.prototype.newWindow = function (data) {
        if (data.externalUrl) {
            window.open(data.externalUrl);
        }
    };
    SidebarComponent.prototype.toggleSidebar = function () {
        this.sidebar.toggle();
    };
    SidebarComponent.prototype.toggleHint = function ($event) {
        this.hintState =
            $event.type === 'mouseover' && !this.sidebar._open
                ? 'open'
                : 'close';
    };
    return SidebarComponent;
}());
SidebarComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'sidebar',
                template: "<div class=\"openSidebar\" \n    [ngClass]=\"{'openSidebar':sidebar._open, 'closeSidebar':!sidebar._open}\"\n    [ngStyle]=\"{'background-image': url ? 'url(img)' : ''}\"\n    id=\"sidebar\">\n    <div class=\"list\">\n        <div *ngFor='let item of conf.list'>\n            <ng-container *ngTemplateOutlet=\"linkTemplate;context:{$implicit:item}\"></ng-container>  \n        </div>\n    </div>\n    <div class=\"bottomList\">\n        <div *ngFor='let item of conf.bottom'>\n            <ng-container *ngTemplateOutlet=\"linkTemplate;context:{$implicit:item}\"></ng-container>\n        </div>\n        <div id=\"toggleSidebar\" class=\"item\" (click)=\"toggleSidebar();\" [ngClass]=\"{'openSidebar':sidebar._open, 'closeSidebar':!sidebar._open}\">\n            <div class=\"icon\" >\n                <i class=\"fa fa-arrow-right\"></i>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #linkTemplate let-item>\n    <div id=\"{{item.id}}\" class=\"item\" (click)=\"goTo(item)\" (auxclick)=\"newWindow(item)\" (mouseover)=\"toggleHint($event)\" (mouseleave)=\"toggleHint($event)\">\n        <div class=\"icon\">\n            <i class=\"{{item.icon}}\"></i>\n        </div>\n        <div class=\"description\" [ngClass]=\"{'openSidebar':sidebar._open, 'closeSidebar':!sidebar._open}\">\n            {{item.description}}\n        </div>\n        <div id=\"hint-{{item.id}}\" class=\"hintContainer\"  [@hintState]=\"hintState\">\n            <div class=\"hint\">{{item.description}}</div>\n        </div>\n    </div>\n</ng-template>\n",
                styles: [".formGroup{margin-bottom:10px}.formGroup label{width:100%}@-webkit-keyframes openSidebar{0%{width:40px}to{width:175px}}@keyframes openSidebar{0%{width:40px}to{width:175px}}@-webkit-keyframes closeSidebar{0%{width:175px}to{width:40px}}@keyframes closeSidebar{0%{width:175px}to{width:40px}}@-webkit-keyframes openSidebarDescription{0%{width:0}to{width:40px}}@keyframes openSidebarDescription{0%{width:0}to{width:40px}}@-webkit-keyframes closeSidebarDescription{0%{width:40px}to{width:0}}@keyframes closeSidebarDescription{0%{width:40px}to{width:0}}@-webkit-keyframes openSidebarIcon{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(-1);transform:scale(-1)}}@keyframes openSidebarIcon{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(-1);transform:scale(-1)}}@-webkit-keyframes closeSidebarIcon{0%{-webkit-transform:scale(-1);transform:scale(-1)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes closeSidebarIcon{0%{-webkit-transform:scale(-1);transform:scale(-1)}to{-webkit-transform:scale(1);transform:scale(1)}}#sidebar{color:#fff;height:100%;overflow-x:hidden;width:40px;background-color:#343a40;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;background-size:auto 100%}#sidebar.openSidebar{-webkit-animation-name:openSidebar;animation-name:openSidebar;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}#sidebar.closeSidebar{-webkit-animation-name:closeSidebar;animation-name:closeSidebar;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}#sidebar .bottomList,#sidebar .list{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%}#sidebar .bottomList.list,#sidebar .list.list{height:100%}#sidebar .bottomList .item,#sidebar .list .item{-webkit-box-shadow:none;box-shadow:none;-webkit-box-pack:left;-ms-flex-pack:left;justify-content:left;margin:0;border:none;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;padding-bottom:15px;padding-top:15px}#sidebar .bottomList .item:hover,#sidebar .list .item:hover{background-color:rgba(0,0,0,.5)}#sidebar .bottomList .item .hintContainer,#sidebar .list .item .hintContainer{position:absolute;overflow:hidden;left:40px;max-width:0;background-color:#1d2124;z-index:3}#sidebar .bottomList .item .hintContainer .hint,#sidebar .list .item .hintContainer .hint{color:#fff;padding:10px}#sidebar .bottomList .item .icon,#sidebar .list .item .icon{width:40px;text-align:center;font-size:1.5em}#sidebar .bottomList .item .description.openSidebar,#sidebar .list .item .description.openSidebar{-webkit-animation-name:openSidebarDescription;animation-name:openSidebarDescription;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}#sidebar .bottomList .item .description.closeSidebar,#sidebar .list .item .description.closeSidebar{-webkit-animation-name:closeSidebarDescription;animation-name:closeSidebarDescription;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}#sidebar .bottomList #toggleSidebar,#sidebar .list #toggleSidebar{background-color:rgba(0,0,0,.5)}#sidebar .bottomList #toggleSidebar .icon,#sidebar .list #toggleSidebar .icon{font-size:1em}#sidebar .bottomList #toggleSidebar.openSidebar,#sidebar .list #toggleSidebar.openSidebar{-webkit-animation-name:openSidebarIcon;animation-name:openSidebarIcon;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}#sidebar .bottomList #toggleSidebar.closeSidebar,#sidebar .list #toggleSidebar.closeSidebar{-webkit-animation-name:closeSidebarIcon;animation-name:closeSidebarIcon;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}"],
                animations: [
                    animations.trigger('hintState', [
                        animations.state('open', animations.style({
                            'max-width': '200px'
                        })),
                        animations.state('close', animations.style({
                            'max-width': '0'
                        })),
                        animations.transition('open => close', animations.animate('100ms ease-in')),
                        animations.transition('close => open', animations.animate('100ms ease-out'))
                    ])
                ]
            },] },
];
SidebarComponent.ctorParameters = function () { return [
    { type: SideBarService, },
]; };
SidebarComponent.propDecorators = {
    "conf": [{ type: core.Input, args: ['conf',] },],
    "img": [{ type: core.Input, args: ['img',] },],
};
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.name = '';
    }
    return NavbarComponent;
}());
NavbarComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'navbar',
                template: "<div id=\"navbar\" [ngStyle]=\"{'background-image': url ? 'url(img)' : ''}\">\n  <div id=\"leftRight\">\n    <div id=\"left\">\n      <div id=\"logoContainer\">\n        <ng-content select=\"[logo]\"></ng-content>\n      </div>\n      <div id=\"description\">\n        {{name}}\n      </div>\n    </div>\n\n    <div id=\"right\">\n      <div id=\"actions\">\n        <ng-content selector=\"[action]\"></ng-content>\n      </div>\n    </div>\n  </div>\n</div>",
                styles: [".formGroup{margin-bottom:10px}.formGroup label{width:100%}#navbar{height:40px;background-color:#343a40;color:#fff;max-height:40px;background-size:100%}#navbar #leftRight{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%}#navbar #leftRight #left{height:100%;padding-left:5px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}#navbar #leftRight #left #logoContainer{height:80%}#navbar #leftRight #left #logoContainer ::ng-deep [logo]{height:100%;border-radius:100%;overflow:hidden}#navbar #leftRight #left #logoContainer ::ng-deep [logo] img{height:100%}#navbar #leftRight #left #description{margin-left:10px;color:#fff;font-size:1.2em}#navbar #leftRight #right{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;margin-right:10px}#navbar #leftRight #right #actions{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}#navbar #leftRight #right #actions ::ng-deep .icon{font-size:1.7em}"]
            },] },
];
NavbarComponent.ctorParameters = function () { return []; };
NavbarComponent.propDecorators = {
    "name": [{ type: core.Input, args: ['name',] },],
    "img": [{ type: core.Input, args: ['img',] },],
};
var FormErrorsComponent = /** @class */ (function () {
    function FormErrorsComponent() {
    }
    return FormErrorsComponent;
}());
FormErrorsComponent.decorators = [
    { type: core.Component, args: [{
                selector: "formErrors",
                template: "<!-- {{model.errors | json}} -->\n\n<ul *ngIf=\"model && model.errors\">\n    <li *ngIf=\"model.errors.pattern\" class=\"hint\">\n         <ng-container *ngIf=\"patternName; else notPatternName\">\n            {{patternName}}\n        </ng-container>\n        <ng-template #notPatternName>\n            Pattern: {{model.errors.pattern.requiredPattern}}\n        </ng-template>\n    </li>\n    <li *ngIf=\"model.errors.required\" class=\"hint\">\n        Obligatoire\n    </li>\n    <li *ngIf=\"model.errors.minlength\" class=\"hint\">\n        Contient au moins {{model.errors.minlength.requiredLength}} caract\u00E8res\n    </li>\n    <li *ngIf=\"model.errors.maxlength\" class=\"hint\">\n        Contient au plus {{model.errors.maxlength.requiredLength}} caract\u00E8res\n    </li>\n    <li *ngIf=\"model.errors.recheckPassphrase\" class=\"hint\">\n        Doit correspondre \u00E0 la phrase de passe\n    </li>\n    <li *ngIf=\"model.errors.email\" class=\"hint\">\n        Doit \u00EAtre un email\n    </li>\n</ul>\n",
                styles: [".formGroup{margin-bottom:10px}.formGroup label{width:100%}:host{display:inline-block;font-size:.7em;width:100%;min-height:.7em;top:-2px;line-height:0;text-align:right;color:#dc3545}"]
            },] },
];
FormErrorsComponent.propDecorators = {
    "model": [{ type: core.Input, args: ['model',] },],
    "patternName": [{ type: core.Input, args: ['patternName',] },],
};
var NotificationsService = /** @class */ (function () {
    function NotificationsService() {
        this.notifications = [];
        this.addEvent = new rxjs.Subject();
        this.removeEvent = new rxjs.Subject();
        var notificationsDelay = +localStorage.getItem("notificationsDelay");
        if (notificationsDelay < 500) {
            notificationsDelay = 6000;
            localStorage.setItem("notificationsDelay", "6000");
        }
    }
    NotificationsService.prototype.add = function (title, msg) {
        var notif = {
            id: uuid.v4(),
            title: title || "",
            msg: msg || ""
        };
        this.addEvent.next(notif);
        notif.timeout = this.defaultTimeout(notif);
        this.notifications.push(notif);
        return notif;
    };
    NotificationsService.prototype.defaultTimeout = function (notif) {
        var _this = this;
        return setTimeout(function () {
            _this.delete(notif.id);
        }, +localStorage.getItem("notificationsDelay"));
    };
    NotificationsService.prototype.updateNotif = function (id, _notif) {
        var _this = this;
        this.notifications.map(function (notif) {
            if (notif.id === id) {
                if (_notif.msg)
                    notif.msg = _notif.msg;
                if (_notif.title)
                    notif.title = _notif.title;
                clearTimeout(notif.timeout);
                notif.timeout = _this.defaultTimeout(notif);
            }
        });
    };
    NotificationsService.prototype.delete = function (id) {
        this.removeEvent.next(id);
        this.notifications = this.notifications.filter(function (notif) { return notif.id !== id; });
    };
    NotificationsService.prototype.deleteAll = function () {
        var _this = this;
        this.notifications.map(function (notif) { return _this.delete(notif.id); });
    };
    return NotificationsService;
}());
NotificationsService.decorators = [
    { type: core.Injectable },
];
NotificationsService.ctorParameters = function () { return []; };
var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent(ns, renderer2) {
        var _this = this;
        this.ns = ns;
        this.renderer2 = renderer2;
        this._notifications = [];
        this.ns.addEvent.subscribe(function (data) { return _this._notifications.push(data); });
        this.ns.removeEvent.subscribe(function (id) { return _this.deleteNotif(id); });
    }
    NotificationsComponent.prototype.deleteNotif = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var htmlNotif;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getHtmlNotif(id)];
                    case 1:
                        htmlNotif = _a.sent();
                        if (!htmlNotif)
                            return [2 /*return*/];
                        this.renderer2.addClass(htmlNotif, "deleteNotif");
                        setTimeout(function () {
                            _this._notifications = _this._notifications.filter(function (notif) { return notif.id !== id; });
                            resolve();
                        }, 500);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    NotificationsComponent.prototype.deleteAll = function () {
        var _this = this;
        return bluebird.each(this.htmlNotifications, function (htmlNotif) {
            _this.deleteNotif(htmlNotif.nativeElement.id);
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve();
                }, 50);
            });
        });
    };
    NotificationsComponent.prototype.getHtmlNotif = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var htmlNotif;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bluebird.filter(this.htmlNotifications, function (htmlNotif) { return htmlNotif.nativeElement.id === id; })];
                    case 1:
                        htmlNotif = _a.sent();
                        if (htmlNotif.length)
                            return [2 /*return*/, htmlNotif.pop().nativeElement];
                        return [2 /*return*/];
                }
            });
        });
    };
    return NotificationsComponent;
}());
NotificationsComponent.decorators = [
    { type: core.Component, args: [{
                selector: "notifications",
                template: "<div id=\"notifications\">\n    <div id=\"closeAll\" *ngIf='_notifications.length' (click)=\"deleteAll()\">\n        <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n    </div>\n    <div class=\"notifsWrapper\">\n        <div class=\"notifWrapper\" (click)=\"ns.delete(notif.id)\" #notifModel *ngFor=\"let notif of _notifications\" [id]=\"notif.id\">\n            <div class=\"notifContainer\">\n                <div class=\"title\">\n                    {{notif.title}}\n                </div>\n                <div class=\"msg\">\n                    {{notif.msg}}\n                </div>\n            </div>\n        </div>\n    </div>\n</div>",
                styles: [".formGroup{margin-bottom:10px}.formGroup label{width:100%}@-webkit-keyframes openNotif{0%{max-height:0}to{max-height:400px}}@keyframes openNotif{0%{max-height:0}to{max-height:400px}}@-webkit-keyframes closeNotif{0%{max-height:400px}to{max-height:0}}@keyframes closeNotif{0%{max-height:400px}to{max-height:0}}#notifications{z-index:100000;position:fixed;bottom:20px;right:20px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}#notifications #closeAll{text-align:right}#notifications #closeAll i{font-size:1.7em;background-color:#343a40;color:#fff;padding:10px;-webkit-box-shadow:0 0 10px grey;box-shadow:0 0 10px grey}#notifications .notifWrapper{-webkit-animation-name:openNotif;animation-name:openNotif;-webkit-animation-duration:.4s;animation-duration:.4s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;overflow-y:hidden;-webkit-box-shadow:0 0 10px grey;box-shadow:0 0 10px grey;margin-top:10px;background-color:#343a40;color:#fff}#notifications .notifWrapper.deleteNotif{-webkit-animation-name:closeNotif;animation-name:closeNotif;-webkit-animation-duration:.4s;animation-duration:.4s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}#notifications .notifWrapper .notifContainer{padding:10px;width:400px}#notifications .notifWrapper .notifContainer .title{width:100%;border-bottom:1px solid #fff}#notifications .notifWrapper .notifContainer .msg{width:100%;padding-top:10px}"]
            },] },
];
NotificationsComponent.ctorParameters = function () { return [
    { type: NotificationsService, },
    { type: core.Renderer2, },
]; };
NotificationsComponent.propDecorators = {
    "htmlNotifications": [{ type: core.ViewChildren, args: ['notifModel',] },],
};
var SidePanelService = /** @class */ (function () {
    function SidePanelService() {
        this._open = false;
    }
    SidePanelService.prototype.open = function (template, context) {
        if (template)
            this.template = template;
        if (context)
            this.context = context;
        this._open = true;
    };
    SidePanelService.prototype.close = function () {
        this._open = false;
    };
    SidePanelService.prototype.toggle = function () {
        this._open = !this._open;
    };
    return SidePanelService;
}());
SidePanelService.decorators = [
    { type: core.Injectable },
];
var SidePanelComponent = /** @class */ (function () {
    function SidePanelComponent(sidepanel) {
        this.sidepanel = sidepanel;
    }
    return SidePanelComponent;
}());
SidePanelComponent.decorators = [
    { type: core.Component, args: [{
                selector: "sidePanel",
                template: "<div id=\"sidePanelClose\" [ngClass]=\"{'openSidePanel':sidepanel._open, 'closeSidePanel':!sidepanel._open}\" (click)=\"sidepanel._open=false\">\n    <i class='fa fa-chevron-right'></i>\n    <div id=\"sidePanelContainer\" click-stop-propagation>\n        <ng-container *ngTemplateOutlet=\"sidepanel.template; context: sidepanel.context\"></ng-container>\n    </div>\n</div>\n ",
                styles: [".formGroup{margin-bottom:10px}.formGroup label{width:100%}@-webkit-keyframes openSidePanel{0%{max-width:0;padding-left:0}100%{padding-left:10%;max-width:100vw}}@keyframes openSidePanel{0%{max-width:0;padding-left:0}100%{padding-left:10%;max-width:100vw}}@-webkit-keyframes closeSidePanel{0%{padding-left:10%;max-width:100vw}100%{padding-left:0;max-width:0}}@keyframes closeSidePanel{0%{padding-left:10%;max-width:100vw}100%{padding-left:0;max-width:0}}:host{height:100%}:host #sidePanelClose{position:absolute;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;right:0;width:100vw;height:100%;background-color:rgba(0,0,0,.7);max-width:0;overflow-x:hidden}:host #sidePanelClose i{color:#fff;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#343a40;padding-left:10px;padding-right:10px}:host #sidePanelClose ::ng-deep #sideHeader{background-color:#343a40;color:#fff;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:10px}:host #sidePanelClose ::ng-deep #sideContainer{padding:20px}:host #sidePanelClose #sidePanelContainer{background-color:#fff;height:100%}:host #sidePanelClose.closeSidePanel{-webkit-animation-name:closeSidePanel;animation-name:closeSidePanel;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}:host #sidePanelClose.openSidePanel{-webkit-animation-name:openSidePanel;animation-name:openSidePanel;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}"]
            },] },
];
SidePanelComponent.ctorParameters = function () { return [
    { type: SidePanelService, },
]; };
var CommonService = /** @class */ (function () {
    function CommonService() {
        this.api = "http://localhost:3000";
        this.graphQL = this.api + '/graphql';
        this.refreshTokenInterval = 4000;
    }
    CommonService.prototype.equalityObjects = function (a, b) {
        var differences = this.differences(a, b);
        var d = differences.different.length + differences.missing_from_first.length + differences.missing_from_second.length;
        return d === 0 ? true : false;
    };
    CommonService.prototype.differences = function (a, b) {
        var _this = this;
        var result = {
            different: [],
            missing_from_first: [],
            missing_from_second: []
        };
        lodash.reduce(a, function (result, value, key) {
            if (b.hasOwnProperty(key)) {
                if (lodash.isEqual(value, b[key]))
                    return result;
                else {
                    if (typeof (a[key]) != typeof ({}) || typeof (b[key]) != typeof ({})) {
                        result.different.push(key);
                        return result;
                    }
                    else {
                        var deeper = _this.differences(a[key], b[key]);
                        result.different = result.different.concat(lodash.map(deeper.different, function (sub_path) { return key + "." + sub_path; }));
                        result.missing_from_second = result.missing_from_second.concat(lodash.map(deeper.missing_from_second, function (sub_path) { return key + "." + sub_path; }));
                        result.missing_from_first = result.missing_from_first.concat(lodash.map(deeper.missing_from_first, function (sub_path) { return key + "." + sub_path; }));
                        return result;
                    }
                }
            }
            else {
                result.missing_from_second.push(key);
                return result;
            }
        }, result);
        lodash.reduce(b, function (result, value, key) {
            if (a.hasOwnProperty(key))
                return result;
            else {
                result.missing_from_first.push(key);
                return result;
            }
        }, result);
        return result;
    };
    CommonService.prototype.wait = function (ms) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve();
            }, ms);
        });
    };
    CommonService.prototype.flatten = function (obj) {
        var newObj = {};
        function flat(obj) {
            Object.keys(obj).map(function (key) {
                if (typeof obj[key] === "object")
                    flat(obj[key]);
                else
                    newObj[key] = obj[key];
            });
        }
        flat(obj);
        return newObj;
    };
    CommonService.prototype.stringifyWithoutPropertiesQuote = function (obj) {
        return JSON.stringify(obj)
            .replace(/\\"/g, "\uFFFF")
            .replace(/\"([^"]+)\":/g, "$1:")
            .replace(/\uFFFF/g, "\\\"");
    };
    return CommonService;
}());
CommonService.decorators = [
    { type: core.Injectable },
];
CommonService.ctorParameters = function () { return []; };
var DebounceInputDirective = /** @class */ (function () {
    function DebounceInputDirective() {
        this.debounceTime = 500;
        this.debounce = new core.EventEmitter();
        this.subject = new Subject.Subject();
    }
    DebounceInputDirective.prototype.ngOnInit = function () {
        this.createSubsription();
    };
    DebounceInputDirective.prototype.createSubsription = function () {
        var _this = this;
        this.subscription = this.subject.pipe(debounceTime.debounceTime(this.debounceTime)).subscribe(function (e) { return _this.debounce.emit(e); });
    };
    DebounceInputDirective.prototype.ngOnChanges = function (changes) {
        if (changes["debounceTime"] && this.subject.observers[0])
            this.subject.observers[0]['dueTime'] = changes["debounceTime"].currentValue;
    };
    DebounceInputDirective.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    DebounceInputDirective.prototype.keyupEvent = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.subject.next(event);
    };
    return DebounceInputDirective;
}());
DebounceInputDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[debounce-input]'
            },] },
];
DebounceInputDirective.propDecorators = {
    "debounceTime": [{ type: core.Input },],
    "debounce": [{ type: core.Output },],
    "keyupEvent": [{ type: core.HostListener, args: ['keyup', ['$event'],] },],
};
var SpinningIconDirective = /** @class */ (function () {
    function SpinningIconDirective(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
    }
    SpinningIconDirective.prototype.start = function (event) {
        this.renderer.addClass(this.hostElement.nativeElement, 'spin-animation');
        this.renderer.addClass(this.hostElement.nativeElement, 'fa-spinner');
    };
    SpinningIconDirective.prototype.stop = function () {
        this.renderer.removeClass(this.hostElement.nativeElement, 'spin-animation');
        this.renderer.removeClass(this.hostElement.nativeElement, 'fa-spinner');
    };
    return SpinningIconDirective;
}());
SpinningIconDirective.decorators = [
    { type: core.Directive, args: [{
                selector: "[spinning-icon]",
                exportAs: 'spinning'
            },] },
];
SpinningIconDirective.ctorParameters = function () { return [
    { type: core.Renderer2, },
    { type: core.ElementRef, },
]; };
var ClickStopPropagation = /** @class */ (function () {
    function ClickStopPropagation() {
    }
    ClickStopPropagation.prototype.onClick = function (event) {
        event.stopPropagation();
    };
    return ClickStopPropagation;
}());
ClickStopPropagation.decorators = [
    { type: core.Directive, args: [{
                selector: "[click-stop-propagation]"
            },] },
];
ClickStopPropagation.propDecorators = {
    "onClick": [{ type: core.HostListener, args: ["click", ["$event"],] },],
};
var ValidatorsDirective = /** @class */ (function () {
    function ValidatorsDirective(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
    }
    ValidatorsDirective.prototype.ngAfterViewChecked = function () {
        this.onInputChange();
    };
    ValidatorsDirective.prototype.onInputChange = function () {
        if (this.validators.valid) {
            this.renderer.addClass(this.hostElement.nativeElement, 'goodInput');
            this.renderer.removeClass(this.hostElement.nativeElement, 'badInput');
        }
        else {
            this.renderer.addClass(this.hostElement.nativeElement, 'badInput');
            this.renderer.removeClass(this.hostElement.nativeElement, 'goodInput');
        }
    };
    return ValidatorsDirective;
}());
ValidatorsDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[validators]',
                host: {
                    "(input)": 'onInputChange($event)'
                }
            },] },
];
ValidatorsDirective.ctorParameters = function () { return [
    { type: core.Renderer2, },
    { type: core.ElementRef, },
]; };
ValidatorsDirective.propDecorators = {
    "validators": [{ type: core.Input },],
};
var ShowPasswordDirective = /** @class */ (function () {
    function ShowPasswordDirective(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
    }
    ShowPasswordDirective.prototype.ngOnInit = function () {
        var _this = this;
        var container = this.renderer.createElement('div');
        this.renderer.setStyle(container, 'position', 'relative');
        var div = this.renderer.createElement('i');
        this.renderer.addClass(div, 'fa');
        this.renderer.addClass(div, 'fa-eye-slash');
        this.renderer.addClass(div, 'toggle-eye');
        this.renderer.setStyle(div, 'position', 'absolute');
        this.renderer.setStyle(div, 'top', 0);
        this.renderer.setStyle(div, 'right', 0);
        this.renderer.setStyle(div, 'display', 'inherit');
        this.renderer.setStyle(div, 'cursor', 'pointer');
        this.renderer.listen(div, 'click', function (event) {
            var input = _this.hostElement.nativeElement;
            if (input.type === 'password') {
                input.type = 'text';
                _this.renderer.addClass(div, 'fa-eye');
                _this.renderer.removeClass(div, 'fa-eye-slash');
            }
            else {
                input.type = 'password';
                _this.renderer.removeClass(div, 'fa-eye');
                _this.renderer.addClass(div, 'fa-eye-slash');
            }
        });
        var parent = this.hostElement.nativeElement.parentNode;
        this.renderer.insertBefore(parent, container, this.renderer.nextSibling(this.hostElement.nativeElement));
        this.renderer.appendChild(container, this.hostElement.nativeElement);
        this.renderer.appendChild(container, div);
    };
    return ShowPasswordDirective;
}());
ShowPasswordDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[show-password]',
            },] },
];
ShowPasswordDirective.ctorParameters = function () { return [
    { type: core.Renderer2, },
    { type: core.ElementRef, },
]; };
var ToId = /** @class */ (function () {
    function ToId() {
    }
    ToId.prototype.transform = function (value) {
        return value.split(' ').join('').replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
    };
    return ToId;
}());
ToId.decorators = [
    { type: core.Pipe, args: [{ name: 'toId', pure: true },] },
];
var erd = erdImported;
var PopoverComponent = /** @class */ (function () {
    function PopoverComponent(renderer) {
        this.renderer = renderer;
        this.open = false;
        this.placement = 'right';
        this.positionClass = 'popover-right';
        this.resizeDetector = erd({
            strategy: 'scroll'
        });
    }
    PopoverComponent.prototype.loadState = function (open) {
        open ?
            this.renderer.setStyle(this.popupContainer.nativeElement, 'visibility', 'visible') :
            this.renderer.setStyle(this.popupContainer.nativeElement, 'visibility', 'hidden');
    };
    PopoverComponent.prototype.ngOnChanges = function (changes) {
        this.loadState(changes['open'].currentValue);
    };
    PopoverComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.resizeDetector.listenTo(this.popupContainer.nativeElement, function (element) {
            var width = element.offsetWidth;
            var height = element.offsetHeight;
            if (_this.placement === 'top' || _this.placement === 'bottom') {
                _this.renderer.setStyle(_this.popupContainer.nativeElement, 'left', '-' + width / 2 + 'px');
            }
        });
    };
    return PopoverComponent;
}());
PopoverComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'popover',
                template: "<div class=\"defi-popover\">\n    <div class=\"defi-popover-container {{placement}}\" #popupContainer>\n        <ng-content select=\"[popover=content]\"></ng-content>\n    </div>\n    <ng-content></ng-content>\n</div>",
                styles: [".formGroup{margin-bottom:10px}.formGroup label{width:100%}:host .defi-popover{position:relative;width:100%}:host .defi-popover .defi-popover-container{padding:10px;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:.1s;transition-duration:.1s;-webkit-transition-timing-function:cubic-bezier(.075,.82,.165,1);transition-timing-function:cubic-bezier(.075,.82,.165,1);visibility:hidden;border:1px solid #d2d2d2;position:absolute;z-index:1;background-color:#fff;border-radius:3px}:host .defi-popover .defi-popover-container::after{content:\"\";position:absolute;border-style:solid;border-width:5px}:host .defi-popover .defi-popover-container.right{left:calc(100% + 10px)}:host .defi-popover .defi-popover-container.right::after{right:100%;top:50%;margin-top:-10px;border-color:transparent #b9b9b9 transparent transparent}:host .defi-popover .defi-popover-container.left{right:calc(100% + 10px)}:host .defi-popover .defi-popover-container.left::after{left:100%;top:50%;margin-top:-10px;border-color:transparent transparent transparent #b9b9b9}:host .defi-popover .defi-popover-container.bottom{top:calc(100% + 10px);left:-101.5px;margin-left:50%}:host .defi-popover .defi-popover-container.bottom::after{left:50%;margin-left:-5px;bottom:100%;border-color:transparent transparent #b9b9b9}:host .defi-popover .defi-popover-container.top{bottom:calc(100% + 10px);left:-101.5px;margin-left:50%}:host .defi-popover .defi-popover-container.top::after{left:50%;margin-left:-5px;top:100%;border-color:#b9b9b9 transparent transparent}:host ::ng-deep ul{list-style:none;margin:0;padding:0}"]
            },] },
];
PopoverComponent.ctorParameters = function () { return [
    { type: core.Renderer2, },
]; };
PopoverComponent.propDecorators = {
    "open": [{ type: core.Input, args: ['open',] },],
    "placement": [{ type: core.Input, args: ['placement',] },],
    "popupContainer": [{ type: core.ViewChild, args: ['popupContainer',] },],
};
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule,
            providers: [
                CommonService,
                SideBarService,
                NotificationsService,
                SidePanelService,
            ]
        };
    };
    return CoreModule;
}());
CoreModule.decorators = [
    { type: core.NgModule, args: [{
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
                    common.CommonModule,
                    ngBootstrap.NgbModule.forRoot(),
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
var Password = /** @class */ (function () {
    function Password() {
    }
    Password.MatchPassword = function (AC) {
        var confirmPassword = AC.value.passphrase;
        var password = AC.value.recheckPassphrase;
        if (confirmPassword !== password) {
            return { recheckPassphrase: true };
        }
        else
            return null;
    };
    Password.GeneratePassword = function (length) {
        if (length === void 0) { length = 12; }
        var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
        var retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
    };
    return Password;
}());

exports.BoxComponent = BoxComponent;
exports.CoreModule = CoreModule;
exports.DebounceInputDirective = DebounceInputDirective;
exports.ShowPasswordDirective = ShowPasswordDirective;
exports.SpinningIconDirective = SpinningIconDirective;
exports.ClickStopPropagation = ClickStopPropagation;
exports.ValidatorsDirective = ValidatorsDirective;
exports.FormErrorsComponent = FormErrorsComponent;
exports.NavbarComponent = NavbarComponent;
exports.NotificationsComponent = NotificationsComponent;
exports.ToId = ToId;
exports.PopoverComponent = PopoverComponent;
exports.CommonService = CommonService;
exports.NotificationsService = NotificationsService;
exports.SideBarService = SideBarService;
exports.SidePanelService = SidePanelService;
exports.SidePanelComponent = SidePanelComponent;
exports.SidebarComponent = SidebarComponent;
exports.Password = Password;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-defi-core.umd.js.map
