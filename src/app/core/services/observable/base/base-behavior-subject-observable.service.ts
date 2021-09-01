import * as _ from 'lodash';
import { BaseObservableService } from './base-observable.service';
import { BehaviorSubject } from 'rxjs';
import { HttpMapperService } from '../../mapper';

export abstract class BaseBehaviorSubjectObservableService<T> extends BaseObservableService<T> {

    constructor(clearObject: T, protected httpMapperService: HttpMapperService) {
        super(clearObject, httpMapperService);
    }

    initSubject() {
        this.subject = new BehaviorSubject(this.observableSubject);
        this.observable = this.subject.asObservable();
    }
}
