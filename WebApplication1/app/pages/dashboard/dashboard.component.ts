import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'dashboard',
    encapsulation: ViewEncapsulation.None,
    styles: ['./dashboard.scss'],
    templateUrl: '/app/pages/dashboard/dashboard.html'
})
export class Dashboard {

    constructor() {
    }

}
