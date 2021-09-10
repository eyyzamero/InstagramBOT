import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from "rxjs/webSocket";
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})

export class WebSocketService {

	webSocket$!: WebSocketSubject<any>;

	constructor() { }

	openConnection() {
		if (!this.webSocket$ || this.webSocket$.closed)
			this.webSocket$ = this._getNewWebSocketInstance();

		 this.webSocket$.subscribe(
			 (msg) => console.log(msg),
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
}
