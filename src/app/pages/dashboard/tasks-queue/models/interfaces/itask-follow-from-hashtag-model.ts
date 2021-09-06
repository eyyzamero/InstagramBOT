import { TaskType } from "../../enums";
import { ITaskBase } from "..";

export interface ITaskFollowFromHashtagModel extends ITaskBase {
	type: TaskType;
}
