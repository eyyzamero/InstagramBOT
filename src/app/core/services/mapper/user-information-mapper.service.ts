import { Injectable } from '@angular/core';
import { AccountRepositoryLoginResponseLogged_in_user } from 'instagram-private-api';
import { UserInformationModel } from '../../models/implementations';
import { IUserInformationModel } from '../../models/interfaces';

@Injectable({
	providedIn: 'root'
})

export class UserInformationMapperService {

	constructor() { }

	AccountRepositoryLoginResponseLoggedInUserToIUserInformationModel(src: AccountRepositoryLoginResponseLogged_in_user): IUserInformationModel {
		if (src === null)
			return new UserInformationModel();

		var dest = new UserInformationModel(
			src.pk,
			src.username,
			src.full_name,
			src.profile_pic_id,
			src.profile_pic_url,
			src.is_private,
			src.is_verified,
			src.is_business
		);
		return dest;
	}
}
