import { Injectable, OnDestroy } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { ITaskBase } from '../../models';

@Injectable({
	providedIn: 'root'
})

export class TasksQueueService implements OnDestroy {

	private _itemsInQueue: Array<ITaskBase> = new Array<ITaskBase>();
	private _interval!: Subscription;

	get items() {
		return this._itemsInQueue;
	}

	constructor() { }

	addToQueue(item: ITaskBase) {
		this.items.push(item);
	}

	removeFromQueue(item: ITaskBase) {
		let index = this.items.indexOf(item);
		this.items.splice(index, 1);
	}

	executeTasksFromQueue() {
		this._interval = timer(0, 5 * 1000).subscribe(value => {
			this.items[value].executed = true;
			console.log(`${value + 1} Task executed`);

			if (!this.items.filter(x => !x.executed).length)
				this.stopExecutingTasks();
		});
	}

	stopExecutingTasks() {
		this._interval.unsubscribe();
	}

	ngOnDestroy() {
		this._interval.unsubscribe();
	}
}
