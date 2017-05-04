import { Routes, RouterModule } from '@angular/router';

import { Pages} from './pages/pages.component';
import { Dashboard } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', redirectTo: 'pages', pathMatch: 'full' },
    {
        path: 'pages',
        component: Pages,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: Dashboard }
        ]
    },
    { path: '**', redirectTo: 'pages/dashboard' }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
