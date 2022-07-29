import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from './bar.config';
import { BarService } from './bar.service';
import { BarComponent } from './bar.component';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from "@angular/core";
//import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        //HttpClientModule
    ],
    declarations: [
        BarComponent
    ],
    exports: [
        BarComponent
    ],
    providers: [
        //BarService
    ]
})
export class BarModule {
    static forRoot(config: BarUnidadeConfig) : ModuleWithProviders {
        return {
            ngModule: BarModule,
            providers: [
                {provide: 'ConfigManualUnidade' , useValue: config},
                {provide: BAR_UNIDADE_CONFIG , useValue: config}
            ]
        }
    }

    static forChild(){

    }

}