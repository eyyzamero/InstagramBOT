import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MaterialModule } from './core/material/material.module';
import { LoadingSpinnerModule } from './layout/common/loading-spinner/loading-spinner.module';
import { AppOverlayModule } from './layout/common/overlay/overlay.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MaterialModule,
		AppRoutingModule,
		HttpClientModule,
		AppOverlayModule,
		LoadingSpinnerModule
	],
	bootstrap: [
		AppComponent
	]
})

export class AppModule { }
