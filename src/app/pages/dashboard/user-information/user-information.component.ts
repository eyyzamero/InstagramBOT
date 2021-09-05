import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommunicationState } from 'src/app/core/enums';
import { UserInformationModel } from 'src/app/core/models/implementations';
import { IUserInformationModel } from 'src/app/core/models/interfaces';
import { UserInformationObservableService } from 'src/app/core/services/observable/user-information-observable.service';

@Component({
	selector: 'app-user-information',
	templateUrl: './user-information.component.html',
	styleUrls: ['./user-information.component.less']
})

export class UserInformationComponent implements OnDestroy {

	userInformation: IUserInformationModel = new UserInformationModel();
	userInformationCommunicationState: CommunicationState = CommunicationState.NONE;
	CommunicationState = CommunicationState;

	private _userInformationSubscription!: Subscription;

	constructor(
		private _userInformationObservableService: UserInformationObservableService
	) {
		this._initObservables();
	}

	private _initObservables() {
		this._userInformationSubscription = this._userInformationObservableService.observable.subscribe(
			value => {
				this.userInformation = value.data;
				this.userInformationCommunicationState = value.communicationState;
			}
		);
	}

	ngOnDestroy() {
		this._userInformationSubscription.unsubscribe();
	}
}
