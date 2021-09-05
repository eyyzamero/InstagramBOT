import { Injectable } from '@angular/core';
import { ILoginRes } from 'src/app/pages/login/contracts/responses';
import { UserInformationModel } from '../../models/implementations';
import { IUserInformationModel } from '../../models/interfaces';

@Injectable({
	providedIn: 'root'
})

export class UserInformationMapperService {

	constructor() { }

	ILoginResToIUserInformationModel(src: ILoginRes): IUserInformationModel {
		if (src === null)
			return new UserInformationModel();

		let dest = new UserInformationModel(src.id, src.username, src.fullName, src.profilePictureID, src.profilePictureURL, src.isPrivate, src.isVerified, src.isBusinessAccount);
		return dest;
	}
}
