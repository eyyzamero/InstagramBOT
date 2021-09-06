import { Component } from '@angular/core';
import { TaskFollowFromHashtagModel, TaskFollowTopAccountsFromPolandModel } from './models';
import { TasksQueueService } from './services/regular/tasks-queue.service';

@Component({
	selector: 'app-tasks-queue',
	templateUrl: './tasks-queue.component.html',
	styleUrls: ['./tasks-queue.component.less']
})

export class TasksQueueComponent {

	constructor(
		private _tasksQueueService: TasksQueueService
	) {
		this.executeTasks();
	}

	executeTasks() {
		this._tasksQueueService.addToQueue(new TaskFollowFromHashtagModel());
		this._tasksQueueService.addToQueue(new TaskFollowTopAccountsFromPolandModel());
		this._tasksQueueService.addToQueue(new TaskFollowFromHashtagModel());

		this._tasksQueueService.executeTasksFromQueue();
	}
}
