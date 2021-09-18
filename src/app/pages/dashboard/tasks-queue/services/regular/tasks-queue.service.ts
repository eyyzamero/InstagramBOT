import { Injectable, OnDestroy } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { TaskCommunicationService } from 'src/app/core/services/communication';
import { TaskType } from '../../enums';
import { ITaskModel, TaskModel } from '../../models';
import { TasksQueueObservableService } from '../communication/tasks-queue-observable.service';

@Injectable({
	providedIn: 'root'
})

export class TasksQueueService implements OnDestroy {

	private _itemsInQueue: Array<ITaskModel> = new Array<ITaskModel>();
	private _runningTaskInterval!: Subscription;

	private readonly TIME_BETWEEN_TASKS = 120 * 60 * 1000;

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
					this._stopExecutingTasks();

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

	executeTasksFromQueue(loop: boolean) {
		this._runningTaskInterval = timer(0, this.TIME_BETWEEN_TASKS).subscribe(value => {
			let task = loop ? this.items[value % this.items.length] : this.items[value];
			this._executeTask(task, loop);
		});
	}

	private _executeTask(task: ITaskModel, loop: boolean) {
		this._taskCommunicationService.executeTask(task.type, task.req);

		if (loop) {
			task.executed = true;

			if (!this.items.filter(x => !x.executed).length) {
				this._stopExecutingTasks();
				this._tasksQueueObservableService.clear();
			}
		}
	}

	private _stopExecutingTasks() {
		this._runningTaskInterval.unsubscribe();
	}

	ngOnDestroy() {
		if (this._runningTaskInterval)
			this._runningTaskInterval.unsubscribe();
	}
}
