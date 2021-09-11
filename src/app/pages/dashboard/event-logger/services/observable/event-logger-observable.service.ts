import { Injectable } from '@angular/core';
import { ILogModel } from 'src/app/core/models/interfaces';
import { HttpMapperService } from 'src/app/core/services/mapper';
import { BaseBehaviorSubjectObservableService } from 'src/app/core/services/observable/base/base-behavior-subject-observable.service';

@Injectable({
	providedIn: 'root'
})

export class EventLoggerObservableService extends BaseBehaviorSubjectObservableService<Array<ILogModel>> {

	constructor(httpMapperService: HttpMapperService) {
		super(new Array<ILogModel>(), httpMapperService);
	}

	addLog(data: ILogModel) {
		this.observableSubject.data.push(data);
	}
}
