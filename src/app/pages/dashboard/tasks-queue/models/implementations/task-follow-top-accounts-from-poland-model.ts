import { ITaskFollowTopAccountsFromPolandModel, TaskBase } from "..";
import { TaskType } from "../../enums";

export class TaskFollowTopAccountsFromPolandModel extends TaskBase implements ITaskFollowTopAccountsFromPolandModel {

	constructor(
		public type: TaskType = TaskType.FOLLOW_TOP_ACCOUNTS_FROM_POLAND
	) {
		super(type);
	}
}
