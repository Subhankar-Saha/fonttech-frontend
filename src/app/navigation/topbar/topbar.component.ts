import { Component } from '@angular/core';
import { RequestMapperService } from "../../request-mapper.service";
import { MessageService } from "../../message.service";
import { JWTService } from "../../authentication/jwt.service";
import { Router } from "@angular/router";
import { SnackService } from "../../notification/snack.service";

@Component({
	selector: 'app-topbar',
	templateUrl: './topbar.component.html',
	styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {
	public isMobileMenuOpen: boolean = false;
	public menuArr: any = [
		{
			name: "Product",
			icon: `<svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none"
			viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
			<path stroke-linecap="round" stroke-linejoin="round"
				d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
			<path stroke-linecap="round" stroke-linejoin="round"
				d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
		</svg>`
		},
		{
			name: "Store",
			description: "TV Haua",
			icon: `<svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none"
			viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
			<path stroke-linecap="round" stroke-linejoin="round"
				d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
			<path stroke-linecap="round" stroke-linejoin="round"
				d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
		</svg>`
		},
		{
			name: "About",
			description: "AC Haua",
			icon: `<svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none"
			viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
			<path stroke-linecap="round" stroke-linejoin="round"
				d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
			<path stroke-linecap="round" stroke-linejoin="round"
				d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
		</svg>`
		},
		{
			name: "Contact",
			description: "AC Haua",
			icon: `<svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none"
			viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
			<path stroke-linecap="round" stroke-linejoin="round"
				d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
			<path stroke-linecap="round" stroke-linejoin="round"
				d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
		</svg>`
		}
	]

	constructor(
		private _jwt: JWTService,
		private _router: Router,
		private _snack: SnackService
	) {
	}

	public logout(): void {
		this._jwt.destroySession();
		this._router.navigateByUrl(
			RequestMapperService.getAbsoluteUrl(RequestMapperService.BASE_RELATIVE_URL)
		).then(() => {
			this._snack.info(MessageService.LOGOUT_SUCCESSFUL)
		});
	}
}
