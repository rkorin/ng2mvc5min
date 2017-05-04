import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebApiService } from './base.service';

let all_providers = [
    WebApiService
];

@NgModule({
    imports: [],
    providers: all_providers,
    declarations: []
})
export class WebApiModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{
            ngModule: WebApiModule,
            providers: all_providers,
        };
    }
}