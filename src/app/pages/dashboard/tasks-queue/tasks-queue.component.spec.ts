import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksQueueComponent } from './tasks-queue.component';

describe('TasksQueueComponent', () => {
	let component: TasksQueueComponent;
	let fixture: ComponentFixture<TasksQueueComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [TasksQueueComponent]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TasksQueueComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
