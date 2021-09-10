import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TaskType } from './enums';
import { ITaskModel } from './models';
import { TasksQueueObservableService } from './services/communication/tasks-queue-observable.service';
import { TasksQueueService } from './services/regular/tasks-queue.service';

@Component({
	selector: 'app-tasks-queue',
	templateUrl: './tasks-queue.component.html',
	styleUrls: ['./tasks-queue.component.less']
})

export class TasksQueueComponent implements OnDestroy {

	tasksInQueue: Array<ITaskModel> = new Array<ITaskModel>();

	TaskType = TaskType;

	private _tasksInQueueSubscription!: Subscription;

	constructor(
		private _tasksQueueService: TasksQueueService,
		private _tasksQueueObservableService: TasksQueueObservableService
	) {
		this._initObservables();
	}

	private _initObservables() {
		this._tasksInQueueSubscription = this._tasksQueueObservableService.observable.subscribe(
			value => this.tasksInQueue = value.data
		);
	}

	executeTasks() {
		this._tasksQueueService.executeTasksFromQueue();
	}

	ngOnDestroy() {
		this._tasksInQueueSubscription.unsubscribe();
	}
}
