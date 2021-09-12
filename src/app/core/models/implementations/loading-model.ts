import { ILoadingModel } from "../interfaces";

export class LoadingModel implements ILoadingModel {

	constructor(
		public display: boolean = false,
		public text: string = ""
	) { }
}
