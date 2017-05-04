"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var all_providers = new Array();
var ServicesModule = ServicesModule_1 = (function () {
    function ServicesModule() {
    }
    ServicesModule.forRoot = function () {
        return {
            ngModule: ServicesModule_1,
            providers: all_providers,
        };
    };
    return ServicesModule;
}());
ServicesModule = ServicesModule_1 = __decorate([
    core_1.NgModule({
        imports: [],
        providers: all_providers,
        declarations: []
    })
], ServicesModule);
exports.ServicesModule = ServicesModule;
var ServicesModule_1;
//# sourceMappingURL=ServicesModule.js.map