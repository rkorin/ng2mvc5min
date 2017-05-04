"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseWebApiModel = (function () {
    function BaseWebApiModel(id) {
        if (id === void 0) { id = ''; }
        this.id = id;
        this.id = this.id || this.newGuid();
    }
    BaseWebApiModel.prototype.newGuid = function () {
        var S4 = function () { return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1); };
        return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0, 3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
    };
    return BaseWebApiModel;
}());
exports.BaseWebApiModel = BaseWebApiModel;
//# sourceMappingURL=base.model.js.map