import { Component } from '@angular/core';
import { UserInformationMapperService } from 'src/app/core/services/mapper';
import { UserInformationObservableService } from 'src/app/core/services/observable/user-information-observable.service';
import { environment } from 'src/environments/environment';
import { LoginReq } from '../login/contracts/requests';
import { LoginCommunicationService } from '../login/services';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.less']
})

export class DashboardComponent {

	constructor(
		private _loginCommunicationService: LoginCommunicationService,
		private _userInformationMapperService: UserInformationMapperService,
		private _userInformationObservableService: UserInformationObservableService
	) { }

	async loginToAccount() {
		let req = new LoginReq(environment.instagramUsername, environment.instagramPassword);

		await this._loginCommunicationService.login(req).then(
			data => {
				var mappedResponse = this._userInformationMapperService.ILoginResToIUserInformationModel(data);
				this._userInformationObservableService.add(mappedResponse);
			}
		);
	}
}
