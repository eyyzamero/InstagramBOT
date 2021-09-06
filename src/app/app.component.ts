import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WebSocketService } from './core/services/regular';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less']
})

export class AppComponent {

	constructor(
		private _webSocketService: WebSocketService
	) {
		if (environment.production) {
			window.console.log = function() { };
		}

		this._webSocketService.openConnection();
	}
}
