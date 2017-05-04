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
let all_providers = [];
let ServicesModule_1;
let ServicesModule = ServicesModule_1 = class ServicesModule {
    static forRoot() {
        return {
            ngModule: ServicesModule_1,
            providers: all_providers,
        };
    }
};
ServicesModule = ServicesModule_1 = __decorate([
    core_1.NgModule({
        imports: [],
        providers: all_providers,
        declarations: []
    }), 
    __metadata('design:paramtypes', [])
], ServicesModule);
exports.ServicesModule = ServicesModule;
//# sourceMappingURL=ServicesModule.js.map