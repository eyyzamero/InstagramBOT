import { Injectable, OnDestroy } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { TaskCommunicationService } from 'src/app/core/services/communication';
import { environment } from 'src/environments/environment';
import { TaskType } from '../../enums';
import { ITaskModel, TaskModel } from '../../models';
import { TasksQueueObservableService } from '../communication/tasks-queue-observable.service';

@Injectable({
	providedIn: 'root'
})

export class TasksQueueService implements OnDestroy {

	private _itemsInQueue: Array<ITaskModel> = new Array<ITaskModel>();
	private _runningTaskInterval!: Subscription;

	get items() {
		return this._itemsInQueue;
	}

	constructor(
		private _tasksQueueObservableService: TasksQueueObservableService,
		private _taskCommunicationService: TaskCommunicationService
	) {
		this._initObservables();
	}

	private _initObservables() {
		this._tasksQueueObservableService.observable.subscribe(
			value => {
				if (!value.data)
					this.stopExecutingTasks();

				this._itemsInQueue = value.data;
			}
		);
	}

	addToQueue(type: TaskType, req: object | null) {
		let task = new TaskModel(type, req);
		this._tasksQueueObservableService.addTaskToQueue(task);
	}

	removeFromQueue(item: ITaskModel) {
		this._tasksQueueObservableService.removeTaskFromQueue(item);
	}

	executeTasksFromQueue() {
		this._runningTaskInterval = timer(0, environment.maxActions).subscribe(value => {
			let task = this._itemsInQueue[value];
			this._taskCommunicationService.executeTask(task.type, task.req);

			this._itemsInQueue[value].executed = true;
			console.log(`${value + 1} Task ${task.type} executed`);

			if (!this.items.filter(x => !x.executed).length)
				this.stopExecutingTasks();
		});
	}

	stopExecutingTasks() {
		this._runningTaskInterval.unsubscribe();
	}

	ngOnDestroy() {
		this._runningTaskInterval.unsubscribe();
	}
}
