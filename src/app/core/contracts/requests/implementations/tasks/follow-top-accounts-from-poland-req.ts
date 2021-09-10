import { IFollowTopAccountsFromPoland } from "../../..";

export class FollowTopAccountsFromPolandReq implements IFollowTopAccountsFromPoland {

	constructor(
		public numberOfUsersToFollow: number = 0
	) { }
}
