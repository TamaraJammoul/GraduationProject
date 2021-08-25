"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CardImagePlaceholderDirective = void 0;
var core_1 = require("@angular/core");
var base_component_1 = require("../base-component/base-component");
var CardImagePlaceholderDirective = /** @class */ (function (_super) {
    __extends(CardImagePlaceholderDirective, _super);
    function CardImagePlaceholderDirective(element, sanitizer) {
        var _this = _super.call(this) || this;
        _this.element = element;
        _this.sanitizer = sanitizer;
        _this.appCardImagePlaceHolder = '';
        return _this;
    }
    CardImagePlaceholderDirective.prototype.ngOnInit = function () {
        if (this.isEmpty(this.appCardImagePlaceHolder)) {
            this.backgroundImage = this.sanitizer.bypassSecurityTrustStyle('url(/assets/images/placeholder-logo.svg)');
            this.element.nativeElement.classList.add('card-image-placeholder');
        }
        else {
            this.backgroundImage = this.sanitizer.bypassSecurityTrustStyle('url(' + this.appCardImagePlaceHolder + ')');
            this.element.nativeElement.classList.add('card-image');
        }
    };
    __decorate([
        core_1.Input()
    ], CardImagePlaceholderDirective.prototype, "appCardImagePlaceHolder");
    __decorate([
        core_1.HostBinding('style.background-image')
    ], CardImagePlaceholderDirective.prototype, "backgroundImage");
    CardImagePlaceholderDirective = __decorate([
        core_1.Directive({
            selector: '[appCardImagePlaceHolder]'
        })
    ], CardImagePlaceholderDirective);
    return CardImagePlaceholderDirective;
}(base_component_1.BaseComponent));
exports.CardImagePlaceholderDirective = CardImagePlaceholderDirective;
