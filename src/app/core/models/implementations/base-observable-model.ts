import { CommunicationState } from "src/app/core/enums";
import { IBaseObservableModel, IErrorModel } from "../interfaces";

export class BaseObservableModel<T> implements IBaseObservableModel<T> {

    constructor(
        public data: T,
        public error?: IErrorModel,
        public communicationState: CommunicationState = CommunicationState.NONE
    ) { }
}
