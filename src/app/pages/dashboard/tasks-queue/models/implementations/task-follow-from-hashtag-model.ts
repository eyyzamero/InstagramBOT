import { TaskBase } from "..";
import { TaskType } from "../../enums";
import { ITaskFollowFromHashtagModel } from "..";

export class TaskFollowFromHashtagModel extends TaskBase implements ITaskFollowFromHashtagModel {

	constructor(
		public type: TaskType = TaskType.FOLLOW_FROM_HASHTAG
	) {
		super(type);
	}
}
