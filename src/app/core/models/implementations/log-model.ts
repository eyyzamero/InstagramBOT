import { LogType } from "../../enums";
import { ILogModel } from "../interfaces";

export class LogModel implements ILogModel {

	constructor(
		public type: LogType = LogType.NONE,
		public text: string = "",
		public date: Date = new Date()
	) { }
}
