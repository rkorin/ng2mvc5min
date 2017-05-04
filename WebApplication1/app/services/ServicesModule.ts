import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';


let all_providers = [
];

@NgModule({
    imports: [],
    providers: all_providers,
    declarations: []
})
export class ServicesModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{
            ngModule: ServicesModule,
            providers: all_providers,
        };
    }
}