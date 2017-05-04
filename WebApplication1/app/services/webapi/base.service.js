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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var http_1 = require("@angular/http");
// Statics
require("rxjs/add/observable/throw");
// Operators
require("rxjs/add/operator/catch");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
require("rxjs/add/operator/map");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/share");
var WebApiService = (function () {
    function WebApiService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:3979/api/';
        this.controller = 'auth';
    }
    WebApiService.prototype.getGuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    WebApiService.prototype.buildOptions = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return new http_1.RequestOptions({ headers: headers });
    };
    WebApiService.prototype.getCommon = function (id) {
        var options = this.buildOptions();
        var url = this.baseUrl + this.controller;
        if (id)
            url += '/' + id;
        return this.http.get(url, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    WebApiService.prototype.get_observable = function () {
        return this.getCommon(null);
    };
    WebApiService.prototype.getById_observable = function (id) {
        return this.getCommon(id);
    };
    WebApiService.prototype.put_observable = function (id, data) {
        var options = this.buildOptions();
        var url = this.baseUrl + this.controller;
        if (id)
            url += '/' + id;
        return this.http.put(url, data, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    WebApiService.prototype.post_observable = function (data) {
        var options = this.buildOptions();
        return this.http.post(this.baseUrl + this.controller, data, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    WebApiService.prototype.post_any = function (data) {
        var options = this.buildOptions();
        return this.http.post(this.baseUrl + this.controller, data, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    WebApiService.prototype.delete_observable = function (id) {
        var options = this.buildOptions();
        var url = this.baseUrl + this.controller;
        if (id)
            url += '/' + id;
        return this.http.delete(url, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    WebApiService.prototype.extractData = function (res) {
        var body = res.json() || {};
        return body.data || body || {};
    };
    WebApiService.prototype.handleError = function (error) {
        debugger;
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    WebApiService.prototype.List = function () {
        return this.get_observable();
    };
    WebApiService.prototype.Item = function (id) {
        return this.getById_observable(id);
    };
    WebApiService.prototype.Set = function (item) {
        return this.post_observable(item);
    };
    return WebApiService;
}());
WebApiService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], WebApiService);
exports.WebApiService = WebApiService;
//# sourceMappingURL=base.service.js.map