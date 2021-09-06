import { TaskType } from "../../../enums";

export interface ITaskBase {
	type: TaskType;
	executed: boolean;
}
