import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EventLoggerObservableService } from 'src/app/pages/dashboard/event-logger/services/observable/event-logger-observable.service';
import { TaskType } from 'src/app/pages/dashboard/tasks-queue/enums';
import { IFollowFromHashtagReq, IFollowNewIncomersThenFollowTopAccountsReq, IFollowTopAccountsFromPoland } from '../../contracts';
import { LogType } from '../../enums';
import { LogModel } from '../../models/implementations';

@Injectable({
	providedIn: 'root'
})

export class TaskCommunicationService {

	constructor(
		private _httpClient: HttpClient,
		private _eventLoggerObservableService: EventLoggerObservableService
	) { }

	async executeTask(type: TaskType, req: object | null): Promise<any> {
		switch(type) {
			case TaskType.FOLLOW_FROM_HASHTAG:
				this._eventLoggerObservableService.addLog(new LogModel(LogType.TASK_STARTED, `Task "Follow From Hashtag" started`))
				return await this._followFromHashtagTaskOperation(req as IFollowFromHashtagReq);
		 	case TaskType.FOLLOW_TOP_ACCOUNTS_FROM_POLAND:
				this._eventLoggerObservableService.addLog(new LogModel(LogType.TASK_STARTED, `Task "Follow Top Accounts From Poland" started`))
				return await this._followTopAccountsFromPolandTaskOperation(req as IFollowTopAccountsFromPoland);
			case TaskType.FOLLOW_NEW_INCOMERS_THEN_FOLLOW_TOP_ACCOUNTS_FROM_POLAND:
				this._eventLoggerObservableService.addLog(new LogModel(LogType.TASK_STARTED, `Task "Follow New Incomers then Follow Top Accounts From Poland" started`))
				return await this._followNewIncomersThenFollowTopAccountsFromPolandTaskOperation(req as IFollowNewIncomersThenFollowTopAccountsReq);
			case TaskType.LIKE_POSTS_FROM_HASHTAG_FEED:
				this._eventLoggerObservableService.addLog(new LogModel(LogType.TASK_STARTED, `Task "Like Posts From Hashtag" started`))
				return await this._likePostsFromHashtagFeed(req as object);
		}
	}

	private async _followFromHashtagTaskOperation(req: IFollowFromHashtagReq): Promise<any> {
		return await this._httpClient.post("http://localhost:8080/tasks/followFromHashtag", req).toPromise().then(() => {
			this._eventLoggerObservableService.addLog(new LogModel(LogType.TASK_ENDED, `Task "Follow From Hashtag" ended`));
		});
	}

	private async _followTopAccountsFromPolandTaskOperation(req: IFollowTopAccountsFromPoland): Promise<any> {
		return await this._httpClient.post("http://localhost:8080/tasks/followTopAccountsFromPoland", req).toPromise().then(() => {
			this._eventLoggerObservableService.addLog(new LogModel(LogType.TASK_ENDED, `Task "Follow Top Accounts From Poland" ended`));
		});
	}

	private async _followNewIncomersThenFollowTopAccountsFromPolandTaskOperation(req: IFollowNewIncomersThenFollowTopAccountsReq): Promise<any> {
		return await this._httpClient.post("http://localhost:8080/tasks/followNewIncomersThenFollowTopAccountsFromPoland", req).toPromise().then(() => {
			this._eventLoggerObservableService.addLog(new LogModel(LogType.TASK_ENDED, `Task "Follow New Incomers then Follow Top Accounts From Poland" ended`));
		});
	}

	private async _likePostsFromHashtagFeed(req: object): Promise<any> {
		return await this._httpClient.post("http://localhost:8080/tasks/likePostsFromHashtagFeed", req).toPromise().then(() => {
			this._eventLoggerObservableService.addLog(new LogModel(LogType.TASK_ENDED, `Task "Like Posts From Hashtag Feed" ended`));
		});
	}
}
