import { LogType } from "../../enums";

export interface ILogModel {
	date: Date;
	type: LogType;
	text: string;
}
