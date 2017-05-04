"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var base_service_1 = require("./base.service");
var all_providers = [
    base_service_1.WebApiService
];
var WebApiModule = WebApiModule_1 = (function () {
    function WebApiModule() {
    }
    WebApiModule.forRoot = function () {
        return {
            ngModule: WebApiModule_1,
            providers: all_providers,
        };
    };
    return WebApiModule;
}());
WebApiModule = WebApiModule_1 = __decorate([
    core_1.NgModule({
        imports: [],
        providers: all_providers,
        declarations: []
    })
], WebApiModule);
exports.WebApiModule = WebApiModule;
var WebApiModule_1;
//# sourceMappingURL=WebApiModule.js.map