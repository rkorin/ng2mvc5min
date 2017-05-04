"use strict";
const router_1 = require('@angular/router');
const pages_component_1 = require('./pages.component');
const routes = [
    {
        path: '',
        component: pages_component_1.Pages,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' }
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=pages.routing.js.map