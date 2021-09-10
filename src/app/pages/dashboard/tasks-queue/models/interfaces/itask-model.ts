import { TaskType } from "../../enums";

export interface ITaskModel {
	type: TaskType;
	req: object | null;
	executed: boolean;
}
