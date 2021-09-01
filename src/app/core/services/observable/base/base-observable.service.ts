import * as _ from "lodash";
import { Observable, Subject, EMPTY } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { IBaseObservableModel } from "src/app/core/models/interfaces";
import { BaseObservableModel } from "src/app/core/models/implementations";
import { CommunicationState } from "src/app/core/enums";
import { HttpMapperService } from "../../mapper";

export abstract class BaseObservableService<T> {

	protected cleanObservableSubject: T;
    protected observableSubject: IBaseObservableModel<T>;
    protected subject: Subject<IBaseObservableModel<T>> = new Subject<IBaseObservableModel<T>>();

	public observable: Observable<IBaseObservableModel<T>> = EMPTY;

	constructor(
		clearObject: T,
		protected httpMapperService: HttpMapperService
	) {
		this.cleanObservableSubject = _.cloneDeep(clearObject);
		this.observableSubject = new BaseObservableModel(_.cloneDeep(clearObject));
		this.initSubject();
	}

	abstract initSubject(): void;

	get observableSubjectValue(): IBaseObservableModel<T> {
        return this.observableSubject;
    }

	add(value: T) {
        this.observableSubject.communicationState = CommunicationState.LOADED;
        this.observableSubject.data = value;
        this.next();
    }

	addWithoutNext(value: T) {
        this.observableSubject.communicationState = CommunicationState.LOADED;
        Object.assign(this.observableSubject.data, value);
    }

	addCommunicationState(state: CommunicationState) {
        this.observableSubject.communicationState = state;
        this.next();
    }

	addCommunicationStateWithoutNext(state: CommunicationState) {
        this.observableSubject.communicationState = state;
    }

	addError(error: HttpErrorResponse) {
        this.observableSubject.communicationState = CommunicationState.ERROR;
        this.observableSubject.error = this.httpMapperService.httpErrorResponseToIErrorModel(error);
        this.next();
    }

	clear() {
        this.observableSubject.data = _.cloneDeep(this.cleanObservableSubject);
        this.next();
    }

	clearWithoutNext() {
        this.observableSubject.data = _.cloneDeep(this.cleanObservableSubject);
    }

	next() {
        this.subject.next(_.cloneDeep(this.observableSubject));
    }
}
