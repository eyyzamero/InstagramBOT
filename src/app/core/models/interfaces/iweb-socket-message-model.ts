import { WebSocketKey, WebSocketType } from "../../enums";

export interface IWebSocketMessageModel {
	key: WebSocketKey;
	type: WebSocketType;
	data: any;
}
