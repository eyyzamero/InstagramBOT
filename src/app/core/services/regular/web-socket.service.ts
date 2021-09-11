import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from "rxjs/webSocket";
import { EventLoggerObservableService } from 'src/app/pages/dashboard/event-logger/services/observable/event-logger-observable.service';
import { environment } from 'src/environments/environment';
import { LogType, WebSocketKey, WebSocketType } from '../../enums';
import { LogModel } from '../../models/implementations';
import { IWebSocketMessageModel } from '../../models/interfaces';

@Injectable({
	providedIn: 'root'
})

export class WebSocketService {

	webSocket$!: WebSocketSubject<any>;

	constructor(
		private _eventLoggerObservableService: EventLoggerObservableService
	) { }

	openConnection() {
		if (!this.webSocket$ || this.webSocket$.closed)
			this.webSocket$ = this._getNewWebSocketInstance();

		 this.webSocket$.subscribe(
			 (message) => this._handleIncomingMessage(message),
			 err => console.log(err),
			 () => console.log("closed")
		);
	}

	private _getNewWebSocketInstance(): WebSocketSubject<any> {
		return webSocket({
			url: `ws://localhost:8080/instagram-bot-ws?username=${environment.instagramUsername}`,
			openObserver: {
				next: () => console.log("[Instagram BOT WS] Connection established")
			},
			closeObserver: {
				next: () => console.log("[Instagram BOT WS] Connection closed")
			},
			serializer: (value) => JSON.stringify(value)
		});
	}

	private _handleIncomingMessage(message: IWebSocketMessageModel) {
		switch(message.key) {
			case WebSocketKey.LOG:
				this._handleLogMessage(message);
				break;
		}
	}

	private _handleLogMessage(message: IWebSocketMessageModel) {
		let log: LogModel;

		switch(message.type) {
			case WebSocketType.USER_ADDED_TO_FOLLOWING:
				log = new LogModel(LogType.NEW_FOLLOW, `You followed: "${message.data.username}"`);
				break;
			case WebSocketType.USER_REMOVED_FROM_FOLLOWING:
				log = new LogModel(LogType.NEW_UNFOLLOW, `You unfollowed: "${message.data.username}"`);
				break;
			default:
				log = new LogModel(LogType.INVALID_OPERATION, "Invalid operation type received from API");
				break;
		}

		this._eventLoggerObservableService.addLog(log);
	}
}
