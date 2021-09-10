import { Injectable } from '@angular/core';
import { HttpMapperService } from 'src/app/core/services/mapper';
import { BaseBehaviorSubjectObservableService } from 'src/app/core/services/observable/base/base-behavior-subject-observable.service';
import { ITaskModel } from '../../models';

@Injectable({
	providedIn: 'root'
})

export class TasksQueueObservableService extends BaseBehaviorSubjectObservableService<Array<ITaskModel>> {

	constructor(httpMapperService: HttpMapperService) {
		super(new Array<ITaskModel>(), httpMapperService);
	}

	addTaskToQueue(item: ITaskModel) {
		this.observableSubject.data.push(item);
		this.next();
	}

	removeTaskFromQueue(item: ITaskModel) {
		let index = this.observableSubject.data.indexOf(item);
		this.observableSubject.data.splice(index, 1);
		this.next();
	}
}
