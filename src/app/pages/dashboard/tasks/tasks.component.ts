import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
	selector: 'app-tasks',
	templateUrl: './tasks.component.html',
	styleUrls: ['./tasks.component.less']
})

export class TasksComponent {

	constructor(
		private _httpClient: HttpClient
	) { }

	async executeFollowFromHashtagTask() {

		return await this._httpClient.post("http://localhost:8080/tasks/followFromHashtag", {
			hashtag: "polishboy",
			numberOfUsersToFollow: 10
		}).subscribe(
			value => console.log(value)
		);
	}
}
