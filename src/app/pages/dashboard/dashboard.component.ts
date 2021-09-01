import { Component } from '@angular/core';
import { IgBotCommunicationService } from 'src/app/core/services/communication';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.less']
})

export class DashboardComponent {

	constructor(
		_igBotCommunicationService: IgBotCommunicationService
	) {
		// _igBotCommunicationService.login();
	}
}
