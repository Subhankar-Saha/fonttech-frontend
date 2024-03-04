import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { JWTService } from "../authentication/jwt.service";
import { HttpErrorHandlerService } from "./http-error-handler.service";
import { catchError } from "rxjs/operators";
import { RaintreeResponse } from "./interface/raintree-response";
import { firstValueFrom } from "rxjs";
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
  ) {}

  public executeGetRequest<T extends RaintreeResponse>(
    url: string,
    params?: { [key: string]: any },
    requiresAuthentication: boolean = true,
  ) {
    return this._http
      .get<T>(url, {
        // headers: this._jwt.injectToken(requiresAuthentication),
        params,
      })
      .pipe(catchError(this._httpErrorHandler.intercept));
  }
  public async executeGetRequestPromise<T extends RaintreeResponse>(
    url: string,
    params?: { [key: string]: any },
    requiresAuthentication: boolean = true,
  ) {
    return await firstValueFrom(
      this._http
        .get<T>(url, {
          // headers: this._jwt.injectToken(requiresAuthentication),
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
    return this._http
      .post<RaintreeResponse>(url, payload, {
        // headers: this._jwt.injectToken(requiresAuthentication)
      })
      .pipe(catchError(this._httpErrorHandler.intercept));
  }

  public async executePostRequestPromise<T>(
    url: string,
    payload: any,
    requiresAuthentication: boolean = true,
  ) {
    return await firstValueFrom(
      this._http
        .post<RaintreeResponse>(url, payload, {
          // headers: this._jwt.injectToken(requiresAuthentication)
        })
        .pipe(catchError(this._httpErrorHandler.intercept)),
    );
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
