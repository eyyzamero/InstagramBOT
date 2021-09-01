import { TestBed } from '@angular/core/testing';
import { IgBotCommunicationService } from '.';


describe('IgBotCommunicationService', () => {
	let service: IgBotCommunicationService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(IgBotCommunicationService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
