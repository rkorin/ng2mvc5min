import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'dashboard',
  encapsulation: ViewEncapsulation.None,
  styles: ['./dashboard.scss'],
  template: `<div class="col-md-12">
dashboard component
</div>`
})
export class Dashboard {

  constructor() {
  }

}
