import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineDemoRoutingModule } from './timelinedemo-routing.module';
import { TimelineDemoComponent } from './timelinedemo.component';
import { TimelineModule } from 'primeng/timeline';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@NgModule({
    declarations: [
        TimelineDemoComponent
    ],
    imports: [
        CommonModule,
        TimelineDemoRoutingModule,
        TimelineModule,
        ButtonModule,
        CardModule
    ]
})
export class TimelineDemoModule { }