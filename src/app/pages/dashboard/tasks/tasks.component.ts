import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FollowFromHashtagReq, FollowNewIncomersThenFollowTopAccountsReq, FollowTopAccountsFromPolandReq } from 'src/app/core/contracts';
import { environment } from 'src/environments/environment';
import { TaskType } from '../tasks-queue/enums';
import { TasksQueueService } from '../tasks-queue/services/regular/tasks-queue.service';

@Component({
	selector: 'app-tasks',
	templateUrl: './tasks.component.html',
	styleUrls: ['./tasks.component.less']
})

export class TasksComponent {

	taskFormGroup: FormGroup = new FormGroup({});
	TaskType = TaskType;

	constructor(
		private _tasksQueueService: TasksQueueService
	) {
		this._initForm();
	}

	get taskFormGroupControls() {
		return this.taskFormGroup.controls;
	}

	private _initForm() {
		this.taskFormGroup = new FormGroup({
			type: new FormControl(TaskType.FOLLOW_FROM_HASHTAG, [
				Validators.required
			]),
			numberOfAccounts: new FormControl(1, [
				Validators.required,
				Validators.min(1),
				Validators.max(environment.maxActions)
			])
		});
	}

	sendTaskForm() {
		if (this.taskFormGroup.valid) {
			switch(this.taskFormGroupControls.type.value as TaskType) {
				case TaskType.FOLLOW_FROM_HASHTAG:
					this._addFollowFromHashtagTask();
					break;
				case TaskType.FOLLOW_TOP_ACCOUNTS_FROM_POLAND:
					this._addFollowTopAccountsFromPoland();
					break;
				case TaskType.FOLLOW_NEW_INCOMERS_THEN_FOLLOW_TOP_ACCOUNTS_FROM_POLAND:
					this._addFollowNewIncomersThenFollowTopAccountsFromPoland();
					break;
				default:
					this._addSchedulerTask();
					break;
			}
		}
	}

	private _addFollowFromHashtagTask() {
		let request = new FollowFromHashtagReq(
			"polishgirl",
			this.taskFormGroupControls.numberOfAccounts.value
		);
		this._tasksQueueService.addToQueue(TaskType.FOLLOW_FROM_HASHTAG, request);
	}

	private _addFollowTopAccountsFromPoland() {
		let request = new FollowTopAccountsFromPolandReq(
			this.taskFormGroupControls.numberOfAccounts.value
		);
		this._tasksQueueService.addToQueue(TaskType.FOLLOW_TOP_ACCOUNTS_FROM_POLAND, request);
	}

	private _addFollowNewIncomersThenFollowTopAccountsFromPoland() {
		let request = new FollowNewIncomersThenFollowTopAccountsReq(
			this.taskFormGroupControls.numberOfAccounts.value
		);
		this._tasksQueueService.addToQueue(TaskType.FOLLOW_NEW_INCOMERS_THEN_FOLLOW_TOP_ACCOUNTS_FROM_POLAND, request);
	}

	private _addSchedulerTask() {
		this._tasksQueueService.addToQueue(TaskType.NONE, null);
	}
}
