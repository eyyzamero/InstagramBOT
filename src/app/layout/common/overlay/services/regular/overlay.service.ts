import { Injectable, TemplateRef, ViewContainerRef } from "@angular/core";
import { Overlay, OverlayConfig, OverlayRef, PositionStrategy } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

@Injectable({
	providedIn: 'root'
})

export class OverlayService {

	constructor(
		private _overlay: Overlay
	) { }

	createOverlay(config: OverlayConfig): OverlayRef {
		return this._overlay.create(config);
	}

	attachTemplatePortal(overlayRef: OverlayRef, templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef) {
		let templatePortal = new TemplatePortal(templateRef, viewContainerRef);
		overlayRef.attach(templatePortal);
	}

	positionCenter(): PositionStrategy {
		return this._overlay.position().global().centerHorizontally().centerVertically();
	}
}
