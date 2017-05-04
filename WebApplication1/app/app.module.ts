import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routing } from './app.routing';

import { Pages} from './pages/pages.component';
import { Dashboard } from './pages/dashboard/dashboard.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule,
        routing],
    declarations: [AppComponent, Pages, Dashboard],
    bootstrap: [AppComponent]
})
export class AppModule { }