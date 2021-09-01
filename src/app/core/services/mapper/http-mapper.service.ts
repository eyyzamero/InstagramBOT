import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorModel } from 'src/app/core/models/implementations';
import { IErrorModel } from 'src/app/core/models/interfaces';

@Injectable({
  	providedIn: 'root'
})

export class HttpMapperService {

  	constructor() { }

	httpErrorResponseToIErrorModel(src: HttpErrorResponse, dest = new ErrorModel()): IErrorModel {
		dest.errorCode = src.status;
		dest.errorId = src.statusText;
		dest.errorText = src.message;
		return dest;
	}
}
