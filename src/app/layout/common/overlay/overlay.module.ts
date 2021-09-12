import { CommonModule } from "@angular/common";
import { OverlayModule } from "@angular/cdk/overlay";
import { NgModule } from "@angular/core";
import { OverlayService } from "./services/regular/overlay.service";

@NgModule({
	imports: [
		CommonModule,
		OverlayModule
	],
	providers: [
		OverlayService
	]
})

export class AppOverlayModule { }
