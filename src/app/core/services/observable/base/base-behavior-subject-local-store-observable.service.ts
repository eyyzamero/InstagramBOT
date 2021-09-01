import { BehaviorSubject } from 'rxjs';
import { IBaseObservableModel } from 'src/app/core/models/interfaces';
import { HttpMapperService } from '../../mapper';
import { BaseObservableService } from './base-observable.service';

export abstract class BaseBehaviorSubjectLocalStoreObservableService<T> extends BaseObservableService<T> {

    constructor(clearObject: T, protected httpMapperService: HttpMapperService, protected localStoreName: string) {
        super(clearObject, httpMapperService);

        if(!this.observableSubjectValue.data)
            this._setLocalStoreItem(clearObject);
    }

    initSubject() {
        this.subject = new BehaviorSubject(this.observableSubject);
        this.observable = this.subject.asObservable();
    }

    get observableSubjectValue(): IBaseObservableModel<T> {
        this.observableSubject.data = JSON.parse(localStorage.getItem(this.localStoreName)!) as T;
        return this.observableSubject;
    }

    add(value: T) {
        this._setLocalStoreItem(value);
        super.add(value);
    }

    addWithoutNext(value: T) {
        this._setLocalStoreItem(value);
        super.addWithoutNext(value);
    }

    clear() {
        this._setLocalStoreItem(this.cleanObservableSubject);
        super.clear();
    }

    clearWithoutNext() {
        this._setLocalStoreItem(this.cleanObservableSubject);
        super.clearWithoutNext();
    }

    private _setLocalStoreItem(value: T) {
        localStorage.setItem(this.localStoreName, JSON.stringify(value));
    }
}
