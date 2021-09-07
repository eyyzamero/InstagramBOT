import { Component } from '@angular/core';
import { TaskType } from './enums';
import { TaskModel } from './models';
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
		this._tasksQueueService.addToQueue(new TaskModel(TaskType.FOLLOW_FROM_HASHTAG));
		this._tasksQueueService.addToQueue(new TaskModel(TaskType.FOLLOW_TOP_ACCOUNTS_FROM_POLAND));
		this._tasksQueueService.addToQueue(new TaskModel(TaskType.FOLLOW_FROM_HASHTAG));

		this._tasksQueueService.executeTasksFromQueue();
	}
}
