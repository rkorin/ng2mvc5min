"use strict";
const router_1 = require('@angular/router');
const dashboard_component_1 = require('./dashboard.component');
// noinspection TypeScriptValidateTypes
const routes = [
    {
        path: '',
        component: dashboard_component_1.Dashboard,
        children: []
    }
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=dashboard.routing.js.map