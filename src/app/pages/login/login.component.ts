import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInformationMapperService } from 'src/app/core/services/mapper';
import { UserInformationObservableService } from 'src/app/core/services/observable/user-information-observable.service';
import { LoginReq } from './contracts/requests';
import { LoginCommunicationService } from './services';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.less']
})

export class LoginComponent {

	loginForm: FormGroup = new FormGroup({});
	invalidLoginCredentials: boolean = false;

	get loginFormControls() {
		return this.loginForm.controls;
	}

	constructor(
		private readonly _router: Router,
		private readonly _loginCommunicationService: LoginCommunicationService,
		private readonly _userInformationMapperService: UserInformationMapperService,
		private readonly _userInformationObservableService: UserInformationObservableService
	) {
		this._initForm();
	}

	private _initForm() {
		this.loginForm = new FormGroup({
			username: new FormControl(null, [
				Validators.minLength(3),
				Validators.maxLength(255)
			]),
			password: new FormControl(null, [
				Validators.minLength(3),
				Validators.maxLength(255)
			])
		});
	}

	async submitLoginForm() {
		if (this.loginForm.valid) {
			this.invalidLoginCredentials = false;

			var req = new LoginReq(this.loginFormControls.username.value, this.loginFormControls.password.value);

			await this._loginCommunicationService.login(req).then(
				data => {
					var mappedResponse = this._userInformationMapperService.ILoginResToIUserInformationModel(data);
					this._userInformationObservableService.add(mappedResponse);
					this._router.navigate(["dashboard"]);
				},
				() => this.invalidLoginCredentials = true
			);
		}
	}
}
