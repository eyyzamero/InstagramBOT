import { WebSocketKey, WebSocketType } from "../../enums";
import { IWebSocketMessageModel } from "../interfaces";

export class WebSocketMessageModel implements IWebSocketMessageModel {

	constructor(
		public key: WebSocketKey = WebSocketKey.NONE,
		public type: WebSocketType = WebSocketType.NONE,
		public data: object | null = null
	) { }
}
