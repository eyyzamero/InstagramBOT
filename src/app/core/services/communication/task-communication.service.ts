import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskType } from 'src/app/pages/dashboard/tasks-queue/enums';
import { IFollowFromHashtagReq, IFollowNewIncomersThenFollowTopAccountsReq, IFollowTopAccountsFromPoland } from '../../contracts';

@Injectable({
	providedIn: 'root'
})

export class TaskCommunicationService {

	constructor(
		private _httpClient: HttpClient
	) { }

	async executeTask(type: TaskType, req: object | null): Promise<any> {
		switch(type) {
			case TaskType.FOLLOW_FROM_HASHTAG:
				return await this._followFromHashtagTaskOperation(req as IFollowFromHashtagReq);
		 	case TaskType.FOLLOW_TOP_ACCOUNTS_FROM_POLAND:
				return await this._followTopAccountsFromPolandTaskOperation(req as IFollowTopAccountsFromPoland);
			case TaskType.FOLLOW_NEW_INCOMERS_THEN_FOLLOW_TOP_ACCOUNTS_FROM_POLAND:
				return await this._followNewIncomersThenFollowTopAccountsFromPolandTaskOperation(req as IFollowNewIncomersThenFollowTopAccountsReq);
		}
	}

	private async _followFromHashtagTaskOperation(req: IFollowFromHashtagReq): Promise<any> {
		return await this._httpClient.post("http://localhost:8080/tasks/followFromHashtag", req).toPromise();
	}

	private async _followTopAccountsFromPolandTaskOperation(req: IFollowTopAccountsFromPoland): Promise<any> {
		return await this._httpClient.post("http://localhost:8080/tasks/followTopAccountsFromPoland", req).toPromise();
	}

	private async _followNewIncomersThenFollowTopAccountsFromPolandTaskOperation(req: IFollowNewIncomersThenFollowTopAccountsReq): Promise<any> {
		return await this._httpClient.post("http://localhost:8080/tasks/followNewIncomersThenFollowTopAccountsFromPoland", req).toPromise();
	}
}
