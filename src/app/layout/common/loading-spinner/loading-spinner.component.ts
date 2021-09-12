import { Component, Input, OnDestroy, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { OverlayService } from '../overlay/services/regular/overlay.service';
import { OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { AppLoadingObservableService } from 'src/app/core/services/observable/app-loading-observable.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-loading-spinner',
	templateUrl: './loading-spinner.component.html',
	styleUrls: ['./loading-spinner.component.less']
})

export class LoadingSpinnerComponent implements OnDestroy {

	@ViewChild('progressSpinnerRef') private _progressSpinnerRef!: TemplateRef<any>;

	@Input() backdropEnabled = true;
	@Input() positionGloballyCenter = true;
	@Input() displayProgressSpinner: boolean = false;

	text: string = "";

	private readonly _overlayConfig: OverlayConfig;
  	private _overlayRef: OverlayRef;
	private _loadingSubscription!: Subscription;

	constructor(
		private _viewContainerRef: ViewContainerRef,
		private _overlayService: OverlayService,
		private _appLoadingObservableService: AppLoadingObservableService
	) {
		this._overlayConfig = {
			hasBackdrop: true,
			positionStrategy: this._overlayService.positionCenter(),
			backdropClass: "overlay-dark-background"
		};
		this._overlayRef = this._overlayService.createOverlay(this._overlayConfig);
		this._initObservables();
	}

	private _initObservables() {
		this._loadingSubscription = this._appLoadingObservableService.observable.subscribe(
			value => {
				this.displayProgressSpinner = value.data.display;
				this.text = value.data.text;
				this._determineIfShowSpinner();
			}
		)
	}

	private _determineIfShowSpinner() {
		if (this.displayProgressSpinner && !this._overlayRef.hasAttached())
			this._overlayService.attachTemplatePortal(this._overlayRef, this._progressSpinnerRef, this._viewContainerRef);
		else if (!this.displayProgressSpinner && this._overlayRef.hasAttached()) {
			this._overlayRef.detach();
		}
	}

	ngOnDestroy() {
		this._loadingSubscription.unsubscribe();
	}
}
