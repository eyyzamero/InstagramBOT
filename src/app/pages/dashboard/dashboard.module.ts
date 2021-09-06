import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { UserInformationComponent } from './user-information/user-information.component';
import { MaterialModule } from 'src/app/core/material/material.module';
import { TasksComponent } from './tasks/tasks.component';
import { TasksQueueComponent } from './tasks-queue/tasks-queue.component';

@NgModule({
	declarations: [
		DashboardComponent,
		UserInformationComponent,
		TasksComponent,
  		TasksQueueComponent
	],
	imports: [
		CommonModule,
		DashboardRoutingModule,
		MaterialModule
	]
})

export class DashboardModule { }
