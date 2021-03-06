import { __awaiter, __generator, __extends, __spread } from 'tslib';
import { Component, Input, Output, EventEmitter, NgModule, Injectable, Directive, Renderer2, ElementRef, HostListener, Pipe, ViewChild, ChangeDetectorRef, ViewChildren, TemplateRef, ContentChild, ContentChildren, ViewContainerRef, ComponentFactoryResolver, defineInjectable, inject } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { merge, cloneDeep, reduce, isEqual, map } from 'lodash';
import * as erdImported from 'element-resize-detector';
import { v4 } from 'uuid';
import { Subject } from 'rxjs';
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

var CltBoxComponent = /** @class */ (function () {
    function CltBoxComponent() {
    }
    return CltBoxComponent;
}());
CltBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'clt-box',
                template: "<div id=\"box\">\n    <div id=\"box-title\">\n        {{title}}\n    </div>\n    <div class=\"box-container\">\n        <ng-content></ng-content>\n    </div>\n\n</div>",
                styles: [":host{width:100%}:host #box{width:100%}:host #box .box-title{font-size:1.2rem}:host #box .box-container{background-color:#fff;-webkit-box-shadow:1px 1px 9px 0 grey;box-shadow:1px 1px 9px 0 grey}"]
            },] },
];
CltBoxComponent.propDecorators = {
    "title": [{ type: Input },],
};
var CltPanelComponent = /** @class */ (function () {
    function CltPanelComponent() {
        this.toggleable = false;
        this.collapsed = false;
        this.toggleChange = new EventEmitter();
        this.state = 'open';
    }
    CltPanelComponent.prototype.ngOnInit = function () {
        if (this.collapsed) {
            this.state = this.collapsed ? 'close' : 'open';
        }
    };
    CltPanelComponent.prototype.toggleCollapse = function () {
        if (this.toggleable) {
            this.collapsed = !this.collapsed;
            this.state = this.collapsed ? 'close' : 'open';
            this.toggleChange.emit(this.collapsed);
        }
    };
    return CltPanelComponent;
}());
CltPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'clt-panel',
                template: "<div class=\"panel-container\">\n  <div class=\"panel-header\" *ngIf=\"header\">\n    {{header}}\n    <div class=\"panel-actions\">\n        <button *ngIf='toggleable' (click)=\"toggleCollapse()\">\n          <ng-container *ngIf='collapsed'>+</ng-container>\n          <ng-container *ngIf='!collapsed'>-</ng-container>\n        </button>\n    </div>\n  </div>\n  <div class=\"panel-body\" [@state]=\"state\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                styles: [".panel-container .panel-header{padding:10px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:var(--headerBgColor);color:var(--headerTextColor);border-width:var(--headerBorderWidth);border-color:var(--headerBorderColor);font-weight:var(--headerFontWeight)}.panel-container{margin:5px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;border:var(--contentBorderWidth) solid var(--contentBorderColor)}.panel-container .panel-header{font-weight:700;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.panel-container .panel-header .panel-actions button{border:none;background-color:var(--headerBgColorAccent);color:var(--headerTextColor);padding:3px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-weight:700}.panel-container .panel-header .panel-actions button:hover{background-color:var(--stateHoverBgColor)}.panel-container .panel-body{overflow:hidden;padding:10px}"],
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
CltPanelComponent.propDecorators = {
    "header": [{ type: Input },],
    "toggleable": [{ type: Input },],
    "collapsed": [{ type: Input },],
    "toggleChange": [{ type: Output },],
};
var CltContainersModule = /** @class */ (function () {
    function CltContainersModule() {
    }
    return CltContainersModule;
}());
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
var CltCommonService = /** @class */ (function () {
    function CltCommonService() {
        this.api = 'http://localhost:3000';
        this.graphQL = this.api + '/graphql';
        this.refreshTokenInterval = 4000;
    }
    CltCommonService.prototype.equalityObjects = function (a, b) {
        var differences = this.differences(a, b);
        var d = differences.different.length + differences.missing_from_first.length + differences.missing_from_second.length;
        return d === 0 ? true : false;
    };
    CltCommonService.prototype.differences = function (a, b) {
        var _this = this;
        var result = {
            different: [],
            missing_from_first: [],
            missing_from_second: []
        };
        reduce(a, function (_result, value, key) {
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
                        var deeper = _this.differences(a[key], b[key]);
                        result.different = result.different.concat(map(deeper.different, function (sub_path) { return key + '.' + sub_path; }));
                        result.missing_from_second =
                            result.missing_from_second.concat(map(deeper.missing_from_second, function (sub_path) { return key + '.' + sub_path; }));
                        result.missing_from_first =
                            result.missing_from_first.concat(map(deeper.missing_from_first, function (sub_path) { return key + '.' + sub_path; }));
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
    };
    CltCommonService.prototype.wait = function (ms) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve();
            }, ms);
        });
    };
    CltCommonService.prototype.flatten = function (obj) {
        var newObj = {};
        function flat(_obj) {
            Object.keys(_obj).map(function (key) {
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
    };
    CltCommonService.prototype.stringifyWithoutPropertiesQuote = function (obj) {
        return JSON.stringify(obj)
            .replace(/(\{ *"enum" *\: *")([a-z A-Z 0-9]*)" *}/gm, '$2')
            .replace(/\\"/g, '\uFFFF')
            .replace(/\"([^"]+)\":/g, '$1:')
            .replace(/\uFFFF/g, '\\"');
    };
    CltCommonService.prototype.filter = function () {
        var filterFun = function (value) { return value; };
        return {
            filter: function () { return filterFun; },
            update: function (search, propertiesToSearch) {
                filterFun = function (accounts) {
                    var tmpAccounts = [];
                    propertiesToSearch.map(function (propertyToSearch) {
                        accounts.forEach(function (account) {
                            var accountValue = recursiveCheck(account, propertyToSearch.split('.'));
                            if (accountValue && accountValue.toUpperCase().includes(search.toUpperCase())) {
                                tmpAccounts.push(account);
                            }
                        });
                    });
                    return tmpAccounts.reduce(function (a, b) {
                        if (a.indexOf(b) < 0)
                            a.push(b);
                        return a;
                    }, []);
                };
            }
        };
        function recursiveCheck(obj, props) {
            if (props.length)
                return recursiveCheck(obj[props[0]], props.slice(1, props.length));
            return obj;
        }
    };
    return CltCommonService;
}());
CltCommonService.decorators = [
    { type: Injectable },
];
CltCommonService.ctorParameters = function () { return []; };
var CltSpinningIconDirective = /** @class */ (function () {
    function CltSpinningIconDirective(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
    }
    CltSpinningIconDirective.prototype.start = function (event) {
        this.renderer.addClass(this.hostElement.nativeElement, 'spin-animation');
        this.renderer.addClass(this.hostElement.nativeElement, 'fa-spinner');
    };
    CltSpinningIconDirective.prototype.stop = function () {
        this.renderer.removeClass(this.hostElement.nativeElement, 'spin-animation');
        this.renderer.removeClass(this.hostElement.nativeElement, 'fa-spinner');
    };
    return CltSpinningIconDirective;
}());
CltSpinningIconDirective.decorators = [
    { type: Directive, args: [{
                selector: '[clt-spinning-icon]',
                exportAs: 'clt-spinning-icon'
            },] },
];
CltSpinningIconDirective.ctorParameters = function () { return [
    { type: Renderer2, },
    { type: ElementRef, },
]; };
var CltClickStopPropagationDirective = /** @class */ (function () {
    function CltClickStopPropagationDirective() {
    }
    CltClickStopPropagationDirective.prototype.onClick = function (event) {
        event.stopPropagation();
    };
    return CltClickStopPropagationDirective;
}());
CltClickStopPropagationDirective.decorators = [
    { type: Directive, args: [{
                selector: '[clt-click-stop-propagation]'
            },] },
];
CltClickStopPropagationDirective.propDecorators = {
    "onClick": [{ type: HostListener, args: ['click', ['$event'],] },],
};
var CltToId = /** @class */ (function () {
    function CltToId() {
    }
    CltToId.prototype.transform = function (value) {
        return value.split(' ').join('').replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
    };
    return CltToId;
}());
CltToId.decorators = [
    { type: Pipe, args: [{ name: 'clt-toId', pure: true },] },
];
var erd = erdImported;
var CltPopoverComponent = /** @class */ (function () {
    function CltPopoverComponent(renderer) {
        this.renderer = renderer;
        this.open = false;
        this.placement = 'right';
        this.positionClass = 'popover-right';
        this.resizeDetector = erd({
            strategy: 'scroll'
        });
    }
    CltPopoverComponent.prototype.loadState = function (open) {
        open ?
            this.renderer.setStyle(this.popupContainer.nativeElement, 'visibility', 'visible') :
            this.renderer.setStyle(this.popupContainer.nativeElement, 'visibility', 'hidden');
    };
    CltPopoverComponent.prototype.ngOnChanges = function (changes) {
        this.loadState(changes['open'].currentValue);
    };
    CltPopoverComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.resizeDetector.listenTo(this.popupContainer.nativeElement, function (element) {
            var width = element.offsetWidth;
            var height = element.offsetHeight;
            if (_this.placement === 'top' || _this.placement === 'bottom') {
                _this.renderer.setStyle(_this.popupContainer.nativeElement, 'left', '-' + width / 2 + 'px');
            }
        });
    };
    return CltPopoverComponent;
}());
CltPopoverComponent.decorators = [
    { type: Component, args: [{
                selector: 'clt-popover',
                template: "<div class=\"clt-popover\">\n    <div class=\"clt-popover-container {{placement}}\" #popupContainer>\n        <ng-content select=\"[popover=content]\"></ng-content>\n    </div>\n    <ng-content></ng-content>\n</div>",
                styles: [".formGroup{margin-bottom:10px}.formGroup label{width:100%}:host .clt-popover{position:relative;width:100%}:host .clt-popover .clt-popover-container{padding:10px;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:.1s;transition-duration:.1s;-webkit-transition-timing-function:cubic-bezier(.075,.82,.165,1);transition-timing-function:cubic-bezier(.075,.82,.165,1);visibility:hidden;border:1px solid #d2d2d2;position:absolute;z-index:1;background-color:#fff;border-radius:3px}:host .clt-popover .clt-popover-container::after{content:\"\";position:absolute;border-style:solid;border-width:5px}:host .clt-popover .clt-popover-container.right{left:calc(100% + 10px)}:host .clt-popover .clt-popover-container.right::after{right:100%;top:50%;margin-top:-10px;border-color:transparent #b9b9b9 transparent transparent}:host .clt-popover .clt-popover-container.left{right:calc(100% + 10px)}:host .clt-popover .clt-popover-container.left::after{left:100%;top:50%;margin-top:-10px;border-color:transparent transparent transparent #b9b9b9}:host .clt-popover .clt-popover-container.bottom{top:calc(100% + 10px);left:-101.5px;margin-left:50%}:host .clt-popover .clt-popover-container.bottom::after{left:50%;margin-left:-5px;bottom:100%;border-color:transparent transparent #b9b9b9}:host .clt-popover .clt-popover-container.top{bottom:calc(100% + 10px);left:-101.5px;margin-left:50%}:host .clt-popover .clt-popover-container.top::after{left:50%;margin-left:-5px;top:100%;border-color:#b9b9b9 transparent transparent}:host ::ng-deep ul{list-style:none;margin:0;padding:0}"]
            },] },
];
CltPopoverComponent.ctorParameters = function () { return [
    { type: Renderer2, },
]; };
CltPopoverComponent.propDecorators = {
    "open": [{ type: Input, args: ['open',] },],
    "placement": [{ type: Input, args: ['placement',] },],
    "popupContainer": [{ type: ViewChild, args: ['popupContainer',] },],
};
var CltCoreModule = /** @class */ (function () {
    function CltCoreModule() {
    }
    CltCoreModule.forRoot = function () {
        return {
            ngModule: CltCoreModule,
            providers: [
                CltCommonService,
            ]
        };
    };
    return CltCoreModule;
}());
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
var CltDisplayItemDirective = /** @class */ (function () {
    function CltDisplayItemDirective(elem, renderer, cdr) {
        this.elem = elem;
        this.renderer = renderer;
        this.cdr = cdr;
        this.display = true;
    }
    CltDisplayItemDirective.prototype.ngAfterViewInit = function () {
        if (this.name && this.storage) {
            var display = JSON.parse(window.localStorage.getItem("display"));
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
    };
    CltDisplayItemDirective.prototype.toggle = function (_a) {
        var checked = _a.checked;
        this.display = checked;
        if (checked)
            this.renderer.setStyle(this.elem.nativeElement, 'display', 'initial');
        else
            this.renderer.setStyle(this.elem.nativeElement, 'display', 'none');
        if (this.name && this.storage) {
            var display = JSON.parse(window.localStorage.getItem("display"));
            if (!display) {
                display = {};
                display[this.storage] = {};
            }
            display[this.storage][this.name] = checked;
            window.localStorage.setItem("display", JSON.stringify(display));
        }
    };
    return CltDisplayItemDirective;
}());
CltDisplayItemDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cltDisplayItem]',
                exportAs: 'cltDisplayItem'
            },] },
];
CltDisplayItemDirective.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ChangeDetectorRef, },
]; };
CltDisplayItemDirective.propDecorators = {
    "name": [{ type: Input },],
};
var CltDisplayComponent = /** @class */ (function () {
    function CltDisplayComponent() {
        this.elements = [];
        this.visibleChange = new EventEmitter();
    }
    CltDisplayComponent.prototype.ngOnChanges = function (changes) {
        if (changes.hasOwnProperty('visible')) {
            this.visibleChange.emit(changes["visible"].currentValue);
        }
    };
    CltDisplayComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this.storage)
            this.elements.map(function (component) { return component.storage = _this.storage; });
    };
    CltDisplayComponent.prototype.changeVisibleState = function (boolean) {
        this.visible = boolean;
        this.visibleChange.emit(boolean);
    };
    return CltDisplayComponent;
}());
CltDisplayComponent.decorators = [
    { type: Component, args: [{
                selector: 'clt-display',
                template: "<clt-side-panel [visible]=\"visible\" (visibleChange)=\"changeVisibleState($event)\" position=\"right\">\n  <h1>Affichage</h1>\n  <ul>\n    <li *ngFor=\"let component of elements\">\n      <div>\n        <input type=\"checkbox\" (onChange)=\"component.toggle($event)\" [value]=\"component.display\" />\n      </div>\n      <div class=\"display-name\">{{component.name}}</div>\n    </li>\n  </ul>\n</clt-side-panel>\n\n<ng-content></ng-content>",
                styles: ["li{display:-webkit-box;display:-ms-flexbox;display:flex}li .display-name{margin-left:10px;font-weight:700}:host{width:100%}"]
            },] },
];
CltDisplayComponent.propDecorators = {
    "storage": [{ type: Input },],
    "visible": [{ type: Input },],
    "elements": [{ type: Input },],
    "visibleChange": [{ type: Output },],
};
var CltNotificationsService = /** @class */ (function () {
    function CltNotificationsService() {
        this.notifications = [];
        this.addEvent = new Subject();
        this.removeEvent = new Subject();
        var notificationsDelay = +localStorage.getItem('notificationsDelay');
        if (notificationsDelay < 500) {
            notificationsDelay = 6000;
            localStorage.setItem('notificationsDelay', '6000');
        }
    }
    CltNotificationsService.prototype.add = function (title, msg) {
        var notif = {
            id: v4(),
            title: title || '',
            msg: msg || ''
        };
        this.addEvent.next(notif);
        notif.timeout = this.defaultTimeout(notif);
        this.notifications.push(notif);
        return notif;
    };
    CltNotificationsService.prototype.defaultTimeout = function (notif) {
        var _this = this;
        return setTimeout(function () {
            _this.delete(notif.id);
        }, +localStorage.getItem('notificationsDelay'));
    };
    CltNotificationsService.prototype.updateNotif = function (id, _notif) {
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
    CltNotificationsService.prototype.delete = function (id) {
        this.removeEvent.next(id);
        this.notifications = this.notifications.filter(function (notif) { return notif.id !== id; });
    };
    CltNotificationsService.prototype.deleteAll = function () {
        var _this = this;
        this.notifications.map(function (notif) { return _this.delete(notif.id); });
    };
    return CltNotificationsService;
}());
CltNotificationsService.decorators = [
    { type: Injectable },
];
CltNotificationsService.ctorParameters = function () { return []; };
var CltNotificationsComponent = /** @class */ (function () {
    function CltNotificationsComponent(ns, renderer2) {
        var _this = this;
        this.ns = ns;
        this.renderer2 = renderer2;
        this._notifications = [];
        this.ns.addEvent.subscribe(function (data) { return _this._notifications.push(data); });
        this.ns.removeEvent.subscribe(function (id) { return _this.deleteNotif(id); });
    }
    CltNotificationsComponent.prototype.deleteNotif = function (id) {
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
                        this.renderer2.addClass(htmlNotif, 'deleteNotif');
                        setTimeout(function () {
                            _this._notifications = _this._notifications.filter(function (notif) { return notif.id !== id; });
                            resolve();
                        }, 500);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    CltNotificationsComponent.prototype.deleteAll = function () {
        var _this = this;
        return each(this.htmlNotifications, function (htmlNotif) {
            _this.deleteNotif(htmlNotif.nativeElement.id);
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve();
                }, 50);
            });
        });
    };
    CltNotificationsComponent.prototype.getHtmlNotif = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var htmlNotif;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, filter(this.htmlNotifications, function (_htmlNotif) { return _htmlNotif.nativeElement.id === id; })];
                    case 1:
                        htmlNotif = _a.sent();
                        if (htmlNotif.length)
                            return [2 /*return*/, htmlNotif.pop().nativeElement];
                        return [2 /*return*/];
                }
            });
        });
    };
    return CltNotificationsComponent;
}());
CltNotificationsComponent.decorators = [
    { type: Component, args: [{
                selector: 'clt-notifications',
                template: "<div id=\"notifications\">\n    <div id=\"closeAll\" *ngIf='_notifications.length' (click)=\"deleteAll()\">\n        <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n    </div>\n    <div class=\"notifsWrapper\">\n        <div class=\"notifWrapper\" (click)=\"ns.delete(notif.id)\" #notifModel *ngFor=\"let notif of _notifications\" [id]=\"notif.id\">\n            <div class=\"notifContainer\">\n                <div class=\"title\">\n                    {{notif.title}}\n                </div>\n                <div class=\"msg\">\n                    {{notif.msg}}\n                </div>\n            </div>\n        </div>\n    </div>\n</div>",
                styles: [".formGroup{margin-bottom:10px}.formGroup label{width:100%}@-webkit-keyframes openNotif{0%{max-height:0}to{max-height:400px}}@keyframes openNotif{0%{max-height:0}to{max-height:400px}}@-webkit-keyframes closeNotif{0%{max-height:400px}to{max-height:0}}@keyframes closeNotif{0%{max-height:400px}to{max-height:0}}#notifications{z-index:100000;position:fixed;bottom:20px;right:20px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}#notifications #closeAll{text-align:right}#notifications #closeAll i{font-size:1.7em;background-color:#343a40;color:#fff;padding:10px;-webkit-box-shadow:0 0 10px grey;box-shadow:0 0 10px grey}#notifications .notifWrapper{-webkit-animation-name:openNotif;animation-name:openNotif;-webkit-animation-duration:.4s;animation-duration:.4s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;overflow-y:hidden;-webkit-box-shadow:0 0 10px grey;box-shadow:0 0 10px grey;margin-top:10px;background-color:#343a40;color:#fff}#notifications .notifWrapper.deleteNotif{-webkit-animation-name:closeNotif;animation-name:closeNotif;-webkit-animation-duration:.4s;animation-duration:.4s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}#notifications .notifWrapper .notifContainer{padding:10px;width:400px}#notifications .notifWrapper .notifContainer .title{width:100%;border-bottom:1px solid #fff}#notifications .notifWrapper .notifContainer .msg{width:100%;padding-top:10px}"]
            },] },
];
CltNotificationsComponent.ctorParameters = function () { return [
    { type: CltNotificationsService, },
    { type: Renderer2, },
]; };
CltNotificationsComponent.propDecorators = {
    "htmlNotifications": [{ type: ViewChildren, args: ['notifModel',] },],
};
var CltBodyDirective = /** @class */ (function () {
    function CltBodyDirective(templateRef) {
        this.templateRef = templateRef;
    }
    return CltBodyDirective;
}());
CltBodyDirective.decorators = [
    { type: Directive, args: [{
                selector: '[clt-popup-body]'
            },] },
];
CltBodyDirective.ctorParameters = function () { return [
    { type: TemplateRef, },
]; };
var CltPopupComponent = /** @class */ (function () {
    function CltPopupComponent(renderer, cdr) {
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
    CltPopupComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.cdr.detectChanges();
        this.keyEvents = window.onkeyup = function (e) {
            var key = e.keyCode ? e.keyCode : e.which;
            if (key === 27 && _this._open) {
                console.log('esc');
                _this.close();
            }
        };
    };
    CltPopupComponent.prototype.ngOnDestroy = function () {
        window.removeEventListener('keyup', this.keyEvents);
    };
    CltPopupComponent.prototype.open = function (context) {
        var _this = this;
        this.context = context;
        this.result = new Subject();
        this._open = true;
        this.state = 'open';
        setTimeout(function (_) {
            _this.visibleChange.emit(_this._open);
            _this.openEvent.emit();
        });
        return this.result;
    };
    CltPopupComponent.prototype.close = function ($event) {
        var _this = this;
        if ($event) {
            this.stopPropagation($event);
        }
        this._open = false;
        this.state = 'close';
        setTimeout(function (_) { _this.visibleChange.emit(_this._open); });
        if (this.result) {
            this.result.unsubscribe();
            this.result = null;
        }
    };
    CltPopupComponent.prototype.bindForm = function (form) {
        this.form = form;
        return this;
    };
    CltPopupComponent.prototype.stopPropagation = function ($event) {
        $event.stopPropagation();
    };
    CltPopupComponent.prototype.out = function (isValidate, $event, value) {
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
    };
    return CltPopupComponent;
}());
CltPopupComponent.decorators = [
    { type: Component, args: [{
                selector: 'clt-popup',
                template: "<div class=\"host {{direction}} {{ghost ? 'ghost' : ''}}\" (click)=\"close($event)\" [@openState]=\"state\" #host>\n  <div class=\"host-container\" *ngIf=\"_open\" [ngStyle]=\"{width:width, height:height}\" (click)=\"stopPropagation($event)\" #hostContainer>\n    <div class=\"host-title\" #titleRef [ngClass]='titleRef.children.length ? \"\": \"nothing\"'>\n      <ng-content select=\"[title]\"></ng-content>\n      <div *ngIf='!titleRef?.children?.length && title'>\n        {{title}}\n      </div>\n    <div class=\"close\" (click)=\"out(false)\">x</div>\n    </div>\n    <div class=\"host-body\">\n      <div *ngIf='body;else bodyTemplateContainer'>\n        {{body}}\n      </div>\n      <ng-template #bodyTemplateContainer>\n        <ng-container [ngTemplateOutlet]=\"bodyTemplate?.templateRef\"></ng-container>\n      </ng-template>\n    </div>\n    <div class=\"host-actions\" *ngIf='!noActions'>\n      <button class=\"host-action host-cancel\" (click)=\"out(false)\">{{cancelButton}}</button>\n      <button class=\"host-action host-ok\" [ngClass]=\"{'host-disable': form?.invalid}\" [disabled]=\"form?.invalid\" (click)=\"out(true)\">{{validateButton}}</button>\n    </div>\n  </div>\n</div>",
                styles: [".host .host-container .host-title{padding:10px;font-weight:700;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:var(--headerBgColor);color:var(--headerTextColor);border-width:var(--headerBorderWidth);border-color:var(--headerBorderColor);font-weight:var(--headerFontWeight)}.host{position:absolute;bottom:0;left:0;width:100vw;height:100vh;z-index:1000;background-color:rgba(0,0,0,.8);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;opacity:0}.host .host-container{-webkit-box-shadow:0 0 20px 1px #000;box-shadow:0 0 20px 1px #000;min-width:400px;background-color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;max-height:100vh;max-width:100vw;pointer-events:auto}.host .host-container .host-title{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.host .host-container .host-title.nothing{padding:0}.host .host-container .host-title .close{border:none;background-color:var(--headerBgColorAccent);color:var(--headerTextColor);padding:3px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:15px;height:15px;cursor:pointer}.host .host-container .host-title .close:hover{background-color:var(--stateHoverBgColor)}.host .host-container .host-body{padding:10px;-webkit-box-flex:1;-ms-flex:1;flex:1;overflow-y:auto}.host .host-container .host-body::ng-deep>.ng-star-inserted{height:100%}.host .host-container .host-actions{display:-webkit-box;display:-ms-flexbox;display:flex}.host .host-container .host-actions .host-action{padding:10px;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#fff;cursor:pointer;border:none}.host .host-container .host-actions .host-action.host-ok{background-color:#28a745}.host .host-container .host-actions .host-action.host-cancel{background-color:#dc3545}.host .host-container .host-actions .host-action.host-disable{background-color:#a2a2a2}.host.bottom,.host.right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.host.left,.host.top{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.host.left,.host.right{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.host.left>.host-container,.host.right>.host-container{height:100%}.host.bottom,.host.top{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.host.bottom>.host-container,.host.top>.host-container{width:100%}.host.ghost{pointer-events:none;background-color:transparent}"],
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
CltPopupComponent.ctorParameters = function () { return [
    { type: Renderer2, },
    { type: ChangeDetectorRef, },
]; };
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
var CltSidePanelComponent = /** @class */ (function (_super) {
    __extends(CltSidePanelComponent, _super);
    function CltSidePanelComponent(renderer, cdr) {
        var _this = _super.call(this, renderer, cdr) || this;
        _this.className = 'sidepanel';
        _this.direction = 'right';
        return _this;
    }
    return CltSidePanelComponent;
}(CltPopupComponent));
CltSidePanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'clt-side-panel',
                template: "<div class=\"host {{direction}} {{ghost ? 'ghost' : ''}}\" (click)=\"close($event)\" [@openState]=\"state\" #host>\n  <div class=\"host-container\" *ngIf=\"_open\" [ngStyle]=\"{width:width, height:height}\" (click)=\"stopPropagation($event)\" #hostContainer>\n    <div class=\"host-title\" #titleRef [ngClass]='titleRef.children.length ? \"\": \"nothing\"'>\n      <ng-content select=\"[title]\"></ng-content>\n      <div *ngIf='!titleRef?.children?.length && title'>\n        {{title}}\n      </div>\n    <div class=\"close\" (click)=\"out(false)\">x</div>\n    </div>\n    <div class=\"host-body\">\n      <div *ngIf='body;else bodyTemplateContainer'>\n        {{body}}\n      </div>\n      <ng-template #bodyTemplateContainer>\n        <ng-container [ngTemplateOutlet]=\"bodyTemplate?.templateRef\"></ng-container>\n      </ng-template>\n    </div>\n    <div class=\"host-actions\" *ngIf='!noActions'>\n      <button class=\"host-action host-cancel\" (click)=\"out(false)\">{{cancelButton}}</button>\n      <button class=\"host-action host-ok\" [ngClass]=\"{'host-disable': form?.invalid}\" [disabled]=\"form?.invalid\" (click)=\"out(true)\">{{validateButton}}</button>\n    </div>\n  </div>\n</div>",
                styles: [".host .host-container .host-title{padding:10px;font-weight:700;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:var(--headerBgColor);color:var(--headerTextColor);border-width:var(--headerBorderWidth);border-color:var(--headerBorderColor);font-weight:var(--headerFontWeight)}.host{position:absolute;bottom:0;left:0;width:100vw;height:100vh;z-index:1000;background-color:rgba(0,0,0,.8);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;opacity:0}.host .host-container{-webkit-box-shadow:0 0 20px 1px #000;box-shadow:0 0 20px 1px #000;min-width:400px;background-color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;max-height:100vh;max-width:100vw;pointer-events:auto}.host .host-container .host-title{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.host .host-container .host-title.nothing{padding:0}.host .host-container .host-title .close{border:none;background-color:var(--headerBgColorAccent);color:var(--headerTextColor);padding:3px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:15px;height:15px;cursor:pointer}.host .host-container .host-title .close:hover{background-color:var(--stateHoverBgColor)}.host .host-container .host-body{padding:10px;-webkit-box-flex:1;-ms-flex:1;flex:1;overflow-y:auto}.host .host-container .host-body::ng-deep>.ng-star-inserted{height:100%}.host .host-container .host-actions{display:-webkit-box;display:-ms-flexbox;display:flex}.host .host-container .host-actions .host-action{padding:10px;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#fff;cursor:pointer;border:none}.host .host-container .host-actions .host-action.host-ok{background-color:#28a745}.host .host-container .host-actions .host-action.host-cancel{background-color:#dc3545}.host .host-container .host-actions .host-action.host-disable{background-color:#a2a2a2}.host.bottom,.host.right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.host.left,.host.top{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.host.left,.host.right{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.host.left>.host-container,.host.right>.host-container{height:100%}.host.bottom,.host.top{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.host.bottom>.host-container,.host.top>.host-container{width:100%}.host.ghost{pointer-events:none;background-color:transparent}"],
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
CltSidePanelComponent.ctorParameters = function () { return [
    { type: Renderer2, },
    { type: ChangeDetectorRef, },
]; };
var CltOverlayModule = /** @class */ (function () {
    function CltOverlayModule() {
    }
    CltOverlayModule.forRoot = function () {
        return {
            ngModule: CltOverlayModule,
            providers: [
                CltNotificationsService,
            ]
        };
    };
    return CltOverlayModule;
}());
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
var CltDisplayModule = /** @class */ (function () {
    function CltDisplayModule() {
    }
    return CltDisplayModule;
}());
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
var CltDebounceInputDirective = /** @class */ (function () {
    function CltDebounceInputDirective() {
        this.debounceTime = 500;
        this.debounce = new EventEmitter();
        this.subject = new Subject$1();
    }
    CltDebounceInputDirective.prototype.ngOnInit = function () {
        this.createSubsription();
    };
    CltDebounceInputDirective.prototype.createSubsription = function () {
        var _this = this;
        this.subscription = this.subject.pipe(debounceTime(this.debounceTime)).subscribe(function (e) { return _this.debounce.emit(e); });
    };
    CltDebounceInputDirective.prototype.ngOnChanges = function (changes) {
        if (changes["debounceTime"] && this.subject.observers[0])
            this.subject.observers[0]['dueTime'] = changes["debounceTime"].currentValue;
    };
    CltDebounceInputDirective.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    CltDebounceInputDirective.prototype.keyupEvent = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.subject.next(event);
    };
    return CltDebounceInputDirective;
}());
CltDebounceInputDirective.decorators = [
    { type: Directive, args: [{
                selector: '[clt-debounce-input]'
            },] },
];
CltDebounceInputDirective.propDecorators = {
    "debounceTime": [{ type: Input },],
    "debounce": [{ type: Output },],
    "keyupEvent": [{ type: HostListener, args: ['keyup', ['$event'],] },],
};
var CltShowPasswordDirective = /** @class */ (function () {
    function CltShowPasswordDirective(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
    }
    CltShowPasswordDirective.prototype.ngOnInit = function () {
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
    return CltShowPasswordDirective;
}());
CltShowPasswordDirective.decorators = [
    { type: Directive, args: [{
                selector: '[clt-show-password]',
            },] },
];
CltShowPasswordDirective.ctorParameters = function () { return [
    { type: Renderer2, },
    { type: ElementRef, },
]; };
var CltValidatorsDirective = /** @class */ (function () {
    function CltValidatorsDirective(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
    }
    CltValidatorsDirective.prototype.ngAfterViewChecked = function () {
        this.onInputChange();
    };
    CltValidatorsDirective.prototype.onInputChange = function () {
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
    };
    return CltValidatorsDirective;
}());
CltValidatorsDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cltValidators]',
            },] },
];
CltValidatorsDirective.ctorParameters = function () { return [
    { type: Renderer2, },
    { type: ElementRef, },
]; };
CltValidatorsDirective.propDecorators = {
    "cltValidators": [{ type: Input },],
    "onInputChange": [{ type: HostListener, args: ['input',] },],
};
var CltFormErrorsComponent = /** @class */ (function () {
    function CltFormErrorsComponent() {
    }
    return CltFormErrorsComponent;
}());
CltFormErrorsComponent.decorators = [
    { type: Component, args: [{
                selector: 'clt-form-errors',
                template: "<!-- {{model.errors | json}} -->\n\n<ul *ngIf=\"model && model.errors\">\n    <li *ngIf=\"model.errors.pattern\" class=\"hint\">\n         <ng-container *ngIf=\"patternName; else notPatternName\">\n            {{patternName}}\n        </ng-container>\n        <ng-template #notPatternName>\n            Pattern: {{model.errors.pattern.requiredPattern}}\n        </ng-template>\n    </li>\n    <li *ngIf=\"model.errors.required\" class=\"hint\">\n        Obligatoire\n    </li>\n    <li *ngIf=\"model.errors.minlength\" class=\"hint\">\n        Contient au moins {{model.errors.minlength.requiredLength}} caract\u00E8res\n    </li>\n    <li *ngIf=\"model.errors.maxlength\" class=\"hint\">\n        Contient au plus {{model.errors.maxlength.requiredLength}} caract\u00E8res\n    </li>\n    <li *ngIf=\"model.errors.recheckPassphrase\" class=\"hint\">\n        Doit correspondre \u00E0 la phrase de passe\n    </li>\n    <li *ngIf=\"model.errors.email\" class=\"hint\">\n        Doit \u00EAtre un email\n    </li>\n</ul>\n",
                styles: [".formGroup{margin-bottom:10px}.formGroup label{width:100%}:host{display:inline-block;font-size:.7em;width:100%;min-height:.7em;top:-2px;line-height:0;text-align:right;color:#dc3545}"]
            },] },
];
CltFormErrorsComponent.propDecorators = {
    "model": [{ type: Input, args: ['model',] },],
    "patternName": [{ type: Input, args: ['patternName',] },],
};
var CltFormsModule = /** @class */ (function () {
    function CltFormsModule() {
    }
    return CltFormsModule;
}());
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
var CltPassword = /** @class */ (function () {
    function CltPassword() {
    }
    CltPassword.MatchPassword = function (AC) {
        var confirmPassword = AC.value.passphrase;
        var password = AC.value.recheckPassphrase;
        if (confirmPassword !== password) {
            return { recheckPassphrase: true };
        }
        else
            return null;
    };
    CltPassword.GeneratePassword = function (length) {
        if (length === void 0) { length = 12; }
        var charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=';
        var retVal = '';
        for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
    };
    return CltPassword;
}());
var CltMapMapService = /** @class */ (function () {
    function CltMapMapService(http) {
        this.http = http;
    }
    CltMapMapService.prototype.convertTolatLong = function (coordinates) {
        coordinates = this.transformToFloat(coordinates);
        return OlProj.transform(coordinates, 'EPSG:3857', 'EPSG:4326');
    };
    CltMapMapService.prototype.fromLonLat = function (lonLat) {
        lonLat = this.transformToFloat(lonLat);
        return OlProj.fromLonLat(lonLat);
    };
    CltMapMapService.prototype.transformToFloat = function (coordinates) {
        return coordinates.map(function (coord) {
            if (typeof coord === 'string')
                return parseFloat(coord);
            return coord;
        });
    };
    CltMapMapService.prototype.reverse = function (lonlat) {
        return this.http.get("http://nominatim.openstreetmap.org/reverse?format=json&lon=" + lonlat[0] + "&lat=" + lonlat[1])
            .toPromise()
            .then(function (reverse) {
            if (!reverse.address)
                reverse.address = {};
            reverse.address.longitude = lonlat[0];
            reverse.address.latitude = lonlat[1];
            return reverse.address;
        });
    };
    CltMapMapService.prototype.reverseFromFeature = function (feature) {
        var coordinates = feature.getGeometry().getCoordinates();
        return this.reverse(this.convertTolatLong(coordinates));
    };
    CltMapMapService.prototype.createStyleIcon = function (icon) {
        return new Style({
            image: new Icon(icon)
        });
    };
    CltMapMapService.prototype.createBuildingStyleIcon = function (color) {
        if (color === void 0) { color = '#8959A8'; }
        return this.createStyleIcon({
            color: color,
            crossOrigin: 'anonymous',
            src: '/assets/img/dot-marker.png'
        });
    };
    CltMapMapService.prototype.createAddressStyleIcon = function () {
        return this.createStyleIcon({
            anchor: [0.5, 46],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            src: '/assets/img/address-marker.png'
        });
    };
    return CltMapMapService;
}());
CltMapMapService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
CltMapMapService.ctorParameters = function () { return [
    { type: HttpClient, },
]; };
CltMapMapService.ngInjectableDef = defineInjectable({ factory: function CltMapMapService_Factory() { return new CltMapMapService(inject(HttpClient)); }, token: CltMapMapService, providedIn: "root" });
var CltMapLayerComponent = /** @class */ (function () {
    function CltMapLayerComponent(mapService) {
        this.mapService = mapService;
        this.overlays = [];
        this.nbFeatures = 0;
        this.featuremove = new EventEmitter();
        this.createLayer();
    }
    CltMapLayerComponent.prototype.getSource = function () {
        return this.olLayer ? this.olLayer.getSource() : undefined;
    };
    CltMapLayerComponent.prototype.createLayer = function () {
        var layer = new VectorLayer({
            source: new VectorSource()
        });
        this.olLayer = layer;
        return this.olLayer;
    };
    CltMapLayerComponent.prototype.addFeature = function (geomOrFeature, opts) {
        var _this = this;
        if (geomOrFeature instanceof Feature) {
            this.olLayer.getSource().addFeature(geomOrFeature);
            if (opts && opts.overlay)
                this.addOverlay(geomOrFeature, opts.overlay);
            this.nbFeatures++;
            return geomOrFeature;
        }
        var newFeature = new Feature({
            geometry: geomOrFeature,
        });
        newFeature.on('change', function (ev) {
            _this.featuremove.emit(ev);
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
    };
    CltMapLayerComponent.prototype.addOverlay = function (feature, infos, positioning, offset) {
        var _this = this;
        if (positioning === void 0) { positioning = 'bottom-center'; }
        if (offset === void 0) { offset = [0, -25]; }
        var uuid = v4();
        infos.uuid = uuid;
        this.overlays.push(infos);
        var popup = new Overlay({
            positioning: positioning,
            stopEvent: true,
            offset: offset
        });
        var overlay = {};
        overlay.opts = infos;
        overlay.instance = popup;
        overlay.open = function () {
            overlay._open = true;
            _this.overlayDisplay(popup, feature);
        };
        overlay.close = function () {
            overlay._open = false;
            _this.overlayHide(popup);
        };
        overlay.toggle = function () {
            overlay._open ? overlay.close() : overlay.open();
        };
        feature.overlay = overlay;
        setTimeout(function () {
            popup.setElement(document.getElementById(uuid));
            _this.map.addOverlay(popup);
        }, 0);
        return popup;
    };
    CltMapLayerComponent.prototype.overlayDisplay = function (overlay, feature) {
        overlay.setPosition(feature.getGeometry().getCoordinates());
    };
    CltMapLayerComponent.prototype.overlayHide = function (overlay) {
        overlay.setPosition(undefined);
    };
    CltMapLayerComponent.prototype.getFeatures = function () {
        return this.olLayer ? this.olLayer.getSource().getFeatures() : undefined;
    };
    CltMapLayerComponent.prototype.clear = function () {
        if (this.olLayer) {
            this.olLayer.getSource().clear();
            this.nbFeatures = 0;
            this.overlays = [];
        }
    };
    CltMapLayerComponent.prototype.addModify = function () {
        this.modify = new Modify({ source: this.olLayer.getSource() });
        if (this.map)
            this.map.addInteraction(this.modify);
        return this.modify;
    };
    CltMapLayerComponent.prototype.removeModify = function () {
        if (this.map)
            this.map.removeInteraction(this.modify);
        this.modify = undefined;
    };
    CltMapLayerComponent.prototype.removeFeature = function (feature) {
        if (feature.hasOwnProperty('overlay')) {
            var i = this.overlays.indexOf(feature.overlay.opts);
            this.overlays.splice(i, 1);
        }
        if (this.olLayer)
            this.olLayer.getSource().removeFeature(feature);
        this.nbFeatures--;
    };
    return CltMapLayerComponent;
}());
CltMapLayerComponent.decorators = [
    { type: Component, args: [{
                selector: 'clt-map-layer',
                template: "<div [id]=\"overlay.uuid\" *ngFor=\"let overlay of overlays\">\n  <ng-container *ngTemplateOutlet='overlay.template; context: {$implicit:overlay.context}'></ng-container>\n</div>",
                styles: [""]
            },] },
];
CltMapLayerComponent.ctorParameters = function () { return [
    { type: CltMapMapService, },
]; };
CltMapLayerComponent.propDecorators = {
    "featuremove": [{ type: Output },],
};
var CltMapComponent = /** @class */ (function () {
    function CltMapComponent(mapService, componentFactoryResolver, renderer) {
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
    CltMapComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.map = new Map({
            layers: [
                this.defaultLayer ? this.defaultLayer : new Tile({ source: new OSM() })
            ],
            view: new View()
        });
        this.eventManager();
        this.layersComponent.map(function (layer) {
            _this.addLayer(layer);
        });
    };
    CltMapComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        this.map.updateSize();
        return new Promise(function (resolve, reject) {
            if (_this.initialized || !document.getElementById(_this.id))
                return;
            _this.initialized = true;
            if (!_this.center.latitude || !_this.center.longitude) {
                navigator.geolocation.getCurrentPosition(function (_a) {
                    var coords = _a.coords;
                    _this.center.latitude = coords.latitude;
                    _this.center.longitude = coords.longitude;
                    _this.init().then(resolve).catch(reject);
                }, function () {
                    _this.center.latitude = 48.8585535;
                    _this.center.longitude = 2.2940681;
                    _this.init().then(resolve).catch(reject);
                });
            }
            else
                _this.init().then(resolve).catch(reject);
        });
    };
    CltMapComponent.prototype.getView = function () {
        return this.map.getView();
    };
    CltMapComponent.prototype.getCenter = function () {
        return this.getView().getCenter();
    };
    CltMapComponent.prototype.getCenterToLonLat = function () {
        return this.mapService.convertTolatLong(this.getCenter());
    };
    CltMapComponent.prototype.setCenter = function (coordinate, zoom) {
        this.getView().setCenter(coordinate);
        this.getView().setZoom(zoom || this.zoom || 10);
        return coordinate;
    };
    CltMapComponent.prototype.setCenterFromLonLat = function (coordinate) {
        return this.setCenter(this.mapService.fromLonLat(coordinate));
    };
    CltMapComponent.prototype.addLayer = function (component) {
        var _this = this;
        if (!component) {
            var layerComponent = this.componentFactoryResolver.resolveComponentFactory(CltMapLayerComponent);
            component = layerComponent.create(this.layersContainer).instance;
        }
        component.map = this.map;
        this.layersComponent.reset(__spread(this.layersComponent.toArray(), [component]));
        this.map.addLayer(component.olLayer);
        component.featuremove.subscribe(function (_) {
            _this.featuremove.emit();
        });
        return component.olLayer;
    };
    CltMapComponent.prototype.initGeocoder = function (featureStyle) {
        var _this = this;
        this.geocoderControl = new Geocoder('nominatim', {
            provider: 'osm',
            lang: 'fr-FR',
            autoComplete: true,
            autoCompleteMinLength: 4,
            placeholder: 'Rechercher une adresse',
            targetType: 'text-input',
            featureStyle: featureStyle,
            limit: 5,
            countrycodes: 'fr'
        });
        if (this.map)
            this.map.addControl(this.geocoderControl);
        this.geocoderControl.on('addresschosen', function (evt) {
            _this.geocoder.emit(evt);
        });
        return this.geocoderControl;
    };
    CltMapComponent.prototype.removeGeocoder = function () {
        if (!this.map)
            return;
        this.map.removeControl(this.geocoderControl);
        this.map.removeLayer(this.geocoderControl.getLayer());
    };
    CltMapComponent.prototype.init = function () {
        var _this = this;
        if (this.height) {
            var elem = this.mapContainer.nativeElement;
            this.renderer.setStyle(elem, 'paddingTop', 0);
            this.renderer.setStyle(elem, 'position', 'relative');
            if (this.height)
                this.renderer.setStyle(elem, 'height', this.height);
        }
        return new Promise(function (resolve, reject) {
            _this.map.renderSync();
            if (!_this.getCenter())
                _this.setCenterFromLonLat([_this.center.longitude, _this.center.latitude]);
            setTimeout(function () {
                _this.map.setTarget(_this.mapElement.nativeElement);
                resolve();
            }, 0);
        });
    };
    CltMapComponent.prototype.eventManager = function () {
        var _this = this;
        this.map.on('singleclick', function (event) {
            event.features = _this.map.getFeaturesAtPixel(event.pixel);
            if (event.features)
                event.features.map(function (f) {
                    if (f.hasOwnProperty('overlay'))
                        f.overlay.toggle();
                });
            _this.olsingleclick.emit(event);
        });
        var events = [
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
        events.forEach(function (ev) {
            var output = 'ol' + ev;
            _this.map.on(ev, function (event) {
                if (event.pixel)
                    event.features = _this.map.getFeaturesAtPixel(event.pixel);
                _this[output].emit(event);
            });
        });
    };
    return CltMapComponent;
}());
CltMapComponent.decorators = [
    { type: Component, args: [{
                selector: 'clt-map',
                template: "<div class=\"map-container\" #mapContainer>\n    <div \n        [id]=\"id\" \n        class=\"map\" #map>\n        <ng-content></ng-content> <!-- for overlays ... -->\n        <ng-template #layersContainer></ng-template>\n    </div>\n</div>",
                styles: [".map-container{position:relative;padding-top:56.25%}.map-container .map{width:100%;min-height:200px;position:absolute;overflow:hidden;top:0;height:100%}"]
            },] },
];
CltMapComponent.ctorParameters = function () { return [
    { type: CltMapMapService, },
    { type: ComponentFactoryResolver, },
    { type: Renderer2, },
]; };
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
var CltMapModule = /** @class */ (function () {
    function CltMapModule() {
    }
    CltMapModule.forRoot = function () {
        return {
            ngModule: CltMapModule,
            providers: [
                CltMapMapService
            ]
        };
    };
    return CltMapModule;
}());
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
var CltNavbarComponent = /** @class */ (function () {
    function CltNavbarComponent() {
        this.name = '';
    }
    return CltNavbarComponent;
}());
CltNavbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'clt-navbar',
                template: "<div id=\"navbar\" [ngStyle]=\"{'background-image': img ? 'url(img)' : ''}\">\n  <div id=\"leftRight\">\n    <div id=\"left\">\n      <div id=\"logoContainer\">\n        <ng-content select=\"[logo]\"></ng-content>\n      </div>\n      <div id=\"description\">\n        {{name}}\n      </div>\n    </div>\n    <div id=\"right\">\n      <ng-content selector=\"[right]\"></ng-content>\n    </div>\n  </div>\n</div>",
                styles: [".formGroup{margin-bottom:10px}.formGroup label{width:100%}#navbar{height:60px;position:relative;max-height:60px!important;color:var(--headerTextColor);background-color:var(--headerBgColor);-webkit-box-shadow:0 2px 11px #00000080;box-shadow:0 2px 11px #00000080}#navbar i{color:var(--headerTextColor)!important;font-size:2.5rem!important}#navbar #leftRight{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%}#navbar #leftRight #left{height:100%;padding-left:5px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}#navbar #leftRight #left #logoContainer{height:80%}#navbar #leftRight #left #logoContainer ::ng-deep [logo]{height:100%;border-radius:100%;overflow:hidden}#navbar #leftRight #left #logoContainer ::ng-deep [logo] img{height:100%}#navbar #leftRight #left #description{margin-left:10px;color:#fff;font-size:1.2em}#navbar #leftRight::ng-deep #right>[right]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;margin-right:10px}#navbar #leftRight::ng-deep #right>[right] i{border:none;background-color:var(--headerBgColor);color:var(--headerTextColor);padding:3px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:1.7em}#navbar #leftRight::ng-deep #right>[right] i:hover{background-color:var(--stateHoverBgColor)}"]
            },] },
];
CltNavbarComponent.ctorParameters = function () { return []; };
CltNavbarComponent.propDecorators = {
    "name": [{ type: Input, args: ['name',] },],
    "img": [{ type: Input, args: ['img',] },],
    "url": [{ type: Input, args: ['url',] },],
};
var CltSideBarService = /** @class */ (function () {
    function CltSideBarService() {
        this._open = false;
    }
    CltSideBarService.prototype.open = function () {
        this._open = true;
    };
    CltSideBarService.prototype.close = function () {
        this._open = false;
    };
    CltSideBarService.prototype.toggle = function () {
        this._open = !this._open;
    };
    return CltSideBarService;
}());
CltSideBarService.decorators = [
    { type: Injectable },
];
var CltSidebarComponent = /** @class */ (function () {
    function CltSidebarComponent(sidebar, router) {
        this.sidebar = sidebar;
        this.router = router;
        this.hintState = 'close';
        this.conf = { list: [], bottom: [] };
    }
    CltSidebarComponent.prototype.goTo = function (item, event) {
        if (event)
            event.preventDefault();
        if (item.hasOwnProperty('url'))
            this.router.navigateByUrl(item.url);
        if (item.hasOwnProperty('click'))
            item.click(item);
    };
    CltSidebarComponent.prototype.newWindow = function (data) {
        if (data.url) {
            window.open(data.url);
        }
    };
    CltSidebarComponent.prototype.toggleSidebar = function () {
        this.sidebar.toggle();
    };
    CltSidebarComponent.prototype.toggleHint = function ($event) {
        this.hintState =
            $event.type === 'mouseover' && !this.sidebar._open
                ? 'open'
                : 'close';
    };
    return CltSidebarComponent;
}());
CltSidebarComponent.decorators = [
    { type: Component, args: [{
                selector: 'clt-sidebar',
                template: "<div class=\"openSidebar\" \n    [ngClass]=\"{'openSidebar':sidebar._open, 'closeSidebar':!sidebar._open}\"\n    [ngStyle]=\"{'background-image': img ? 'url(img)' : ''}\"\n    id=\"sidebar\">\n    <div class=\"list\">\n        <div *ngFor='let item of conf.list'>\n            <ng-container *ngTemplateOutlet=\"linkTemplate;context:{$implicit:item}\"></ng-container>  \n        </div>\n    </div>\n    <div class=\"bottomList\">\n        <div *ngFor='let item of conf.bottom'>\n            <ng-container *ngTemplateOutlet=\"linkTemplate;context:{$implicit:item}\"></ng-container>\n        </div>\n        <div id=\"toggleSidebar\" class=\"item\" (click)=\"toggleSidebar();\" [ngClass]=\"{'openSidebar':sidebar._open, 'closeSidebar':!sidebar._open}\">\n            <div class=\"icon\" >\n                <i class=\"fa fa-arrow-right\"></i>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #linkTemplate let-item>\n    <a id=\"{{item.id}}\" class=\"item\" [href]=\"item.url ? item.url : ''\" (click)=\"goTo(item, $event)\" (auxclick)=\"newWindow(item)\" (mouseover)=\"toggleHint($event)\" (mouseleave)=\"toggleHint($event)\">\n        <div class=\"icon\">\n            <i class=\"{{item.icon}}\"></i>\n        </div>\n        <div class=\"description\" [ngClass]=\"{'openSidebar':sidebar._open, 'closeSidebar':!sidebar._open}\">\n            {{item.description}}\n        </div>\n        <div id=\"hint-{{item.id}}\" class=\"hintContainer\"  [@hintState]=\"hintState\">\n            <div class=\"hint\">{{item.description}}</div>\n        </div>\n    </a>\n</ng-template>\n",
                styles: [".formGroup{margin-bottom:10px}.formGroup label{width:100%}@-webkit-keyframes openSidebar{0%{width:40px}to{width:175px}}@keyframes openSidebar{0%{width:40px}to{width:175px}}@-webkit-keyframes closeSidebar{0%{width:175px}to{width:40px}}@keyframes closeSidebar{0%{width:175px}to{width:40px}}@-webkit-keyframes openSidebarDescription{0%{width:0}to{width:40px}}@keyframes openSidebarDescription{0%{width:0}to{width:40px}}@-webkit-keyframes closeSidebarDescription{0%{width:40px}to{width:0}}@keyframes closeSidebarDescription{0%{width:40px}to{width:0}}@-webkit-keyframes openSidebarIcon{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(-1);transform:scale(-1)}}@keyframes openSidebarIcon{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(-1);transform:scale(-1)}}@-webkit-keyframes closeSidebarIcon{0%{-webkit-transform:scale(-1);transform:scale(-1)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes closeSidebarIcon{0%{-webkit-transform:scale(-1);transform:scale(-1)}to{-webkit-transform:scale(1);transform:scale(1)}}#sidebar{height:100%;overflow-x:hidden;width:40px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;background-size:auto 100%;background-color:#fff;position:relative;color:#616161;-webkit-box-shadow:2px 0 11px #00000080;box-shadow:2px 0 11px #00000080}#sidebar:before{content:\"\";height:70px;background-color:var(--headerBgColorAccent)}#sidebar.openSidebar{-webkit-animation-name:openSidebar;animation-name:openSidebar;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}#sidebar.closeSidebar{-webkit-animation-name:closeSidebar;animation-name:closeSidebar;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}#sidebar .bottomList,#sidebar .list{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%}#sidebar .bottomList.list,#sidebar .list.list{height:100%}#sidebar .bottomList .item,#sidebar .list .item{-webkit-box-shadow:none;box-shadow:none;-webkit-box-pack:left;-ms-flex-pack:left;justify-content:left;margin:0;border:none;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;padding-bottom:10px;padding-top:10px;color:#616161}#sidebar .bottomList .item:hover,#sidebar .list .item:hover{background-color:rgba(0,0,0,.1)}#sidebar .bottomList .item .hintContainer,#sidebar .list .item .hintContainer{position:absolute;overflow:hidden;left:40px;max-width:0;z-index:3;background-color:#e7e7e7}#sidebar .bottomList .item .hintContainer .hint,#sidebar .list .item .hintContainer .hint{color:#636363;padding:10px}#sidebar .bottomList .item .icon,#sidebar .list .item .icon{width:40px;text-align:center;font-size:1.3rem}#sidebar .bottomList .item .description.openSidebar,#sidebar .list .item .description.openSidebar{-webkit-animation-name:openSidebarDescription;animation-name:openSidebarDescription;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}#sidebar .bottomList .item .description.closeSidebar,#sidebar .list .item .description.closeSidebar{-webkit-animation-name:closeSidebarDescription;animation-name:closeSidebarDescription;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}#sidebar .bottomList #toggleSidebar,#sidebar .list #toggleSidebar{background-color:var(--headerBgColorAccent);color:var(--headerTextColor)}#sidebar .bottomList #toggleSidebar .icon,#sidebar .list #toggleSidebar .icon{font-size:1em}#sidebar .bottomList #toggleSidebar.openSidebar,#sidebar .list #toggleSidebar.openSidebar{-webkit-animation-name:openSidebarIcon;animation-name:openSidebarIcon;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}#sidebar .bottomList #toggleSidebar.closeSidebar,#sidebar .list #toggleSidebar.closeSidebar{-webkit-animation-name:closeSidebarIcon;animation-name:closeSidebarIcon;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}"],
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
CltSidebarComponent.ctorParameters = function () { return [
    { type: CltSideBarService, },
    { type: Router, },
]; };
CltSidebarComponent.propDecorators = {
    "conf": [{ type: Input, args: ['conf',] },],
    "img": [{ type: Input, args: ['img',] },],
};
var CltNavigationsModule = /** @class */ (function () {
    function CltNavigationsModule() {
    }
    CltNavigationsModule.forRoot = function () {
        return {
            ngModule: CltNavigationsModule,
            providers: [
                CltSideBarService,
            ]
        };
    };
    return CltNavigationsModule;
}());
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
var bluegreygreen = {
    "--headerBgColor": "#607D8B",
    "--headerBgColorAccent": "#455a64",
    "--stateDefaultBgColor": "#9eafb7"
};
var CltThemeService = /** @class */ (function () {
    function CltThemeService() {
        this.themes = [
            { name: 'default', theme: defaultTheme },
            { name: 'bluegreygreen', theme: bluegreygreen }
        ];
        this.theme = {};
        this.reload(this.themes[0].theme);
    }
    CltThemeService.prototype.reload = function (theme) {
        var _this = this;
        if (theme)
            this.theme = merge(cloneDeep(defaultTheme), theme);
        document.getElementsByTagName('html')[0].setAttribute('style', '');
        Object.keys(this.theme).map(function (key) { return _this.setStyle(key, _this.theme[key]); });
    };
    CltThemeService.prototype.setStyle = function (property, value) {
        var html = document.getElementsByTagName('html')[0];
        this.theme[property] = value;
        html.style.setProperty(property, value);
    };
    return CltThemeService;
}());
CltThemeService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
CltThemeService.ctorParameters = function () { return []; };
CltThemeService.ngInjectableDef = defineInjectable({ factory: function CltThemeService_Factory() { return new CltThemeService(); }, token: CltThemeService, providedIn: "root" });
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
var CltThemeManagerComponent = /** @class */ (function () {
    function CltThemeManagerComponent(themeService, common) {
        this.themeService = themeService;
        this.common = common;
        this.mockData = mockdataTable;
        this.variables = [];
        this.currentTheme = '';
    }
    CltThemeManagerComponent.prototype.ngOnInit = function () {
        this.variables = Object.keys(this.themeService.theme);
    };
    CltThemeManagerComponent.prototype.changeTheme = function (theme) {
        var selectedTheme = this.themeService.themes.filter(function (_theme) { return _theme.name === theme; })[0];
        this.currentTheme = selectedTheme.name;
        this.themeService.reload(selectedTheme.theme);
    };
    CltThemeManagerComponent.prototype.difference = function () {
        var _this = this;
        var differences = this.common.differences(this.themeService.theme, this.themeService.themes[0].theme).different;
        if (differences.length) {
            var json_1 = {};
            differences.forEach(function (difference) {
                json_1[difference] = _this.themeService.theme[difference];
            });
            return json_1;
        }
        return {};
    };
    CltThemeManagerComponent.prototype.changeStyle = function (variable, style$$1) {
        this.themeService.setStyle(variable, style$$1);
    };
    CltThemeManagerComponent.prototype.export = function () {
        console.log('hey');
        var link = this.exportButton.nativeElement;
        link.download = this.exportInput.nativeElement.value + '.json' || 'theme.json';
        var data = 'text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.difference()));
        link.href = 'data:' + data;
    };
    CltThemeManagerComponent.prototype.getTheme = function () {
        return encodeURIComponent(JSON.stringify(this.themeService.theme));
    };
    return CltThemeManagerComponent;
}());
CltThemeManagerComponent.decorators = [
    { type: Component, args: [{
                selector: 'clt-theme-manager',
                template: "<div id=\"theme-manager\">\n  <clt-panel *ngIf=\"difference()\" header=\"Export\" [toggleable]=\"true\" [collapsed]=\"true\">\n    <label>Nom du theme</label>\n    <input type=\"text\" [value]=\"currentTheme || 'default'\" #exportInput>\n    <a href=\"#\" #exportButton>\n      <button class='btn btn-primary' (click)='export()'>\n        T\u00E9l\u00E9charger le theme\n      </button>\n    </a>\n    <button class='btn btn-primary' (click)='jsonPopup.open()'>\n      Voir le theme\n    </button>\n  </clt-panel>\n\n  <clt-panel header=\"Gestionnaire de theme\" [toggleable]=\"true\" [collapsed]=\"true\">\n    <h3>Selection</h3>\n    <select name=\"theme\" id=\"theme\" (change)=\"changeTheme($event.target.value)\" #selectedTheme>\n      <option *ngFor=\"let theme of themeService.themes\" [value]=\"theme.name\">{{theme.name}}</option>\n    </select>\n  </clt-panel>\n\n  <clt-panel header=\"Gestionnaire de style\" [toggleable]=\"true\" [collapsed]=\"true\">\n    <div>Gestionnaire de style</div>\n    <div class=\"themeChanger-list\">\n      <div class=\"themeChanger-color\">\n        <h3>Header</h3>\n        <ng-container *ngFor=\"let variable of variables\">\n          <ul>\n            <li *ngIf=\"variable.includes('header')\">\n              <label>{{variable}}</label>\n              <div>\n                <div *ngIf=\"variable.includes('Color')\" [(colorPicker)]=\"themeService.theme[variable]\" (colorPickerChange)=\"themeService.setStyle(variable, $event)\"\n                  class='colorPicker' [ngStyle]=\"{'background-color':themeService.theme[variable] }\">\n                </div>\n                <input *ngIf=\"!variable.includes('Color')\" [value]='themeService.theme[variable]' (change)=\"themeService.setStyle(variable, $event.target.value)\"\n                />\n              </div>\n            </li>\n          </ul>\n        </ng-container>\n        <h3>Content</h3>\n        <ng-container *ngFor=\"let variable of variables\">\n          <ul>\n            <li *ngIf=\"variable.includes('content')\">\n              <label>{{variable}}</label>\n              <div>\n                <div *ngIf=\"variable.includes('Color')\" [(colorPicker)]=\"themeService.theme[variable]\" (colorPickerChange)=\"themeService.setStyle(variable, $event)\"\n                  class='colorPicker' [ngStyle]=\"{'background-color':themeService.theme[variable] }\">\n                </div>\n                <input *ngIf=\"!variable.includes('Color')\" [value]='themeService.theme[variable]' (change)=\"themeService.setStyle(variable, $event.target.value)\"\n                />\n              </div>\n            </li>\n          </ul>\n        </ng-container>\n        <h3>State Default</h3>\n        <ng-container *ngFor=\"let variable of variables\">\n          <ul>\n            <li *ngIf=\"variable.includes('stateDefault')\">\n              <label>{{variable}}</label>\n              <div>\n                <div *ngIf=\"variable.includes('Color')\" [(colorPicker)]=\"themeService.theme[variable]\" (colorPickerChange)=\"themeService.setStyle(variable, $event)\"\n                  class='colorPicker' [ngStyle]=\"{'background-color':themeService.theme[variable] }\">\n                </div>\n                <input *ngIf=\"!variable.includes('Color')\" [value]='themeService.theme[variable]' (change)=\"themeService.setStyle(variable, $event.target.value)\"\n                />\n              </div>\n            </li>\n          </ul>\n        </ng-container>\n        <h3>State Active</h3>\n        <ng-container *ngFor=\"let variable of variables\">\n          <ul>\n            <li *ngIf=\"variable.includes('stateActive')\">\n              <label>{{variable}}</label>\n              <div>\n                <div *ngIf=\"variable.includes('Color')\" [(colorPicker)]=\"themeService.theme[variable]\" (colorPickerChange)=\"themeService.setStyle(variable, $event)\"\n                  class='colorPicker' [ngStyle]=\"{'background-color':themeService.theme[variable] }\">\n                </div>\n                <input *ngIf=\"!variable.includes('Color')\" [value]='themeService.theme[variable]' (change)=\"themeService.setStyle(variable, $event.target.value)\"\n                />\n              </div>\n            </li>\n          </ul>\n        </ng-container>\n        <h3>State Highlight</h3>\n        <ng-container *ngFor=\"let variable of variables\">\n          <ul>\n            <li *ngIf=\"variable.includes('stateHighlight')\">\n              <label>{{variable}}</label>\n              <div>\n                <div *ngIf=\"variable.includes('Color')\" [(colorPicker)]=\"themeService.theme[variable]\" (colorPickerChange)=\"themeService.setStyle(variable, $event)\"\n                  class='colorPicker' [ngStyle]=\"{'background-color':themeService.theme[variable] }\">\n                </div>\n                <input *ngIf=\"!variable.includes('Color')\" [value]='themeService.theme[variable]' (change)=\"themeService.setStyle(variable, $event.target.value)\"\n                />\n              </div>\n            </li>\n          </ul>\n        </ng-container>\n        <h3>State Focus</h3>\n        <ng-container *ngFor=\"let variable of variables\">\n          <ul>\n            <li *ngIf=\"variable.includes('stateFocus')\">\n              <label>{{variable}}</label>\n              <div>\n                <div *ngIf=\"variable.includes('Color')\" [(colorPicker)]=\"themeService.theme[variable]\" (colorPickerChange)=\"changeStyle(variable, $event)\"\n                  class='colorPicker' [ngStyle]=\"{'background-color':themeService.theme[variable] }\">\n                </div>\n                <input *ngIf=\"!variable.includes('Color')\" [value]='themeService.theme[variable]' (change)=\"changeStyle(variable, $event.target.value)\"\n                />\n              </div>\n            </li>\n          </ul>\n        </ng-container>\n        <h3>State Error</h3>\n        <ng-container *ngFor=\"let variable of variables\">\n          <ul>\n            <li *ngIf=\"variable.includes('stateError')\">\n              <label>{{variable}}</label>\n              <div>\n                <div *ngIf=\"variable.includes('Color')\" [(colorPicker)]=\"themeService.theme[variable]\" (colorPickerChange)=\"themeService.setStyle(variable, $event)\"\n                  class='colorPicker' [ngStyle]=\"{'background-color':themeService.theme[variable] }\">\n                </div>\n                <input *ngIf=\"!variable.includes('Color')\" [value]='themeService.theme[variable]' (change)=\"themeService.setStyle(variable, $event.target.value)\"\n                />\n              </div>\n            </li>\n          </ul>\n        </ng-container>\n        <h3>State Hover</h3>\n        <ng-container *ngFor=\"let variable of variables\">\n          <ul>\n            <li *ngIf=\"variable.includes('stateHover')\">\n              <label>{{variable}}</label>\n              <div>\n                <div *ngIf=\"variable.includes('Color')\" [(colorPicker)]=\"themeService.theme[variable]\" (colorPickerChange)=\"themeService.setStyle(variable, $event)\"\n                  class='colorPicker' [ngStyle]=\"{'background-color':themeService.theme[variable] }\">\n                </div>\n                <input *ngIf=\"!variable.includes('Color')\" [value]='themeService.theme[variable]' (change)=\"themeService.setStyle(variable, $event.target.value)\"\n                />\n              </div>\n            </li>\n          </ul>\n        </ng-container>\n      </div>\n    </div>\n  </clt-panel>\n</div>\n\n<clt-popup title='Json' [body]=\"difference() | json\" #jsonPopup></clt-popup>\n",
                styles: ["#theme-manager{height:95%;max-width:450px;-ms-flex-negative:0;flex-shrink:0}#theme-manager h2{margin-top:.5em}#theme-manager label{margin:0}#theme-manager .colorPicker{width:25px;height:25px;border:1px solid #000}#theme-manager li{border-bottom:1px solid #a9a9a9;padding:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}#theme-manager li>div{width:40%}#theme-manager li input{width:100%}#theme-manager .preview{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;margin-left:10px}"]
            },] },
];
CltThemeManagerComponent.ctorParameters = function () { return [
    { type: CltThemeService, },
    { type: CltCommonService, },
]; };
CltThemeManagerComponent.propDecorators = {
    "exportButton": [{ type: ViewChild, args: ['exportButton',] },],
    "exportInput": [{ type: ViewChild, args: ['exportInput',] },],
};
var CltThemeModule = /** @class */ (function () {
    function CltThemeModule() {
    }
    CltThemeModule.forRoot = function () {
        return {
            ngModule: CltThemeModule,
            providers: [
                CltThemeService
            ]
        };
    };
    return CltThemeModule;
}());
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

export { CltBoxComponent, CltContainersModule, CltPanelComponent, CltCoreModule, CltSpinningIconDirective, CltClickStopPropagationDirective, CltToId, CltPopoverComponent, CltCommonService, CltDisplayItemDirective, CltDisplayComponent, CltDisplayModule, CltDebounceInputDirective, CltShowPasswordDirective, CltValidatorsDirective, CltFormErrorsComponent, CltFormsModule, CltPassword, CltMapLayerComponent, CltMapComponent, CltMapModule, CltMapMapService, CltNavbarComponent, CltNavigationsModule, CltSideBarService, CltSidebarComponent, CltNotificationsComponent, CltOverlayModule, CltBodyDirective, CltPopupComponent, CltNotificationsService, CltSidePanelComponent, CltThemeService, CltThemeManagerComponent, CltThemeModule };
//# sourceMappingURL=ngx-callisto.js.map
