import { TaskType } from "../../enums";

export interface ITaskModel {
	type: TaskType;
	executed: boolean;
}
