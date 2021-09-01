import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';

import { LayoutComponent } from './layout.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '../core/material/material.module';

@NgModule({
	declarations: [
		LayoutComponent,
		ToolbarComponent
	],
	imports: [
		CommonModule,
		LayoutRoutingModule,
		MaterialModule
	]
})

export class LayoutModule { }
