import { IUserCredentialsModel } from "../interfaces";

export class UserCredentialsModel implements IUserCredentialsModel {

	constructor(
		public username: string = "",
		public password: string = ""
	) { }
}
