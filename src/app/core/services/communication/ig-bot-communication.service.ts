import { Injectable } from '@angular/core';
import { IgApiClient } from 'instagram-private-api';
import { UserInformationMapperService } from '../mapper';
import { UserInformationObservableService } from '../observable/user-information-observable.service';
import { IgBotService } from '../regular/ig-bot.service';

@Injectable({
	providedIn: 'root'
})

export class IgBotCommunicationService {

	private _instagramApiClient: IgApiClient

	constructor(
		private _igBotService: IgBotService,
		private _userInformationMapperService: UserInformationMapperService,
		private _userInformationObservableService: UserInformationObservableService
	) {
		this._instagramApiClient = this._igBotService.getInstagramAPIClientInstance;
	}

	async login() {
		let userCredentials = this._igBotService.getUserCredentials;

		this._instagramApiClient.state.generateDevice(userCredentials.username);
		await this._instagramApiClient.simulate.preLoginFlow();

		await this._instagramApiClient.account.login(userCredentials.username, userCredentials.password).then(
			response => {
				let mappedResponse = this._userInformationMapperService.AccountRepositoryLoginResponseLoggedInUserToIUserInformationModel(response);
				this._userInformationObservableService.add(mappedResponse);
			}
		);
		await this._instagramApiClient.simulate.postLoginFlow();
	}
}
