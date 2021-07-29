"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var core_actions_1 = require("@core/store/core.actions");
var reference_data_actions_1 = require("@libs/reference-data/store/reference-data.actions");
var AppComponent = /** @class */ (function () {
    function AppComponent(authService, store) {
        this.authService = authService;
        this.store = store;
        this.sideContentOpened = false;
        this.doesShowSideNav = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.configure(function () { return _this.store.dispatch(core_actions_1.coreActions.initiateAuthentication()); }, function () { return _this.store.dispatch(core_actions_1.coreActions.validateOidcCallback()); });
        // Dispatch all reference data actions on init
        for (var _i = 0, _a = Object.entries(reference_data_actions_1.referenceDataActions); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (key.indexOf('Success') === -1 && key !== 'fetchBrandsReferenceList') {
                this.store.dispatch(value());
            }
        }
    };
    AppComponent.prototype.toggleSideContent = function () {
        this.sideContentOpened = !this.sideContentOpened;
    };
    AppComponent.prototype.onMenuRouteChanged = function (doesShowSideNav) {
        this.doesShowSideNav = doesShowSideNav;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
