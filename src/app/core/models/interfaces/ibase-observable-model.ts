import { CommunicationState } from 'src/app/core/enums';
import { IErrorModel } from '.';

export interface IBaseObservableModel<T> {
    data: T;
    error?: IErrorModel;
    communicationState: CommunicationState;
}
