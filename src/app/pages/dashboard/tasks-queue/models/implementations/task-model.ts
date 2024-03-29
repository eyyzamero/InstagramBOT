import { TaskType } from "../../enums";
import { ITaskModel } from "..";

export class TaskModel implements ITaskModel {

	constructor(
		public type: TaskType = TaskType.NONE,
		public req: any | null,
		public executed: boolean = false
	) { }
}
