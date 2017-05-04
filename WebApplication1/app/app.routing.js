"use strict";
const router_1 = require('@angular/router');
const pages_component_1 = require('./pages/pages.component');
const dashboard_component_1 = require('./pages/dashboard/dashboard.component');
exports.routes = [
    { path: '', redirectTo: 'pages', pathMatch: 'full' },
    {
        path: 'pages',
        component: pages_component_1.Pages,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: dashboard_component_1.Dashboard }
        ]
    },
    { path: '**', redirectTo: 'pages/dashboard' }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes, { useHash: true });
//# sourceMappingURL=app.routing.js.map