import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { UserInformationComponent } from './user-information/user-information.component';
import { MaterialModule } from 'src/app/core/material/material.module';
import { TasksComponent } from './tasks/tasks.component';
import { TasksQueueComponent } from './tasks-queue/tasks-queue.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EventLoggerComponent } from './event-logger/event-logger.component';

@NgModule({
	declarations: [
		DashboardComponent,
		UserInformationComponent,
		TasksComponent,
  		TasksQueueComponent,
    EventLoggerComponent
	],
	imports: [
		CommonModule,
		DashboardRoutingModule,
		MaterialModule,
		ReactiveFormsModule
	]
})

export class DashboardModule { }
