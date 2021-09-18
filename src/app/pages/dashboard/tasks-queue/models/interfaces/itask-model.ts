import { TaskType } from "../../enums";

export interface ITaskModel {
	type: TaskType;
	req: any | null;
	executed: boolean;
}
