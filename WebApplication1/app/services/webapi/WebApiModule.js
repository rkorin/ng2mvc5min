"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const _1 = require('./');
let all_providers = [
    _1.WebApiService
];
let WebApiModule_1;
let WebApiModule = WebApiModule_1 = class WebApiModule {
    static forRoot() {
        return {
            ngModule: WebApiModule_1,
            providers: all_providers,
        };
    }
};
WebApiModule = WebApiModule_1 = __decorate([
    core_1.NgModule({
        imports: [],
        providers: all_providers,
        declarations: []
    }), 
    __metadata('design:paramtypes', [])
], WebApiModule);
exports.WebApiModule = WebApiModule;
//# sourceMappingURL=WebApiModule.js.map