import { TaskType } from "../../../enums";
import { ITaskBase } from "../..";

export class TaskBase implements ITaskBase {

	constructor(
		public type: TaskType = TaskType.NONE,
		public executed: boolean = false
	) { }
}
