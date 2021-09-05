import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
	{
		path: "",
		component: LayoutComponent,
		children: [
			{
				path: "",
				loadChildren: () => import("../pages/dashboard/dashboard.module").then(m => m.DashboardModule),
				pathMatch: "full"
			},
			{
				path: "login",
				loadChildren: () => import("../pages/login/login.module").then(m => m.LoginModule)
			}
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	]
})

export class LayoutRoutingModule { }
