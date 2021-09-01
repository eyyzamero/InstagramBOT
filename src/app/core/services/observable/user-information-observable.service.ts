import { Injectable } from '@angular/core';
import { UserInformationModel } from '../../models/implementations';
import { IUserInformationModel } from '../../models/interfaces';
import { HttpMapperService } from '../mapper';
import { BaseBehaviorSubjectObservableService } from './base/base-behavior-subject-observable.service';

@Injectable({
	providedIn: 'root'
})

export class UserInformationObservableService extends BaseBehaviorSubjectObservableService<IUserInformationModel> {

	constructor(httpMapperService: HttpMapperService) {
		super(new UserInformationModel(), httpMapperService);
	}
}
