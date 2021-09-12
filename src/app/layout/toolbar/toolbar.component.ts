import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommunicationState } from 'src/app/core/enums';
import { UserInformationModel } from 'src/app/core/models/implementations';
import { IUserInformationModel } from 'src/app/core/models/interfaces';
import { AppLoadingObservableService } from 'src/app/core/services/observable/app-loading-observable.service';
import { UserInformationObservableService } from 'src/app/core/services/observable/user-information-observable.service';
import { LoginReq } from 'src/app/pages/login/contracts/requests';
import { LoginCommunicationService } from 'src/app/pages/login/services';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.less']
})

export class ToolbarComponent implements OnDestroy {

	userInformation: IUserInformationModel = new UserInformationModel();
	userInformationCommunicationState: CommunicationState = CommunicationState.NONE;
	CommunicationState = CommunicationState;

	private _userInformationSubscription!: Subscription;

	constructor(
		private _loginCommunicationService: LoginCommunicationService,
		private _userInformationObservableService: UserInformationObservableService,
		private _appLoadingObservableService: AppLoadingObservableService
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

	loginToAccount() {
		let req = new LoginReq(environment.instagramUsername, environment.instagramPassword);

		this._loginCommunicationService.login(req);
		this._appLoadingObservableService.beginLoading("Attempting to log into your account...");
	}

	ngOnDestroy() {
		this._userInformationSubscription.unsubscribe();
	}
}
