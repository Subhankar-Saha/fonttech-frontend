import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { catchError } from 'rxjs/operators';
import { SnackService } from '../notification/snack.service';
import { HttpErrorHandlerService } from '../raintree/http-error-handler.service';
import { RequestMapperService } from '../request-mapper.service';
import { TransmissionService } from "../raintree/transmission.service";
import { JWTService } from "./jwt.service";
import { JwtResponse } from "./interface/jwt-response";
import { MessageService } from "../message.service";
import { Router } from "@angular/router";
import { LocalStorageService } from "../local-storage.service";
import { RoleService } from './role.service';
import { StorageService } from '../storage.service';

@UntilDestroy()
@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {

	constructor(
		private _http: HttpClient,
		private _httpErrorHandler: HttpErrorHandlerService,
		private _transmit: TransmissionService,
		private _jwt: JWTService,
		private _message: MessageService,
		private _snack: SnackService,
		private _router: Router,
		private _localStorage: LocalStorageService,
		private _roleService: RoleService,
		private _storage: StorageService
	) {
	}

	private async onAuthenticationSuccess(response: JwtResponse): Promise<void> {
		try {
			this._jwt.prepareJWT(response.data.accessToken);
			// TODO: add authority/role access for the user
			// this.setAuthority();
			// await this.setUserInformation();
			this._router.navigateByUrl(
				this._localStorage.retrieveOnAuthSuccessRoute()
			).then(() => {
				this._snack.success(MessageService.LOGIN_SUCCESSFUL);
			});
		} catch (Error: any) {
			this._snack.error(Error.message);
		}
	}

	// public async setUserInformation() {
	// 	try {
	// 		// this._transmit.executeGetRequest(RequestMapperService.PROFILE_URL)
	// 		// .pipe(untilDestroyed(this))
	// 		// .subscribe(
	// 		// (response: any) => {})
	// 		const response = await this._transmit.executeConfigurableGetRequestPromise(RequestMapperService.PROFILE_URL);
	// 		if (response.success) {
	// 			const displayName: string = response.data.displayName;
	// 			this._localStorage.store('CYM_USR', displayName);
	// 			this._localStorage.store('CYM_ROLE', response.data.roleName);
	// 			this._localStorage.store('CYM_ID', response.data.userId);
	// 			this._localStorage.store('CYM_USR_TENANT_ID', response.data.organizationId);
	// 			this._localStorage.store('CYM_USR_FS_ID', response.data.fsId);
	// 			this._localStorage.store('CYM_ROLE_LVL', response.data.roleLevel);
	// 			this._localStorage.store('CYM_USR_ORG_LOGO', response.data.organizationLogo);
	// 			this._roleService.setUserPermissions(response.data);
	// 			await this._storage.fetchOrganizations();
	// 			if (response.data.roleLevel > 0) {
	// 				this._roleService.selectedOrganizationId = response.data.organizationId;
	// 				this._storage.setLocalOrgId();
	// 			} else {
	// 				this._storage.getSelectedOrgId();
	// 			}
	// 			if (response.data.roleLevel > 1) {
	// 				this._roleService.selectedFsId = response.data.fsId;
	// 				this._storage.setLocalFsId();
	// 			} else {
	// 				this._storage.getSelectedFsId();
	// 			}

	// 		}
	// 	}
	// 	catch (Error: any) {
	// 		this._snack.error(Error.message);
	// 	}
	// }

	// public authenticate(
	// 	userName: string,
	// 	password: string,
	// 	onSuccess: () => void = () => {
	// 	},
	// 	onFailure: () => void = () => {
	// 	},
	// 	onComplete: () => void = () => {
	// 	}
	// ) {
	// 	this._transmit
	// 		.executeConfigurablePostRequest(
	// 			RequestMapperService.AUTHENTICATION_URL,
	// 			{ userName, password },
	// 			false
	// 		).pipe(untilDestroyed(this))
	// 		.subscribe({
	// 			next: (response: JwtResponse) => {
	// 				onSuccess();
	// 				this.onAuthenticationSuccess(response);
	// 			},
	// 			error: (error: any) => {
	// 				this._snack.warning(error);
	// 				onFailure();
	// 			},
	// 			complete: () => onComplete()
	// 		})
	// }
}
