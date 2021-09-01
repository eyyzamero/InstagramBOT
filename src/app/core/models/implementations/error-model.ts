import { IErrorModel } from "../interfaces";

export class ErrorModel implements IErrorModel {

    constructor(
        public errorCode: number = 400,
        public errorText: string = '',
        public errorId = ''
    ) {}
}
