import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivate, Router, UrlSegment, UrlTree } from '@angular/router';
import { MessageService } from '../message.service';
import { SnackService } from '../notification/snack.service';
import { RequestMapperService } from '../request-mapper.service';
import { JWTService } from './jwt.service';
import { LocalStorageService } from "../local-storage.service";
import { Observable } from "rxjs";
import { AuthenticationService } from './authentication.service';
import { RoleService } from './role.service';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {

	constructor(
		private _router: Router,
		private _jwt: JWTService,
		private _snack: SnackService,
		private _localStorage: LocalStorageService,
		private _auth: AuthenticationService,
		private _roleService: RoleService
	) {
	}

	canActivate(
		route: ActivatedRouteSnapshot
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		route.url.forEach((urlSegment: UrlSegment) => {
			this._localStorage.storeOnAuthSuccessRoute(urlSegment.path);
		});

		if (!this._jwt.hasValidJWT()) {
			this._router.navigateByUrl(
				RequestMapperService.getAbsoluteUrl(RequestMapperService.LOGIN_URL)
			).then(
				success => success ? this._snack.info(MessageService.LOGIN_REQUEST) : this._snack.error(MessageService.GENERIC_FAILURE)
			);
			return false;
		} else {
			if (!this._roleService.isUserPermissionFetched) {
				console.log('Called from auth guard');
				// this._auth.setUserInformation();
			}

			return true;
		}
	}

}
