import * as _ from "lodash";
import { Subject } from 'rxjs';
import { HttpMapperService } from "../../mapper";
import { BaseObservableService } from './base-observable.service';

export abstract class BaseSubjectObservableService<T> extends BaseObservableService<T> {

  	constructor(
		clearObject: T,
		protected httpMapperService: HttpMapperService
	) {
		super(clearObject, httpMapperService);
	}

	initSubject() {
		this.subject = new Subject();
		this.observable = this.subject.asObservable();
	}
}
