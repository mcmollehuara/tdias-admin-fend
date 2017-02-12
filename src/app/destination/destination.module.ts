import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DestinationRoutes } from './destination.routes';
import { DestinationService } from './services/destination.service';
import { DestinationComponent } from './destination.component';

@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule, DestinationRoutes],
    exports: [],
    declarations: [
        DestinationComponent
    ],
    providers: [DestinationService]
})
export class DestinationModule { }
