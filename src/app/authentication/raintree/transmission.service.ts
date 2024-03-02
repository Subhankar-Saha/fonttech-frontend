import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { JWTService } from "../authentication/jwt.service";
import { HttpErrorHandlerService } from "./http-error-handler.service";
import { catchError } from "rxjs/operators";
import { RaintreeResponse } from "./interface/raintree-response";
import { firstValueFrom } from "rxjs";
import { LocalStorageService } from "../local-storage.service";
import { RoleService } from "../authentication/role.service";
import { FormControl } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class TransmissionService {
  public organizationId: string = "";
  public fsId: string = "";
  public userId: string = "";
  public roleLevel: number | undefined;

  constructor(
    private _http: HttpClient,
    private _httpErrorHandler: HttpErrorHandlerService,
    private _jwt: JWTService,
    private _localStorage: LocalStorageService,
    private _roleService: RoleService,
  ) {
    // this.organizationId = this._localStorage.retrieve('CYM_SELECTED_ORG_ID');
    // this.fsId = this._localStorage.retrieve('CYM_SELECTED_FS_ID');
    this.userId = this._localStorage.retrieve("CYM_ID");
    this.roleLevel = this._localStorage.hasKey("CYM_ROLE_LVL")
      ? parseInt(this._localStorage.retrieve("CYM_ROLE_LVL"))
      : undefined;
  }

  public executeGetRequest<T extends RaintreeResponse>(
    url: string,
    params?: { [key: string]: any },
    requiresAuthentication: boolean = true,
  ) {
    if (params) {
      params["organizationId"] = this._localStorage.retrieve(
        "CYM_SELECTED_ORG_ID",
      );
      params["fsId"] = this._localStorage.retrieve("CYM_SELECTED_FS_ID");
      params["activityUserId"] = this.userId;
    } else {
      params = {
        organizationId: this._localStorage.retrieve("CYM_SELECTED_ORG_ID"),
        fsId: this._localStorage.retrieve("CYM_SELECTED_FS_ID"),
        activityUserId: this.userId,
      };
    }

    return this._http
      .get<T>(url, {
        headers: this._jwt.injectToken(requiresAuthentication),
        params,
      })
      .pipe(catchError(this._httpErrorHandler.intercept));
  }
  public async executeGetRequestPromise<T extends RaintreeResponse>(
    url: string,
    params?: { [key: string]: any },
    requiresAuthentication: boolean = true,
  ) {
    if (params) {
      params["organizationId"] = this._localStorage.retrieve(
        "CYM_SELECTED_ORG_ID",
      );
      params["fsId"] = this._localStorage.retrieve("CYM_SELECTED_FS_ID");
      params["activityUserId"] = this.userId;
    } else {
      params = {
        organizationId: this._localStorage.retrieve("CYM_SELECTED_ORG_ID"),
        fsId: this._localStorage.retrieve("CYM_SELECTED_FS_ID"),
        activityUserId: this.userId,
      };
    }
    return await firstValueFrom(
      this._http
        .get<T>(url, {
          headers: this._jwt.injectToken(requiresAuthentication),
          params,
        })
        .pipe(catchError(this._httpErrorHandler.intercept)),
    );
  }
  public executePostRequest<T>(
    url: string,
    payload: any,
    requiresAuthentication: boolean = true,
  ) {
    payload["organizationId"] = this._localStorage.retrieve(
      "CYM_SELECTED_ORG_ID",
    );
    payload["fsId"] = this._localStorage.retrieve("CYM_SELECTED_FS_ID");
    payload["activityUserId"] = this.userId;
    return this._http
      .post<RaintreeResponse>(url, payload, {
        headers: this._jwt.injectToken(requiresAuthentication),
      })
      .pipe(catchError(this._httpErrorHandler.intercept));
  }

  public async executePostRequestPromise<T>(
    url: string,
    payload: any,
    requiresAuthentication: boolean = true,
  ) {
    payload["organizationId"] = this._localStorage.retrieve(
      "CYM_SELECTED_ORG_ID",
    );
    payload["fsId"] = this._localStorage.retrieve("CYM_SELECTED_FS_ID");
    payload["activityUserId"] = this.userId;
    return await firstValueFrom(
      this._http
        .post<RaintreeResponse>(url, payload, {
          headers: this._jwt.injectToken(requiresAuthentication),
        })
        .pipe(catchError(this._httpErrorHandler.intercept)),
    );
  }

  public executePatchRequest<T>(
    url: string,
    payload: any,
    requiresAuthentication: boolean = true,
  ) {
    payload["organizationId"] = this._localStorage.retrieve(
      "CYM_SELECTED_ORG_ID",
    );
    payload["fsId"] = this._localStorage.retrieve("CYM_SELECTED_FS_ID");
    payload["activityUserId"] = this.userId;
    console.log(payload);

    return this._http
      .patch<RaintreeResponse>(url, payload, {
        headers: this._jwt.injectToken(requiresAuthentication),
      })
      .pipe(catchError(this._httpErrorHandler.intercept));
  }

  public executePatchRequestFormData<T>(
    url: string,
    payload: any,
    requiresAuthentication: boolean = true,
  ) {
    let obj: any = {};
    obj["organizationId"] = this._localStorage.retrieve("CYM_SELECTED_ORG_ID");
    obj["fsId"] = this._localStorage.retrieve("CYM_SELECTED_FS_ID");
    obj["activityUserId"] = this.userId;
    const params = new URLSearchParams(obj).toString();
    const urlWithQueryParams = url + "?" + params;
    console.log(urlWithQueryParams);
    return this._http
      .patch<RaintreeResponse>(urlWithQueryParams, payload, {
        headers: this._jwt.injectToken(requiresAuthentication),
      })
      .pipe(catchError(this._httpErrorHandler.intercept));
  }

  public executeDeleteRequest<T>(
    url: string,
    params?: { [key: string]: any },
    requiresAuthentication: boolean = true,
  ) {
    if (params) {
      params["organizationId"] = this._localStorage.retrieve(
        "CYM_SELECTED_ORG_ID",
      );
      params["fsId"] = this._localStorage.retrieve("CYM_SELECTED_FS_ID");
      params["activityUserId"] = this.userId;
    } else {
      params = {
        organizationId: this._localStorage.retrieve("CYM_SELECTED_ORG_ID"),
        fsId: this._localStorage.retrieve("CYM_SELECTED_FS_ID"),
        activityUserId: this.userId,
      };
    }
    return this._http
      .delete<RaintreeResponse>(url, {
        headers: this._jwt.injectToken(requiresAuthentication),
        params,
      })
      .pipe(catchError(this._httpErrorHandler.intercept));
  }

  public async executeConfigurableGetRequestPromise<T extends RaintreeResponse>(
    url: string,
    params?: { [key: string]: any },
    requiresAuthentication: boolean = true,
  ) {
    if (params) {
      params["activityUserId"] = this.userId;
    } else {
      params = {
        activityUserId: this.userId,
      };
    }
    return await firstValueFrom(
      this._http
        .get<T>(url, {
          headers: this._jwt.injectToken(requiresAuthentication),
          params,
        })
        .pipe(catchError(this._httpErrorHandler.intercept)),
    );
  }

  public executeConfigurablePostRequest<T>(
    url: string,
    payload: any,
    requiresAuthentication: boolean = true,
  ) {
    payload["activityUserId"] = this.userId;
    return this._http
      .post<RaintreeResponse>(url, payload, {
        headers: this._jwt.injectToken(requiresAuthentication),
      })
      .pipe(catchError(this._httpErrorHandler.intercept));
  }

  public noWhitespaceValidator(control: FormControl) {
    return (control.value || "").trim().length ? null : { whitespace: true };
  }

  public alphanumericValidator(control: FormControl) {
    const pattern = /^[a-zA-Z0-9]+$/;
    if (control.value && !pattern.test(control.value)) {
      return { invalidInput: true };
    }
    return null;
  }
}
