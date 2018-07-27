(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/animations'), require('@angular/common'), require('lodash'), require('element-resize-detector'), require('uuid'), require('rxjs'), require('bluebird'), require('rxjs/Subject'), require('rxjs/operators/debounceTime'), require('ol/proj'), require('@angular/common/http'), require('ol/style/style'), require('ol/style/icon'), require('ol/interaction/modify'), require('ol/overlay'), require('ol/source/vector'), require('ol/layer/vector'), require('ol/feature'), require('ol/map'), require('ol/view'), require('ol/layer/layer'), require('ol/layer/tile'), require('ol/source/osm'), require('ol-geocoder'), require('@angular/router'), require('ngx-color-picker')) :
	typeof define === 'function' && define.amd ? define('ngx-callisto', ['exports', '@angular/core', '@angular/animations', '@angular/common', 'lodash', 'element-resize-detector', 'uuid', 'rxjs', 'bluebird', 'rxjs/Subject', 'rxjs/operators/debounceTime', 'ol/proj', '@angular/common/http', 'ol/style/style', 'ol/style/icon', 'ol/interaction/modify', 'ol/overlay', 'ol/source/vector', 'ol/layer/vector', 'ol/feature', 'ol/map', 'ol/view', 'ol/layer/layer', 'ol/layer/tile', 'ol/source/osm', 'ol-geocoder', '@angular/router', 'ngx-color-picker'], factory) :
	(factory((global['ngx-callisto'] = {}),global.ng.core,global.ng.animations,global.ng.common,global.lodash,global.erdImported,global.uuid,global.rxjs,global.bluebird,global.Rx,global.Rx.Observable.prototype,global.OlProj,global.ng.common.http,global.Style,global.Icon,global.Modify,global.Overlay,global.VectorSource,global.VectorLayer,global.Feature,global.Map,global.View,null,global.Tile,global.OSM,global.Geocoder,global.ng.router,global.ngxColorPicker));
}(this, (function (exports,core,animations,common,lodash,erdImported,uuid,rxjs,bluebird,Subject,debounceTime,OlProj,http,Style,Icon,Modify,Overlay,VectorSource,VectorLayer,Feature,Map,View,layer,Tile,OSM,Geocoder,router,ngxColorPicker) { 'use strict';

OlProj = OlProj && OlProj.hasOwnProperty('default') ? OlProj['default'] : OlProj;
Style = Style && Style.hasOwnProperty('default') ? Style['default'] : Style;
Icon = Icon && Icon.hasOwnProperty('default') ? Icon['default'] : Icon;
Modify = Modify && Modify.hasOwnProperty('default') ? Modify['default'] : Modify;
Overlay = Overlay && Overlay.hasOwnProperty('default') ? Overlay['default'] : Overlay;
VectorSource = VectorSource && VectorSource.hasOwnProperty('default') ? VectorSource['default'] : VectorSource;
VectorLayer = VectorLayer && VectorLayer.hasOwnProperty('default') ? VectorLayer['default'] : VectorLayer;
Feature = Feature && Feature.hasOwnProperty('default') ? Feature['default'] : Feature;
Map = Map && Map.hasOwnProperty('default') ? Map['default'] : Map;
View = View && View.hasOwnProperty('default') ? View['default'] : View;
Tile = Tile && Tile.hasOwnProperty('default') ? Tile['default'] : Tile;
OSM = OSM && OSM.hasOwnProperty('default') ? OSM['default'] : OSM;

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
var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}





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


function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

var CltBoxComponent = /** @class */ (function () {
    function CltBoxComponent() {
    }
    return CltBoxComponent;
}());
CltBoxComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'clt-box',
                template: "<div id=\"box\">\n    <div id=\"box-title\">\n        {{title}}\n    </div>\n    <div class=\"box-container\">\n        <ng-content></ng-content>\n    </div>\n\n</div>",
                styles: [":host{width:100%}:host #box{width:100%}:host #box .box-title{font-size:1.2rem}:host #box .box-container{background-color:#fff;-webkit-box-shadow:1px 1px 9px 0 grey;box-shadow:1px 1px 9px 0 grey}"]
            },] },
];
CltBoxComponent.propDecorators = {
    "title": [{ type: core.Input },],
};
var CltPanelComponent = /** @class */ (function () {
    function CltPanelComponent() {
        this.toggleable = false;
        this.collapsed = false;
        this.toggleChange = new core.EventEmitter();
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
    { type: core.Component, args: [{
                selector: 'clt-panel',
                template: "<div class=\"panel-container\">\n  <div class=\"panel-header\" *ngIf=\"header\">\n    {{header}}\n    <div class=\"panel-actions\">\n        <button *ngIf='toggleable' (click)=\"toggleCollapse()\">\n          <ng-container *ngIf='collapsed'>+</ng-container>\n          <ng-container *ngIf='!collapsed'>-</ng-container>\n        </button>\n    </div>\n  </div>\n  <div class=\"panel-body\" [@state]=\"state\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                styles: [".panel-container .panel-header{padding:10px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:var(--headerBgColor);color:var(--headerTextColor);border-width:var(--headerBorderWidth);border-color:var(--headerBorderColor);font-weight:var(--headerFontWeight)}.panel-container{margin:5px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;border:var(--contentBorderWidth) solid var(--contentBorderColor)}.panel-container .panel-header{font-weight:700;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.panel-container .panel-header .panel-actions button{border:none;background-color:var(--headerBgColorAccent);color:var(--headerTextColor);padding:3px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-weight:700}.panel-container .panel-header .panel-actions button:hover{background-color:var(--stateHoverBgColor)}.panel-container .panel-body{overflow:hidden;padding:10px}"],
                animations: [
                    animations.trigger('state', [
                        animations.state('close', animations.style({
                            height: '0',
                            paddingTop: '0',
                            paddingBottom: '0'
                        })),
                        animations.state('open', animations.style({
                            height: '*',
                            paddingTop: '*',
                            paddingBottom: '*'
                        })),
                        animations.transition('close => open', animations.animate('100ms ease-in')),
                        animations.transition('open => close', animations.animate('100ms ease-out'))
                    ])
                ]
            },] },
];
CltPanelComponent.propDecorators = {
    "header": [{ type: core.Input },],
    "toggleable": [{ type: core.Input },],
    "collapsed": [{ type: core.Input },],
    "toggleChange": [{ type: core.Output },],
};
var CltContainersModule = /** @class */ (function () {
    function CltContainersModule() {
    }
    return CltContainersModule;
}());
CltContainersModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
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
        lodash.reduce(a, function (_result, value, key) {
            if (b.hasOwnProperty(key)) {
                if (lodash.isEqual(value, b[key])) {
                    return _result;
                }
                else {
                    if (typeof (a[key]) !== typeof ({}) || typeof (b[key]) !== typeof ({})) {
                        result.different.push(key);
                        return result;
                    }
                    else {
                        var deeper = _this.differences(a[key], b[key]);
                        result.different = result.different.concat(lodash.map(deeper.different, function (sub_path) { return key + '.' + sub_path; }));
                        result.missing_from_second =
                            result.missing_from_second.concat(lodash.map(deeper.missing_from_second, function (sub_path) { return key + '.' + sub_path; }));
                        result.missing_from_first =
                            result.missing_from_first.concat(lodash.map(deeper.missing_from_first, function (sub_path) { return key + '.' + sub_path; }));
                        return result;
                    }
                }
            }
            else {
                result.missing_from_second.push(key);
                return result;
            }
        }, result);
        lodash.reduce(b, function (_result, value, key) {
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
    { type: core.Injectable },
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
    { type: core.Directive, args: [{
                selector: '[clt-spinning-icon]',
                exportAs: 'clt-spinning-icon'
            },] },
];
CltSpinningIconDirective.ctorParameters = function () { return [
    { type: core.Renderer2, },
    { type: core.ElementRef, },
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
    { type: core.Directive, args: [{
                selector: '[clt-click-stop-propagation]'
            },] },
];
CltClickStopPropagationDirective.propDecorators = {
    "onClick": [{ type: core.HostListener, args: ['click', ['$event'],] },],
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
    { type: core.Pipe, args: [{ name: 'clt-toId', pure: true },] },
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
    { type: core.Component, args: [{
                selector: 'clt-popover',
                template: "<div class=\"clt-popover\">\n    <div class=\"clt-popover-container {{placement}}\" #popupContainer>\n        <ng-content select=\"[popover=content]\"></ng-content>\n    </div>\n    <ng-content></ng-content>\n</div>",
                styles: [".formGroup{margin-bottom:10px}.formGroup label{width:100%}:host .clt-popover{position:relative;width:100%}:host .clt-popover .clt-popover-container{padding:10px;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:.1s;transition-duration:.1s;-webkit-transition-timing-function:cubic-bezier(.075,.82,.165,1);transition-timing-function:cubic-bezier(.075,.82,.165,1);visibility:hidden;border:1px solid #d2d2d2;position:absolute;z-index:1;background-color:#fff;border-radius:3px}:host .clt-popover .clt-popover-container::after{content:\"\";position:absolute;border-style:solid;border-width:5px}:host .clt-popover .clt-popover-container.right{left:calc(100% + 10px)}:host .clt-popover .clt-popover-container.right::after{right:100%;top:50%;margin-top:-10px;border-color:transparent #b9b9b9 transparent transparent}:host .clt-popover .clt-popover-container.left{right:calc(100% + 10px)}:host .clt-popover .clt-popover-container.left::after{left:100%;top:50%;margin-top:-10px;border-color:transparent transparent transparent #b9b9b9}:host .clt-popover .clt-popover-container.bottom{top:calc(100% + 10px);left:-101.5px;margin-left:50%}:host .clt-popover .clt-popover-container.bottom::after{left:50%;margin-left:-5px;bottom:100%;border-color:transparent transparent #b9b9b9}:host .clt-popover .clt-popover-container.top{bottom:calc(100% + 10px);left:-101.5px;margin-left:50%}:host .clt-popover .clt-popover-container.top::after{left:50%;margin-left:-5px;top:100%;border-color:#b9b9b9 transparent transparent}:host ::ng-deep ul{list-style:none;margin:0;padding:0}"]
            },] },
];
CltPopoverComponent.ctorParameters = function () { return [
    { type: core.Renderer2, },
]; };
CltPopoverComponent.propDecorators = {
    "open": [{ type: core.Input, args: ['open',] },],
    "placement": [{ type: core.Input, args: ['placement',] },],
    "popupContainer": [{ type: core.ViewChild, args: ['popupContainer',] },],
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
    { type: core.NgModule, args: [{
                declarations: [
                    CltClickStopPropagationDirective,
                    CltSpinningIconDirective,
                    CltToId,
                    CltPopoverComponent,
                ],
                imports: [
                    common.CommonModule,
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
    { type: core.Directive, args: [{
                selector: '[cltDisplayItem]',
                exportAs: 'cltDisplayItem'
            },] },
];
CltDisplayItemDirective.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ChangeDetectorRef, },
]; };
CltDisplayItemDirective.propDecorators = {
    "name": [{ type: core.Input },],
};
var CltDisplayComponent = /** @class */ (function () {
    function CltDisplayComponent() {
        this.elements = [];
        this.visibleChange = new core.EventEmitter();
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
    { type: core.Component, args: [{
                selector: 'clt-display',
                template: "<clt-side-panel [visible]=\"visible\" (visibleChange)=\"changeVisibleState($event)\" position=\"right\">\n  <h1>Affichage</h1>\n  <ul>\n    <li *ngFor=\"let component of elements\">\n      <div>\n        <input type=\"checkbox\" (onChange)=\"component.toggle($event)\" [value]=\"component.display\" />\n      </div>\n      <div class=\"display-name\">{{component.name}}</div>\n    </li>\n  </ul>\n</clt-side-panel>\n\n<ng-content></ng-content>",
                styles: ["li{display:-webkit-box;display:-ms-flexbox;display:flex}li .display-name{margin-left:10px;font-weight:700}:host{width:100%}"]
            },] },
];
CltDisplayComponent.propDecorators = {
    "storage": [{ type: core.Input },],
    "visible": [{ type: core.Input },],
    "elements": [{ type: core.Input },],
    "visibleChange": [{ type: core.Output },],
};
var CltNotificationsService = /** @class */ (function () {
    function CltNotificationsService() {
        this.notifications = [];
        this.addEvent = new rxjs.Subject();
        this.removeEvent = new rxjs.Subject();
        var notificationsDelay = +localStorage.getItem('notificationsDelay');
        if (notificationsDelay < 500) {
            notificationsDelay = 6000;
            localStorage.setItem('notificationsDelay', '6000');
        }
    }
    CltNotificationsService.prototype.add = function (title, msg) {
        var notif = {
            id: uuid.v4(),
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
    { type: core.Injectable },
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
        return bluebird.each(this.htmlNotifications, function (htmlNotif) {
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
                    case 0: return [4 /*yield*/, bluebird.filter(this.htmlNotifications, function (_htmlNotif) { return _htmlNotif.nativeElement.id === id; })];
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
    { type: core.Component, args: [{
                selector: 'clt-notifications',
                template: "<div id=\"notifications\">\n    <div id=\"closeAll\" *ngIf='_notifications.length' (click)=\"deleteAll()\">\n        <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n    </div>\n    <div class=\"notifsWrapper\">\n        <div class=\"notifWrapper\" (click)=\"ns.delete(notif.id)\" #notifModel *ngFor=\"let notif of _notifications\" [id]=\"notif.id\">\n            <div class=\"notifContainer\">\n                <div class=\"title\">\n                    {{notif.title}}\n                </div>\n                <div class=\"msg\">\n                    {{notif.msg}}\n                </div>\n            </div>\n        </div>\n    </div>\n</div>",
                styles: [".formGroup{margin-bottom:10px}.formGroup label{width:100%}@-webkit-keyframes openNotif{0%{max-height:0}to{max-height:400px}}@keyframes openNotif{0%{max-height:0}to{max-height:400px}}@-webkit-keyframes closeNotif{0%{max-height:400px}to{max-height:0}}@keyframes closeNotif{0%{max-height:400px}to{max-height:0}}#notifications{z-index:100000;position:fixed;bottom:20px;right:20px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}#notifications #closeAll{text-align:right}#notifications #closeAll i{font-size:1.7em;background-color:#343a40;color:#fff;padding:10px;-webkit-box-shadow:0 0 10px grey;box-shadow:0 0 10px grey}#notifications .notifWrapper{-webkit-animation-name:openNotif;animation-name:openNotif;-webkit-animation-duration:.4s;animation-duration:.4s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;overflow-y:hidden;-webkit-box-shadow:0 0 10px grey;box-shadow:0 0 10px grey;margin-top:10px;background-color:#343a40;color:#fff}#notifications .notifWrapper.deleteNotif{-webkit-animation-name:closeNotif;animation-name:closeNotif;-webkit-animation-duration:.4s;animation-duration:.4s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}#notifications .notifWrapper .notifContainer{padding:10px;width:400px}#notifications .notifWrapper .notifContainer .title{width:100%;border-bottom:1px solid #fff}#notifications .notifWrapper .notifContainer .msg{width:100%;padding-top:10px}"]
            },] },
];
CltNotificationsComponent.ctorParameters = function () { return [
    { type: CltNotificationsService, },
    { type: core.Renderer2, },
]; };
CltNotificationsComponent.propDecorators = {
    "htmlNotifications": [{ type: core.ViewChildren, args: ['notifModel',] },],
};
var BodyDirective = /** @class */ (function () {
    function BodyDirective(templateRef) {
        this.templateRef = templateRef;
    }
    return BodyDirective;
}());
BodyDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[popup-body]'
            },] },
];
BodyDirective.ctorParameters = function () { return [
    { type: core.TemplateRef, },
]; };
var PopupComponent = /** @class */ (function () {
    function PopupComponent(renderer, cdr) {
        this.renderer = renderer;
        this.cdr = cdr;
        this.body = '';
        this.ghost = false;
        this.cancelButton = 'Annuler';
        this.validateButton = 'Valider';
        this.direction = 'center';
        this.noActions = false;
        this.openEvent = new core.EventEmitter();
        this._open = false;
        this.visible = false;
        this.visibleChange = new core.EventEmitter();
        this.state = 'close';
        this.className = 'popup';
    }
    PopupComponent.prototype.ngAfterContentInit = function () {
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
    PopupComponent.prototype.ngOnDestroy = function () {
        window.removeEventListener('keyup', this.keyEvents);
    };
    PopupComponent.prototype.open = function (context) {
        var _this = this;
        this.context = context;
        this.result = new rxjs.Subject();
        this._open = true;
        this.state = 'open';
        setTimeout(function (_) {
            _this.visibleChange.emit(_this._open);
            _this.openEvent.emit();
        });
        return this.result;
    };
    PopupComponent.prototype.close = function ($event) {
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
    PopupComponent.prototype.bindForm = function (form) {
        this.form = form;
        return this;
    };
    PopupComponent.prototype.stopPropagation = function ($event) {
        $event.stopPropagation();
    };
    PopupComponent.prototype.out = function (isValidate, $event, value) {
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
    return PopupComponent;
}());
PopupComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'popup',
                template: "<div class=\"host {{direction}} {{ghost ? 'ghost' : ''}}\" (click)=\"close($event)\" [@openState]=\"state\" #host>\n  <div class=\"host-container\" *ngIf=\"_open\" [ngStyle]=\"{width:width, height:height}\" (click)=\"stopPropagation($event)\" #hostContainer>\n    <div class=\"host-title\" #titleRef [ngClass]='titleRef.children.length ? \"\": \"nothing\"'>\n      <ng-content select=\"[title]\"></ng-content>\n      <div *ngIf='!titleRef?.children?.length && title'>\n        {{title}}\n      </div>\n    <div class=\"close\" (click)=\"out(false)\">x</div>\n    </div>\n    <div class=\"host-body\">\n      <div *ngIf='body;else bodyTemplateContainer'>\n        {{body}}\n      </div>\n      <ng-template #bodyTemplateContainer>\n        <ng-container [ngTemplateOutlet]=\"bodyTemplate?.templateRef\"></ng-container>\n      </ng-template>\n    </div>\n    <div class=\"host-actions\" *ngIf='!noActions'>\n      <button class=\"host-action host-cancel\" (click)=\"out(false)\">{{cancelButton}}</button>\n      <button class=\"host-action host-ok\" [ngClass]=\"{'host-disable': form?.invalid}\" [disabled]=\"form?.invalid\" (click)=\"out(true)\">{{validateButton}}</button>\n    </div>\n  </div>\n</div>",
                styles: [".host .host-container .host-title{padding:10px;font-weight:700;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:var(--headerBgColor);color:var(--headerTextColor);border-width:var(--headerBorderWidth);border-color:var(--headerBorderColor);font-weight:var(--headerFontWeight)}.host{position:absolute;bottom:0;left:0;width:100vw;height:100vh;z-index:1000;background-color:rgba(0,0,0,.8);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;opacity:0}.host .host-container{-webkit-box-shadow:0 0 20px 1px #000;box-shadow:0 0 20px 1px #000;min-width:400px;background-color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;max-height:100vh;max-width:100vw;pointer-events:auto}.host .host-container .host-title{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.host .host-container .host-title.nothing{padding:0}.host .host-container .host-title .close{border:none;background-color:var(--headerBgColorAccent);color:var(--headerTextColor);padding:3px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:15px;height:15px;cursor:pointer}.host .host-container .host-title .close:hover{background-color:var(--stateHoverBgColor)}.host .host-container .host-body{padding:10px;-webkit-box-flex:1;-ms-flex:1;flex:1;overflow-y:auto}.host .host-container .host-body::ng-deep>.ng-star-inserted{height:100%}.host .host-container .host-actions{display:-webkit-box;display:-ms-flexbox;display:flex}.host .host-container .host-actions .host-action{padding:10px;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#fff;cursor:pointer;border:none}.host .host-container .host-actions .host-action.host-ok{background-color:#28a745}.host .host-container .host-actions .host-action.host-cancel{background-color:#dc3545}.host .host-container .host-actions .host-action.host-disable{background-color:#a2a2a2}.host.bottom,.host.right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.host.left,.host.top{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.host.left,.host.right{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.host.left>.host-container,.host.right>.host-container{height:100%}.host.bottom,.host.top{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.host.bottom>.host-container,.host.top>.host-container{width:100%}.host.ghost{pointer-events:none;background-color:transparent}"],
                animations: [
                    animations.trigger('openState', [
                        animations.state('open', animations.style({
                            'display': 'flex',
                            'opacity': '1'
                        })),
                        animations.state('close', animations.style({
                            'display': 'none',
                            'opacity': '0'
                        })),
                        animations.transition('open => close', animations.animate('100ms ease-in')),
                        animations.transition('close => open', animations.animate('100ms ease-out'))
                    ])
                ]
            },] },
];
PopupComponent.ctorParameters = function () { return [
    { type: core.Renderer2, },
    { type: core.ChangeDetectorRef, },
]; };
PopupComponent.propDecorators = {
    "bodyTemplate": [{ type: core.ContentChild, args: [BodyDirective,] },],
    "host": [{ type: core.ViewChild, args: ['host',] },],
    "hostContainer": [{ type: core.ViewChild, args: ['hostContainer',] },],
    "body": [{ type: core.Input },],
    "ghost": [{ type: core.Input },],
    "title": [{ type: core.Input },],
    "cancelButton": [{ type: core.Input },],
    "validateButton": [{ type: core.Input },],
    "width": [{ type: core.Input },],
    "height": [{ type: core.Input },],
    "direction": [{ type: core.Input },],
    "noActions": [{ type: core.Input },],
    "openEvent": [{ type: core.Output, args: ['openEvent',] },],
    "visible": [{ type: core.Input },],
    "visibleChange": [{ type: core.Output },],
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
}(PopupComponent));
CltSidePanelComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'clt-side-panel',
                template: "<div class=\"host {{direction}} {{ghost ? 'ghost' : ''}}\" (click)=\"close($event)\" [@openState]=\"state\" #host>\n  <div class=\"host-container\" *ngIf=\"_open\" [ngStyle]=\"{width:width, height:height}\" (click)=\"stopPropagation($event)\" #hostContainer>\n    <div class=\"host-title\" #titleRef [ngClass]='titleRef.children.length ? \"\": \"nothing\"'>\n      <ng-content select=\"[title]\"></ng-content>\n      <div *ngIf='!titleRef?.children?.length && title'>\n        {{title}}\n      </div>\n    <div class=\"close\" (click)=\"out(false)\">x</div>\n    </div>\n    <div class=\"host-body\">\n      <div *ngIf='body;else bodyTemplateContainer'>\n        {{body}}\n      </div>\n      <ng-template #bodyTemplateContainer>\n        <ng-container [ngTemplateOutlet]=\"bodyTemplate?.templateRef\"></ng-container>\n      </ng-template>\n    </div>\n    <div class=\"host-actions\" *ngIf='!noActions'>\n      <button class=\"host-action host-cancel\" (click)=\"out(false)\">{{cancelButton}}</button>\n      <button class=\"host-action host-ok\" [ngClass]=\"{'host-disable': form?.invalid}\" [disabled]=\"form?.invalid\" (click)=\"out(true)\">{{validateButton}}</button>\n    </div>\n  </div>\n</div>",
                styles: [".host .host-container .host-title{padding:10px;font-weight:700;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:var(--headerBgColor);color:var(--headerTextColor);border-width:var(--headerBorderWidth);border-color:var(--headerBorderColor);font-weight:var(--headerFontWeight)}.host{position:absolute;bottom:0;left:0;width:100vw;height:100vh;z-index:1000;background-color:rgba(0,0,0,.8);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;opacity:0}.host .host-container{-webkit-box-shadow:0 0 20px 1px #000;box-shadow:0 0 20px 1px #000;min-width:400px;background-color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;max-height:100vh;max-width:100vw;pointer-events:auto}.host .host-container .host-title{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.host .host-container .host-title.nothing{padding:0}.host .host-container .host-title .close{border:none;background-color:var(--headerBgColorAccent);color:var(--headerTextColor);padding:3px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:15px;height:15px;cursor:pointer}.host .host-container .host-title .close:hover{background-color:var(--stateHoverBgColor)}.host .host-container .host-body{padding:10px;-webkit-box-flex:1;-ms-flex:1;flex:1;overflow-y:auto}.host .host-container .host-body::ng-deep>.ng-star-inserted{height:100%}.host .host-container .host-actions{display:-webkit-box;display:-ms-flexbox;display:flex}.host .host-container .host-actions .host-action{padding:10px;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#fff;cursor:pointer;border:none}.host .host-container .host-actions .host-action.host-ok{background-color:#28a745}.host .host-container .host-actions .host-action.host-cancel{background-color:#dc3545}.host .host-container .host-actions .host-action.host-disable{background-color:#a2a2a2}.host.bottom,.host.right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.host.left,.host.top{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.host.left,.host.right{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.host.left>.host-container,.host.right>.host-container{height:100%}.host.bottom,.host.top{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.host.bottom>.host-container,.host.top>.host-container{width:100%}.host.ghost{pointer-events:none;background-color:transparent}"],
                animations: [
                    animations.trigger('openState', [
                        animations.state('open', animations.style({
                            'display': 'flex',
                            'opacity': '1'
                        })),
                        animations.state('close', animations.style({
                            'display': 'none',
                            'opacity': '0'
                        })),
                        animations.transition('open => close', animations.animate('100ms ease-in')),
                        animations.transition('close => open', animations.animate('100ms ease-out'))
                    ])
                ]
            },] },
];
CltSidePanelComponent.ctorParameters = function () { return [
    { type: core.Renderer2, },
    { type: core.ChangeDetectorRef, },
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
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule,
                ],
                declarations: [
                    CltNotificationsComponent,
                    PopupComponent,
                    BodyDirective,
                    CltSidePanelComponent
                ],
                exports: [
                    CltNotificationsComponent,
                    PopupComponent,
                    BodyDirective,
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
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule,
                    CltOverlayModule
                ],
                declarations: [CltDisplayComponent, CltDisplayItemDirective],
                exports: [CltDisplayComponent, CltDisplayItemDirective]
            },] },
];
var CltDebounceInputDirective = /** @class */ (function () {
    function CltDebounceInputDirective() {
        this.debounceTime = 500;
        this.debounce = new core.EventEmitter();
        this.subject = new Subject.Subject();
    }
    CltDebounceInputDirective.prototype.ngOnInit = function () {
        this.createSubsription();
    };
    CltDebounceInputDirective.prototype.createSubsription = function () {
        var _this = this;
        this.subscription = this.subject.pipe(debounceTime.debounceTime(this.debounceTime)).subscribe(function (e) { return _this.debounce.emit(e); });
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
    { type: core.Directive, args: [{
                selector: '[clt-debounce-input]'
            },] },
];
CltDebounceInputDirective.propDecorators = {
    "debounceTime": [{ type: core.Input },],
    "debounce": [{ type: core.Output },],
    "keyupEvent": [{ type: core.HostListener, args: ['keyup', ['$event'],] },],
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
    { type: core.Directive, args: [{
                selector: '[clt-show-password]',
            },] },
];
CltShowPasswordDirective.ctorParameters = function () { return [
    { type: core.Renderer2, },
    { type: core.ElementRef, },
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
    { type: core.Directive, args: [{
                selector: '[cltValidators]',
            },] },
];
CltValidatorsDirective.ctorParameters = function () { return [
    { type: core.Renderer2, },
    { type: core.ElementRef, },
]; };
CltValidatorsDirective.propDecorators = {
    "cltValidators": [{ type: core.Input },],
    "onInputChange": [{ type: core.HostListener, args: ['input',] },],
};
var CltFormErrorsComponent = /** @class */ (function () {
    function CltFormErrorsComponent() {
    }
    return CltFormErrorsComponent;
}());
CltFormErrorsComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'clt-form-errors',
                template: "<!-- {{model.errors | json}} -->\n\n<ul *ngIf=\"model && model.errors\">\n    <li *ngIf=\"model.errors.pattern\" class=\"hint\">\n         <ng-container *ngIf=\"patternName; else notPatternName\">\n            {{patternName}}\n        </ng-container>\n        <ng-template #notPatternName>\n            Pattern: {{model.errors.pattern.requiredPattern}}\n        </ng-template>\n    </li>\n    <li *ngIf=\"model.errors.required\" class=\"hint\">\n        Obligatoire\n    </li>\n    <li *ngIf=\"model.errors.minlength\" class=\"hint\">\n        Contient au moins {{model.errors.minlength.requiredLength}} caract\u00E8res\n    </li>\n    <li *ngIf=\"model.errors.maxlength\" class=\"hint\">\n        Contient au plus {{model.errors.maxlength.requiredLength}} caract\u00E8res\n    </li>\n    <li *ngIf=\"model.errors.recheckPassphrase\" class=\"hint\">\n        Doit correspondre \u00E0 la phrase de passe\n    </li>\n    <li *ngIf=\"model.errors.email\" class=\"hint\">\n        Doit \u00EAtre un email\n    </li>\n</ul>\n",
                styles: [".formGroup{margin-bottom:10px}.formGroup label{width:100%}:host{display:inline-block;font-size:.7em;width:100%;min-height:.7em;top:-2px;line-height:0;text-align:right;color:#dc3545}"]
            },] },
];
CltFormErrorsComponent.propDecorators = {
    "model": [{ type: core.Input, args: ['model',] },],
    "patternName": [{ type: core.Input, args: ['patternName',] },],
};
var CltFormsModule = /** @class */ (function () {
    function CltFormsModule() {
    }
    return CltFormsModule;
}());
CltFormsModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
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
var MapService = /** @class */ (function () {
    function MapService(http$$1) {
        this.http = http$$1;
    }
    MapService.prototype.convertTolatLong = function (coordinates) {
        coordinates = this.transformToFloat(coordinates);
        return OlProj.transform(coordinates, 'EPSG:3857', 'EPSG:4326');
    };
    MapService.prototype.fromLonLat = function (lonLat) {
        lonLat = this.transformToFloat(lonLat);
        return OlProj.fromLonLat(lonLat);
    };
    MapService.prototype.transformToFloat = function (coordinates) {
        return coordinates.map(function (coord) {
            if (typeof coord === 'string')
                return parseFloat(coord);
            return coord;
        });
    };
    MapService.prototype.reverse = function (lonlat) {
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
    MapService.prototype.reverseFromFeature = function (feature) {
        var coordinates = feature.getGeometry().getCoordinates();
        return this.reverse(this.convertTolatLong(coordinates));
    };
    MapService.prototype.createStyleIcon = function (icon) {
        return new Style({
            image: new Icon(icon)
        });
    };
    MapService.prototype.createBuildingStyleIcon = function (color) {
        if (color === void 0) { color = '#8959A8'; }
        return this.createStyleIcon({
            color: color,
            crossOrigin: 'anonymous',
            src: '/assets/img/dot-marker.png'
        });
    };
    MapService.prototype.createAddressStyleIcon = function () {
        return this.createStyleIcon({
            anchor: [0.5, 46],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            src: '/assets/img/address-marker.png'
        });
    };
    return MapService;
}());
MapService.decorators = [
    { type: core.Injectable, args: [{
                providedIn: 'root'
            },] },
];
MapService.ctorParameters = function () { return [
    { type: http.HttpClient, },
]; };
MapService.ngInjectableDef = core.defineInjectable({ factory: function MapService_Factory() { return new MapService(core.inject(http.HttpClient)); }, token: MapService, providedIn: "root" });
var CltMapLayerComponent = /** @class */ (function () {
    function CltMapLayerComponent(mapService) {
        this.mapService = mapService;
        this.overlays = [];
        this.nbFeatures = 0;
        this.featuremove = new core.EventEmitter();
        this.createLayer();
    }
    CltMapLayerComponent.prototype.getSource = function () {
        return this.olLayer ? this.olLayer.getSource() : undefined;
    };
    CltMapLayerComponent.prototype.createLayer = function () {
        var layer$$1 = new VectorLayer({
            source: new VectorSource()
        });
        this.olLayer = layer$$1;
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
        var uuid$$1 = uuid.v4();
        infos.uuid = uuid$$1;
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
            popup.setElement(document.getElementById(uuid$$1));
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
    { type: core.Component, args: [{
                selector: 'clt-map-layer',
                template: "<div [id]=\"overlay.uuid\" *ngFor=\"let overlay of overlays\">\n  <ng-container *ngTemplateOutlet='overlay.template; context: {$implicit:overlay.context}'></ng-container>\n</div>",
                styles: [""]
            },] },
];
CltMapLayerComponent.ctorParameters = function () { return [
    { type: MapService, },
]; };
CltMapLayerComponent.propDecorators = {
    "featuremove": [{ type: core.Output },],
};
var CltMapComponent = /** @class */ (function () {
    function CltMapComponent(mapService, componentFactoryResolver, renderer) {
        this.mapService = mapService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.renderer = renderer;
        this.initialized = false;
        this.is_init = new rxjs.Subject();
        this.id = 'map-' + uuid.v4();
        this.center = {};
        this.olclick = new core.EventEmitter();
        this.olchange = new core.EventEmitter();
        this.oldblclick = new core.EventEmitter();
        this.olmoveend = new core.EventEmitter();
        this.olmovestart = new core.EventEmitter();
        this.olpointerdrag = new core.EventEmitter();
        this.olpointermove = new core.EventEmitter();
        this.olpostcompose = new core.EventEmitter();
        this.olpostrender = new core.EventEmitter();
        this.olprecompose = new core.EventEmitter();
        this.olpropertychange = new core.EventEmitter();
        this.olsingleclick = new core.EventEmitter();
        this.geocoder = new core.EventEmitter();
        this.featuremove = new core.EventEmitter();
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
        this.layersComponent.map(function (layer$$1) {
            _this.addLayer(layer$$1);
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
    { type: core.Component, args: [{
                selector: 'clt-map',
                template: "<div class=\"map-container\" #mapContainer>\n    <div \n        [id]=\"id\" \n        class=\"map\" #map>\n        <ng-content></ng-content> <!-- for overlays ... -->\n        <ng-template #layersContainer></ng-template>\n    </div>\n</div>",
                styles: [".map-container{position:relative;padding-top:56.25%}.map-container .map{width:100%;min-height:200px;position:absolute;overflow:hidden;top:0;height:100%}"]
            },] },
];
CltMapComponent.ctorParameters = function () { return [
    { type: MapService, },
    { type: core.ComponentFactoryResolver, },
    { type: core.Renderer2, },
]; };
CltMapComponent.propDecorators = {
    "id": [{ type: core.Input },],
    "height": [{ type: core.Input },],
    "center": [{ type: core.Input },],
    "points": [{ type: core.Input },],
    "defaultLayer": [{ type: core.Input },],
    "zoom": [{ type: core.Input },],
    "olclick": [{ type: core.Output },],
    "olchange": [{ type: core.Output },],
    "oldblclick": [{ type: core.Output },],
    "olmoveend": [{ type: core.Output },],
    "olmovestart": [{ type: core.Output },],
    "olpointerdrag": [{ type: core.Output },],
    "olpointermove": [{ type: core.Output },],
    "olpostcompose": [{ type: core.Output },],
    "olpostrender": [{ type: core.Output },],
    "olprecompose": [{ type: core.Output },],
    "olpropertychange": [{ type: core.Output },],
    "olsingleclick": [{ type: core.Output },],
    "geocoder": [{ type: core.Output },],
    "featuremove": [{ type: core.Output },],
    "mapElement": [{ type: core.ViewChild, args: ['map',] },],
    "mapContainer": [{ type: core.ViewChild, args: ['mapContainer',] },],
    "layersContainer": [{ type: core.ViewChild, args: ['layersContainer', { read: core.ViewContainerRef },] },],
    "layersComponent": [{ type: core.ContentChildren, args: [CltMapLayerComponent,] },],
};
var MapModule = /** @class */ (function () {
    function MapModule() {
    }
    MapModule.forRoot = function () {
        return {
            ngModule: MapModule,
            providers: [
                MapService
            ]
        };
    };
    return MapModule;
}());
MapModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
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
    { type: core.Component, args: [{
                selector: 'clt-navbar',
                template: "<div id=\"navbar\" [ngStyle]=\"{'background-image': img ? 'url(img)' : ''}\">\n  <div id=\"leftRight\">\n    <div id=\"left\">\n      <div id=\"logoContainer\">\n        <ng-content select=\"[logo]\"></ng-content>\n      </div>\n      <div id=\"description\">\n        {{name}}\n      </div>\n    </div>\n    <div id=\"right\">\n      <ng-content selector=\"[right]\"></ng-content>\n    </div>\n  </div>\n</div>",
                styles: [".formGroup{margin-bottom:10px}.formGroup label{width:100%}#navbar{height:60px;position:relative;max-height:60px!important;color:var(--headerTextColor);background-color:var(--headerBgColor);-webkit-box-shadow:0 2px 11px #00000080;box-shadow:0 2px 11px #00000080}#navbar i{color:var(--headerTextColor)!important;font-size:2.5rem!important}#navbar #leftRight{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%}#navbar #leftRight #left{height:100%;padding-left:5px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}#navbar #leftRight #left #logoContainer{height:80%}#navbar #leftRight #left #logoContainer ::ng-deep [logo]{height:100%;border-radius:100%;overflow:hidden}#navbar #leftRight #left #logoContainer ::ng-deep [logo] img{height:100%}#navbar #leftRight #left #description{margin-left:10px;color:#fff;font-size:1.2em}#navbar #leftRight::ng-deep #right>[right]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;margin-right:10px}#navbar #leftRight::ng-deep #right>[right] i{border:none;background-color:var(--headerBgColor);color:var(--headerTextColor);padding:3px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:1.7em}#navbar #leftRight::ng-deep #right>[right] i:hover{background-color:var(--stateHoverBgColor)}"]
            },] },
];
CltNavbarComponent.ctorParameters = function () { return []; };
CltNavbarComponent.propDecorators = {
    "name": [{ type: core.Input, args: ['name',] },],
    "img": [{ type: core.Input, args: ['img',] },],
    "url": [{ type: core.Input, args: ['url',] },],
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
    { type: core.Injectable },
];
var CltSidebarComponent = /** @class */ (function () {
    function CltSidebarComponent(sidebar, router$$1) {
        this.sidebar = sidebar;
        this.router = router$$1;
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
    { type: core.Component, args: [{
                selector: 'clt-sidebar',
                template: "<div class=\"openSidebar\" \n    [ngClass]=\"{'openSidebar':sidebar._open, 'closeSidebar':!sidebar._open}\"\n    [ngStyle]=\"{'background-image': img ? 'url(img)' : ''}\"\n    id=\"sidebar\">\n    <div class=\"list\">\n        <div *ngFor='let item of conf.list'>\n            <ng-container *ngTemplateOutlet=\"linkTemplate;context:{$implicit:item}\"></ng-container>  \n        </div>\n    </div>\n    <div class=\"bottomList\">\n        <div *ngFor='let item of conf.bottom'>\n            <ng-container *ngTemplateOutlet=\"linkTemplate;context:{$implicit:item}\"></ng-container>\n        </div>\n        <div id=\"toggleSidebar\" class=\"item\" (click)=\"toggleSidebar();\" [ngClass]=\"{'openSidebar':sidebar._open, 'closeSidebar':!sidebar._open}\">\n            <div class=\"icon\" >\n                <i class=\"fa fa-arrow-right\"></i>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #linkTemplate let-item>\n    <a id=\"{{item.id}}\" class=\"item\" [href]=\"item.url ? item.url : ''\" (click)=\"goTo(item, $event)\" (auxclick)=\"newWindow(item)\" (mouseover)=\"toggleHint($event)\" (mouseleave)=\"toggleHint($event)\">\n        <div class=\"icon\">\n            <i class=\"{{item.icon}}\"></i>\n        </div>\n        <div class=\"description\" [ngClass]=\"{'openSidebar':sidebar._open, 'closeSidebar':!sidebar._open}\">\n            {{item.description}}\n        </div>\n        <div id=\"hint-{{item.id}}\" class=\"hintContainer\"  [@hintState]=\"hintState\">\n            <div class=\"hint\">{{item.description}}</div>\n        </div>\n    </a>\n</ng-template>\n",
                styles: [".formGroup{margin-bottom:10px}.formGroup label{width:100%}@-webkit-keyframes openSidebar{0%{width:40px}to{width:175px}}@keyframes openSidebar{0%{width:40px}to{width:175px}}@-webkit-keyframes closeSidebar{0%{width:175px}to{width:40px}}@keyframes closeSidebar{0%{width:175px}to{width:40px}}@-webkit-keyframes openSidebarDescription{0%{width:0}to{width:40px}}@keyframes openSidebarDescription{0%{width:0}to{width:40px}}@-webkit-keyframes closeSidebarDescription{0%{width:40px}to{width:0}}@keyframes closeSidebarDescription{0%{width:40px}to{width:0}}@-webkit-keyframes openSidebarIcon{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(-1);transform:scale(-1)}}@keyframes openSidebarIcon{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(-1);transform:scale(-1)}}@-webkit-keyframes closeSidebarIcon{0%{-webkit-transform:scale(-1);transform:scale(-1)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes closeSidebarIcon{0%{-webkit-transform:scale(-1);transform:scale(-1)}to{-webkit-transform:scale(1);transform:scale(1)}}#sidebar{height:100%;overflow-x:hidden;width:40px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;background-size:auto 100%;background-color:#fff;position:relative;color:#616161;-webkit-box-shadow:2px 0 11px #00000080;box-shadow:2px 0 11px #00000080}#sidebar:before{content:\"\";height:70px;background-color:var(--headerBgColorAccent)}#sidebar.openSidebar{-webkit-animation-name:openSidebar;animation-name:openSidebar;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}#sidebar.closeSidebar{-webkit-animation-name:closeSidebar;animation-name:closeSidebar;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}#sidebar .bottomList,#sidebar .list{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%}#sidebar .bottomList.list,#sidebar .list.list{height:100%}#sidebar .bottomList .item,#sidebar .list .item{-webkit-box-shadow:none;box-shadow:none;-webkit-box-pack:left;-ms-flex-pack:left;justify-content:left;margin:0;border:none;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;padding-bottom:10px;padding-top:10px;color:#616161}#sidebar .bottomList .item:hover,#sidebar .list .item:hover{background-color:rgba(0,0,0,.1)}#sidebar .bottomList .item .hintContainer,#sidebar .list .item .hintContainer{position:absolute;overflow:hidden;left:40px;max-width:0;z-index:3;background-color:#e7e7e7}#sidebar .bottomList .item .hintContainer .hint,#sidebar .list .item .hintContainer .hint{color:#636363;padding:10px}#sidebar .bottomList .item .icon,#sidebar .list .item .icon{width:40px;text-align:center;font-size:1.3rem}#sidebar .bottomList .item .description.openSidebar,#sidebar .list .item .description.openSidebar{-webkit-animation-name:openSidebarDescription;animation-name:openSidebarDescription;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}#sidebar .bottomList .item .description.closeSidebar,#sidebar .list .item .description.closeSidebar{-webkit-animation-name:closeSidebarDescription;animation-name:closeSidebarDescription;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}#sidebar .bottomList #toggleSidebar,#sidebar .list #toggleSidebar{background-color:var(--headerBgColorAccent);color:var(--headerTextColor)}#sidebar .bottomList #toggleSidebar .icon,#sidebar .list #toggleSidebar .icon{font-size:1em}#sidebar .bottomList #toggleSidebar.openSidebar,#sidebar .list #toggleSidebar.openSidebar{-webkit-animation-name:openSidebarIcon;animation-name:openSidebarIcon;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}#sidebar .bottomList #toggleSidebar.closeSidebar,#sidebar .list #toggleSidebar.closeSidebar{-webkit-animation-name:closeSidebarIcon;animation-name:closeSidebarIcon;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}"],
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
CltSidebarComponent.ctorParameters = function () { return [
    { type: CltSideBarService, },
    { type: router.Router, },
]; };
CltSidebarComponent.propDecorators = {
    "conf": [{ type: core.Input, args: ['conf',] },],
    "img": [{ type: core.Input, args: ['img',] },],
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
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule,
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
var defaultTheme = require('./default.json');
var bluegreygreen = require('./bluegrey-green.json');
var ThemeService = /** @class */ (function () {
    function ThemeService() {
        this.themes = [
            { name: 'default', theme: defaultTheme },
            { name: 'bluegreygreen', theme: bluegreygreen }
        ];
        this.theme = {};
        this.reload(this.themes[0].theme);
    }
    ThemeService.prototype.reload = function (theme) {
        var _this = this;
        if (theme)
            this.theme = lodash.merge(lodash.cloneDeep(defaultTheme), theme);
        document.getElementsByTagName('html')[0].setAttribute('style', '');
        Object.keys(this.theme).map(function (key) { return _this.setStyle(key, _this.theme[key]); });
    };
    ThemeService.prototype.setStyle = function (property, value) {
        var html = document.getElementsByTagName('html')[0];
        this.theme[property] = value;
        html.style.setProperty(property, value);
    };
    return ThemeService;
}());
ThemeService.decorators = [
    { type: core.Injectable, args: [{
                providedIn: 'root'
            },] },
];
ThemeService.ctorParameters = function () { return []; };
ThemeService.ngInjectableDef = core.defineInjectable({ factory: function ThemeService_Factory() { return new ThemeService(); }, token: ThemeService, providedIn: "root" });
var mockdataTable = require('./datatable_data.json');
var ThemeManagerComponent = /** @class */ (function () {
    function ThemeManagerComponent(themeService, common$$1) {
        this.themeService = themeService;
        this.common = common$$1;
        this.mockData = mockdataTable;
        this.variables = [];
        this.currentTheme = '';
    }
    ThemeManagerComponent.prototype.ngOnInit = function () {
        this.variables = Object.keys(this.themeService.theme);
    };
    ThemeManagerComponent.prototype.changeTheme = function (theme) {
        var selectedTheme = this.themeService.themes.filter(function (_theme) { return _theme.name === theme; })[0];
        this.currentTheme = selectedTheme.name;
        this.themeService.reload(selectedTheme.theme);
    };
    ThemeManagerComponent.prototype.difference = function () {
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
    ThemeManagerComponent.prototype.changeStyle = function (variable, style$$1) {
        this.themeService.setStyle(variable, style$$1);
    };
    ThemeManagerComponent.prototype.export = function () {
        console.log('hey');
        var link = this.exportButton.nativeElement;
        link.download = this.exportInput.nativeElement.value + '.json' || 'theme.json';
        var data = 'text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.difference()));
        link.href = 'data:' + data;
    };
    ThemeManagerComponent.prototype.getTheme = function () {
        return encodeURIComponent(JSON.stringify(this.themeService.theme));
    };
    return ThemeManagerComponent;
}());
ThemeManagerComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'app-theme-manager',
                template: "<div id=\"theme-manager\">\n  <clt-panel *ngIf=\"difference()\" header=\"Export\" [toggleable]=\"true\" [collapsed]=\"true\">\n    <label>Nom du theme</label>\n    <input type=\"text\" [value]=\"currentTheme || 'default'\" #exportInput>\n    <a href=\"#\" #exportButton>\n      <button class='btn btn-primary' (click)='export()'>\n        T\u00E9l\u00E9charger le theme\n      </button>\n    </a>\n    <button class='btn btn-primary' (click)='jsonPopup.open()'>\n      Voir le theme\n    </button>\n  </clt-panel>\n\n  <clt-panel header=\"Gestionnaire de theme\" [toggleable]=\"true\" [collapsed]=\"true\">\n    <h3>Selection</h3>\n    <select name=\"theme\" id=\"theme\" (change)=\"changeTheme($event.target.value)\" #selectedTheme>\n      <option *ngFor=\"let theme of themeService.themes\" [value]=\"theme.name\">{{theme.name}}</option>\n    </select>\n  </clt-panel>\n\n  <clt-panel header=\"Gestionnaire de style\" [toggleable]=\"true\" [collapsed]=\"true\">\n    <div>Gestionnaire de style</div>\n    <div class=\"themeChanger-list\">\n      <div class=\"themeChanger-color\">\n        <h3>Header</h3>\n        <ng-container *ngFor=\"let variable of variables\">\n          <ul>\n            <li *ngIf=\"variable.includes('header')\">\n              <label>{{variable}}</label>\n              <div>\n                <div *ngIf=\"variable.includes('Color')\" [(colorPicker)]=\"themeService.theme[variable]\" (colorPickerChange)=\"themeService.setStyle(variable, $event)\"\n                  class='colorPicker' [ngStyle]=\"{'background-color':themeService.theme[variable] }\">\n                </div>\n                <input *ngIf=\"!variable.includes('Color')\" [value]='themeService.theme[variable]' (change)=\"themeService.setStyle(variable, $event.target.value)\"\n                />\n              </div>\n            </li>\n          </ul>\n        </ng-container>\n        <h3>Content</h3>\n        <ng-container *ngFor=\"let variable of variables\">\n          <ul>\n            <li *ngIf=\"variable.includes('content')\">\n              <label>{{variable}}</label>\n              <div>\n                <div *ngIf=\"variable.includes('Color')\" [(colorPicker)]=\"themeService.theme[variable]\" (colorPickerChange)=\"themeService.setStyle(variable, $event)\"\n                  class='colorPicker' [ngStyle]=\"{'background-color':themeService.theme[variable] }\">\n                </div>\n                <input *ngIf=\"!variable.includes('Color')\" [value]='themeService.theme[variable]' (change)=\"themeService.setStyle(variable, $event.target.value)\"\n                />\n              </div>\n            </li>\n          </ul>\n        </ng-container>\n        <h3>State Default</h3>\n        <ng-container *ngFor=\"let variable of variables\">\n          <ul>\n            <li *ngIf=\"variable.includes('stateDefault')\">\n              <label>{{variable}}</label>\n              <div>\n                <div *ngIf=\"variable.includes('Color')\" [(colorPicker)]=\"themeService.theme[variable]\" (colorPickerChange)=\"themeService.setStyle(variable, $event)\"\n                  class='colorPicker' [ngStyle]=\"{'background-color':themeService.theme[variable] }\">\n                </div>\n                <input *ngIf=\"!variable.includes('Color')\" [value]='themeService.theme[variable]' (change)=\"themeService.setStyle(variable, $event.target.value)\"\n                />\n              </div>\n            </li>\n          </ul>\n        </ng-container>\n        <h3>State Active</h3>\n        <ng-container *ngFor=\"let variable of variables\">\n          <ul>\n            <li *ngIf=\"variable.includes('stateActive')\">\n              <label>{{variable}}</label>\n              <div>\n                <div *ngIf=\"variable.includes('Color')\" [(colorPicker)]=\"themeService.theme[variable]\" (colorPickerChange)=\"themeService.setStyle(variable, $event)\"\n                  class='colorPicker' [ngStyle]=\"{'background-color':themeService.theme[variable] }\">\n                </div>\n                <input *ngIf=\"!variable.includes('Color')\" [value]='themeService.theme[variable]' (change)=\"themeService.setStyle(variable, $event.target.value)\"\n                />\n              </div>\n            </li>\n          </ul>\n        </ng-container>\n        <h3>State Highlight</h3>\n        <ng-container *ngFor=\"let variable of variables\">\n          <ul>\n            <li *ngIf=\"variable.includes('stateHighlight')\">\n              <label>{{variable}}</label>\n              <div>\n                <div *ngIf=\"variable.includes('Color')\" [(colorPicker)]=\"themeService.theme[variable]\" (colorPickerChange)=\"themeService.setStyle(variable, $event)\"\n                  class='colorPicker' [ngStyle]=\"{'background-color':themeService.theme[variable] }\">\n                </div>\n                <input *ngIf=\"!variable.includes('Color')\" [value]='themeService.theme[variable]' (change)=\"themeService.setStyle(variable, $event.target.value)\"\n                />\n              </div>\n            </li>\n          </ul>\n        </ng-container>\n        <h3>State Focus</h3>\n        <ng-container *ngFor=\"let variable of variables\">\n          <ul>\n            <li *ngIf=\"variable.includes('stateFocus')\">\n              <label>{{variable}}</label>\n              <div>\n                <div *ngIf=\"variable.includes('Color')\" [(colorPicker)]=\"themeService.theme[variable]\" (colorPickerChange)=\"changeStyle(variable, $event)\"\n                  class='colorPicker' [ngStyle]=\"{'background-color':themeService.theme[variable] }\">\n                </div>\n                <input *ngIf=\"!variable.includes('Color')\" [value]='themeService.theme[variable]' (change)=\"changeStyle(variable, $event.target.value)\"\n                />\n              </div>\n            </li>\n          </ul>\n        </ng-container>\n        <h3>State Error</h3>\n        <ng-container *ngFor=\"let variable of variables\">\n          <ul>\n            <li *ngIf=\"variable.includes('stateError')\">\n              <label>{{variable}}</label>\n              <div>\n                <div *ngIf=\"variable.includes('Color')\" [(colorPicker)]=\"themeService.theme[variable]\" (colorPickerChange)=\"themeService.setStyle(variable, $event)\"\n                  class='colorPicker' [ngStyle]=\"{'background-color':themeService.theme[variable] }\">\n                </div>\n                <input *ngIf=\"!variable.includes('Color')\" [value]='themeService.theme[variable]' (change)=\"themeService.setStyle(variable, $event.target.value)\"\n                />\n              </div>\n            </li>\n          </ul>\n        </ng-container>\n        <h3>State Hover</h3>\n        <ng-container *ngFor=\"let variable of variables\">\n          <ul>\n            <li *ngIf=\"variable.includes('stateHover')\">\n              <label>{{variable}}</label>\n              <div>\n                <div *ngIf=\"variable.includes('Color')\" [(colorPicker)]=\"themeService.theme[variable]\" (colorPickerChange)=\"themeService.setStyle(variable, $event)\"\n                  class='colorPicker' [ngStyle]=\"{'background-color':themeService.theme[variable] }\">\n                </div>\n                <input *ngIf=\"!variable.includes('Color')\" [value]='themeService.theme[variable]' (change)=\"themeService.setStyle(variable, $event.target.value)\"\n                />\n              </div>\n            </li>\n          </ul>\n        </ng-container>\n      </div>\n    </div>\n  </clt-panel>\n</div>\n\n<popup title='Json' [body]=\"difference() | json\" #jsonPopup></popup>\n",
                styles: ["#theme-manager{height:95%;max-width:450px;-ms-flex-negative:0;flex-shrink:0}#theme-manager h2{margin-top:.5em}#theme-manager label{margin:0}#theme-manager .colorPicker{width:25px;height:25px;border:1px solid #000}#theme-manager li{border-bottom:1px solid #a9a9a9;padding:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}#theme-manager li>div{width:40%}#theme-manager li input{width:100%}#theme-manager .preview{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;margin-left:10px}"]
            },] },
];
ThemeManagerComponent.ctorParameters = function () { return [
    { type: ThemeService, },
    { type: CltCommonService, },
]; };
ThemeManagerComponent.propDecorators = {
    "exportButton": [{ type: core.ViewChild, args: ['exportButton',] },],
    "exportInput": [{ type: core.ViewChild, args: ['exportInput',] },],
};
var ThemeModule = /** @class */ (function () {
    function ThemeModule() {
    }
    ThemeModule.forRoot = function () {
        return {
            ngModule: ThemeModule,
            providers: [
                ThemeService
            ]
        };
    };
    return ThemeModule;
}());
ThemeModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule,
                    ngxColorPicker.ColorPickerModule,
                    CltContainersModule,
                    CltOverlayModule.forRoot()
                ],
                declarations: [ThemeManagerComponent],
                exports: [ThemeManagerComponent, router.RouterModule]
            },] },
];

exports.CltBoxComponent = CltBoxComponent;
exports.CltContainersModule = CltContainersModule;
exports.CltPanelComponent = CltPanelComponent;
exports.CltCoreModule = CltCoreModule;
exports.CltSpinningIconDirective = CltSpinningIconDirective;
exports.CltClickStopPropagationDirective = CltClickStopPropagationDirective;
exports.CltToId = CltToId;
exports.CltPopoverComponent = CltPopoverComponent;
exports.CltCommonService = CltCommonService;
exports.CltDisplayItemDirective = CltDisplayItemDirective;
exports.CltDisplayComponent = CltDisplayComponent;
exports.CltDisplayModule = CltDisplayModule;
exports.CltDebounceInputDirective = CltDebounceInputDirective;
exports.CltShowPasswordDirective = CltShowPasswordDirective;
exports.CltValidatorsDirective = CltValidatorsDirective;
exports.CltFormErrorsComponent = CltFormErrorsComponent;
exports.CltFormsModule = CltFormsModule;
exports.CltPassword = CltPassword;
exports.CltMapLayerComponent = CltMapLayerComponent;
exports.CltMapComponent = CltMapComponent;
exports.MapModule = MapModule;
exports.MapService = MapService;
exports.CltNavbarComponent = CltNavbarComponent;
exports.CltNavigationsModule = CltNavigationsModule;
exports.CltSideBarService = CltSideBarService;
exports.CltSidebarComponent = CltSidebarComponent;
exports.CltNotificationsComponent = CltNotificationsComponent;
exports.CltOverlayModule = CltOverlayModule;
exports.BodyDirective = BodyDirective;
exports.PopupComponent = PopupComponent;
exports.CltNotificationsService = CltNotificationsService;
exports.CltSidePanelComponent = CltSidePanelComponent;
exports.ThemeService = ThemeService;
exports.ThemeManagerComponent = ThemeManagerComponent;
exports.ThemeModule = ThemeModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-callisto.umd.js.map
