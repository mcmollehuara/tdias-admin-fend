import { Component, OnInit, ViewEncapsulation, ViewContainerRef } from '@angular/core';
import { DestinationService } from './services/destination.service'
import { Subject } from 'rxjs/Subject';
import { Process } from './model/process.model';

@Component({
    moduleId: module.id.toString(),
    selector: 'destination',
    templateUrl: 'destination.component.html',
    providers: [DestinationService]

})
export class DestinationComponent implements OnInit {

    origins = new Array<any>();
    constructor(private services: DestinationService) {

    }

    ngOnInit(): void {
        // this.services.getOrigins().then(data => {
        //     this.origins = data;
        // });
    }   
}
