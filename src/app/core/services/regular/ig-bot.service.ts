import { Injectable } from '@angular/core';
import { IgApiClient } from 'instagram-private-api';
import { environment } from 'src/environments/environment';
import { UserCredentialsModel } from '../../models/implementations';
import { IUserCredentialsModel } from '../../models/interfaces';

@Injectable({
	providedIn: 'root'
})

export class IgBotService {

	private _instagramApiClient: IgApiClient = new IgApiClient();

	get getInstagramAPIClientInstance(): IgApiClient {
		return this._instagramApiClient;
	}

	get getUserCredentials(): IUserCredentialsModel {
		let userCredentials = new UserCredentialsModel(environment.instagramUsername, environment.instagramPassword);
		return userCredentials;
	}

	constructor() { }
}
