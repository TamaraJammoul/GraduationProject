"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PagingComponent = void 0;
/* eslint-disable @angular-eslint/no-output-on-prefix */
var core_1 = require("@angular/core");
var PagingComponent = /** @class */ (function () {
    function PagingComponent() {
        this.onNewPageRequested = new core_1.EventEmitter();
    }
    PagingComponent.prototype.goToPage = function (pageUrl) {
        this.onNewPageRequested.emit(pageUrl);
        //this.pagingActionFn(pageUrl);
    };
    __decorate([
        core_1.Input()
    ], PagingComponent.prototype, "previousPage");
    __decorate([
        core_1.Input()
    ], PagingComponent.prototype, "nextPage");
    __decorate([
        core_1.Output()
    ], PagingComponent.prototype, "onNewPageRequested");
    __decorate([
        core_1.Input()
    ], PagingComponent.prototype, "pagingActionFn");
    PagingComponent = __decorate([
        core_1.Component({
            selector: 'app-paging',
            templateUrl: './paging.component.html',
            styleUrls: ['./paging.component.scss'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], PagingComponent);
    return PagingComponent;
}());
exports.PagingComponent = PagingComponent;
