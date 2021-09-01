import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { UserInformationComponent } from './user-information/user-information.component';

@NgModule({
	declarations: [
		DashboardComponent,
		UserInformationComponent
	],
	imports: [
		CommonModule,
		DashboardRoutingModule
	]
})

export class DashboardModule { }
