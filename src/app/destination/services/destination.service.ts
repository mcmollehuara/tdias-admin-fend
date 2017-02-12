import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class DestinationService {
    constructor(private http: Http, private slimLoadingBarService: SlimLoadingBarService) {
    }

    getOrigins(): Promise<any> {
        let url = "http://turismodias.gebscorp.com:5100/cst/ticket/rutaviaje/origen";
        return this.http.get(url).map(resp => {
            return resp.json();
        }).toPromise();
    }
}