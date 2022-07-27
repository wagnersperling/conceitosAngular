import { BarService } from './bar.service';
import { BarComponent } from './bar.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
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
export class BarModule {}