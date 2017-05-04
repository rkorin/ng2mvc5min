import {Component, ViewEncapsulation, Input, EventEmitter} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'pages',
    encapsulation: ViewEncapsulation.None,
    styles: [],
    template: `      
    <div class='container'>
<div class='row'>
pages-header
</div>
      <div class='row'>        
        <router-outlet></router-outlet>
      </div>
<div class='row'>
pages-footer
</div>
    </div>  
    `
})
export class Pages {
    constructor() {
    }
}
