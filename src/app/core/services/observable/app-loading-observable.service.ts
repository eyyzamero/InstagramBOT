import { Injectable } from '@angular/core';
import { LoadingModel } from '../../models/implementations';
import { ILoadingModel } from '../../models/interfaces';
import { HttpMapperService } from '../mapper';
import { BaseBehaviorSubjectObservableService } from './base/base-behavior-subject-observable.service';

@Injectable({
	providedIn: 'root'
})

export class AppLoadingObservableService extends BaseBehaviorSubjectObservableService<ILoadingModel> {

	constructor(
		httpMapperService: HttpMapperService
	) {
		super(new LoadingModel(), httpMapperService);
	}

	beginLoading(text?: string) {
		let model = new LoadingModel(true, text);
		this.add(model);
	}

	endLoading() {
		this.clear();
	}
}
