import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInformationMapperService } from 'src/app/core/services/mapper';
import { UserInformationObservableService } from 'src/app/core/services/observable/user-information-observable.service';
import { ILoginReq } from '../../contracts/requests';
import { ILoginRes } from '../../contracts/responses';

@Injectable({
	providedIn: 'root'
})

export class LoginCommunicationService {

	constructor(
		private _httpClient: HttpClient,
		private _userInformationMapperService: UserInformationMapperService,
		private _userInformationObservableService: UserInformationObservableService
	) { }

	async login(req: ILoginReq): Promise<void> {
		await this._httpClient.post<ILoginRes>("http://localhost:8080/auth/login", req).toPromise().then(
			data => {
				var mappedResponse = this._userInformationMapperService.ILoginResToIUserInformationModel(data);
				this._userInformationObservableService.add(mappedResponse);
			}
		);
	}
}
