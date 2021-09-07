import { TaskType } from "../../enums";

export class TaskModel {

	constructor(
		public type: TaskType = TaskType.NONE,
		public executed: boolean = false
	) { }
}
