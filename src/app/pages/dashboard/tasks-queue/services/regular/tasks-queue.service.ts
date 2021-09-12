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
		let xd = this.randomInteger(75, 90) * 60 * 1000;
		this._runningTaskInterval = timer(0, 5 * 1000).subscribe(value => {
			let task = this.items[value];
			this._taskCommunicationService.executeTask(task.type, task.req);

			this.items[value].executed = true;
			console.log(`${value + 1} Task ${task.type} executed`);

			if (!this.items.filter(x => !x.executed).length) {
				this.stopExecutingTasks();
				this._tasksQueueObservableService.clear();
			}
		});
	}

	randomInteger(min: number, max: number) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	stopExecutingTasks() {
		this._runningTaskInterval.unsubscribe();
	}

	ngOnDestroy() {
		this._runningTaskInterval.unsubscribe();
	}
}
