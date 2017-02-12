import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DestinationRoute } from './dashboard.route';

import { DashboardService } from './services/dashboard.service';
import { DashboardComponent } from './dashboard.component';
import { BuildComponent } from './components/build/build.component';
import { FunctionalTestComponent } from './components/functional-test/functional-test.component';
import { MetricComponent } from './components/metric/metric.component';
import { UnitTestComponent } from './components/unit-test/unit-test.component';
import { ResultComponent } from './components/result/result.component';

import { ChartsCommonComponent } from './../shared/components/charts/charts.common.component';

@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule, DestinationRoute],
    exports: [],
    declarations: [
        DashboardComponent, BuildComponent, FunctionalTestComponent, MetricComponent, UnitTestComponent,
        ChartsCommonComponent, ResultComponent
    ],
    providers: [DashboardService]
})
export class DashboardModule { 
}
