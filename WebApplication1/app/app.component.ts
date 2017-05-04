import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    template: `app-b 

<router-outlet></router-outlet>

app-end
`
})
export class AppComponent { }