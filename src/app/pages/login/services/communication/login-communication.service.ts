import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILoginReq } from '../../contracts/requests';
import { ILoginRes } from '../../contracts/responses';

@Injectable({
	providedIn: 'root'
})

export class LoginCommunicationService {

	constructor(
		private _httpClient: HttpClient
	) { }

	async login(req: ILoginReq): Promise<ILoginRes> {
		return await this._httpClient.post<ILoginRes>("http://localhost:8080/auth/login", req).toPromise();
	}
}
