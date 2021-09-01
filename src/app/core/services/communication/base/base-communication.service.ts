import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  	providedIn: 'root'
})

export abstract class BaseCommunicationService {

    protected cancelPendingRequests$ = new Subject<void>();
    protected cancelPendingObservable: Observable<void>;

    protected httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.cancelPendingObservable = this.cancelPendingRequests$.asObservable();
        this.httpClient = httpClient;
    }
}
