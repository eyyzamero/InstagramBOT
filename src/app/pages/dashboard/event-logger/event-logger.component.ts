import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LogType } from 'src/app/core/enums';
import { ILogModel } from 'src/app/core/models/interfaces';
import { EventLoggerObservableService } from './services/observable/event-logger-observable.service';

@Component({
	selector: 'app-event-logger',
	templateUrl: './event-logger.component.html',
	styleUrls: ['./event-logger.component.less']
})

export class EventLoggerComponent implements OnDestroy {

	LogType = LogType;
	logs: Array<ILogModel> = new Array<ILogModel>();

	private _eventLoggerSubscription!: Subscription;

	constructor(
		private _eventLoggerObservableService: EventLoggerObservableService
	) {
		this._initObservables();
	}

	private _initObservables() {
		this._eventLoggerSubscription = this._eventLoggerObservableService.observable.subscribe(
			value => this.logs = value.data
		);
	}

	formatDate(date: Date) {
		return date.toLocaleString();
	}

	ngOnDestroy() {
		this._eventLoggerSubscription.unsubscribe();
	}
}
