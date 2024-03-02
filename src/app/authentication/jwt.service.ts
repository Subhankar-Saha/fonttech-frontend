import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { isEmptyString, valueExists } from "bmx-pastebox";
import { ConstantService } from "../constant.service";
import { LocalStorageService } from "../local-storage.service";
import { MessageService } from "../message.service";
import { environment } from "../../environments/environment.local";
import { RoleService } from "./role.service";

@Injectable({
  providedIn: "root",
})
export class JWTService {
  constructor(
    private _localStore: LocalStorageService,
    // private roleService: RoleService
  ) {}

  private readonly _jwtHelper: JwtHelperService = new JwtHelperService();
  private readonly _KEY_033: string = "nkbgUGFbfYHbJh";
  private readonly _KEY_06: string = "nkftrVHdretgvNjug";
  private readonly _KEY_40: string = "bfdtBVNHGYkjbg";
  private readonly _KEY_63: string = "bFTGVFyvgHUIBH";
  private readonly _KEY_25: string = "BHNFGtyhjjiGGGDSRj";
  private readonly _KEY_200: string = "mkioTYHIeredFa";
  private readonly _KEY_AUTH_SUCCESS_ROUTE: string = "dhsnKJHIyhkbYRTFVjki";

  private _jwtToken: string | null = null;
  private _expirationDate: Date | null = null;
  private _isExpired: boolean | null = null;

  private static shatterToken(token: string): string[] | null {
    return token.match(/.{1,67}/g);
  }

  private static prepareSchemeToken(token: string): string {
    return ConstantService.AUTHORIZATION_SCHEME + token;
  }

  private storeChunk(chunk: string, storeKey: string): void {
    this._localStore.store(storeKey, chunk);
  }

  public retrieveChunk(storeKey: string): string {
    const chunk: string = this._localStore.retrieve(storeKey);
    return isEmptyString(chunk) ? "" : chunk;
  }

  private storeJWT(token: string): void {
    const tokenChunks: string[] | null = JWTService.shatterToken(token);
    if (tokenChunks !== null && tokenChunks.length === 6) {
      this.storeChunk(tokenChunks[0], this._KEY_033);
      this.storeChunk(tokenChunks[1], this._KEY_06);
      this.storeChunk(tokenChunks[2], this._KEY_40);
      this.storeChunk(tokenChunks[3], this._KEY_63);
      this.storeChunk(tokenChunks[4], this._KEY_25);
      this.storeChunk(tokenChunks[5], this._KEY_200);
      this.storeChunk("dashboard", this._KEY_AUTH_SUCCESS_ROUTE);
    } else if (tokenChunks !== null && tokenChunks.length === 5) {
      this.storeChunk(tokenChunks[0], this._KEY_033);
      this.storeChunk(tokenChunks[1], this._KEY_06);
      this.storeChunk(tokenChunks[2], this._KEY_40);
      this.storeChunk(tokenChunks[3], this._KEY_63);
      this.storeChunk(tokenChunks[4], this._KEY_25);
      this.storeChunk("dashboard", this._KEY_AUTH_SUCCESS_ROUTE);
    }
  }

  public retrieveJWT(): string {
    if (this._jwtToken !== null) return this._jwtToken;

    this._jwtToken =
      this.retrieveChunk(this._KEY_033) +
      this.retrieveChunk(this._KEY_06) +
      this.retrieveChunk(this._KEY_40) +
      this.retrieveChunk(this._KEY_63) +
      this.retrieveChunk(this._KEY_25) +
      this.retrieveChunk(this._KEY_200);

    return this._jwtToken;
  }

  public prepareJWT(token: string) {
    this._jwtToken = token;
    this._expirationDate = this._jwtHelper.getTokenExpirationDate(token);
    this._isExpired = this._jwtHelper.isTokenExpired(token);
    if (this._isExpired) throw new Error(MessageService.EXPIRED_TOKEN_RECEIVED);
    else this.storeJWT(token);
  }

  public isJWTUnexpired(forceCheck: boolean = false): boolean {
    if (this._expirationDate !== null)
      return this._expirationDate.getTime() > new Date().getTime();
    if (forceCheck) return !this._jwtHelper.isTokenExpired(this.retrieveJWT());

    return false;
  }

  public hasValidJWT(): boolean {
    try {
      const token: string = this.retrieveJWT();
      if (isEmptyString(token)) return false;
      if (this._jwtHelper.isTokenExpired(token)) return false;

      this._jwtToken = token;

      return true;
    } catch (err) {
      return false;
    }
  }

  public destroySession(): void {
    this._jwtToken = null;
    this._expirationDate = null;
    this._isExpired = null;

    this._localStore.removeItems([
      this._KEY_25,
      this._KEY_63,
      this._KEY_40,
      this._KEY_06,
      this._KEY_033,
      this._KEY_200,
      this._KEY_AUTH_SUCCESS_ROUTE,
    ]);
    // this.roleService.allYards = [];
  }

  public injectToken(requiresAuthentication: boolean = true): HttpHeaders {
    let authorizationToken: string;
    let headers: HttpHeaders = new HttpHeaders({
      "Ocp-Apim-Subscription-Key": environment.APIM_SUBSCRIPTION_KEY,
    });

    if (requiresAuthentication) {
      authorizationToken = !this.isJWTUnexpired(true)
        ? ConstantService.EXPIRED_TOKEN
        : JWTService.prepareSchemeToken(this.retrieveJWT());

      if (!valueExists(this._jwtToken))
        authorizationToken = ConstantService.NO_JWT_TOKEN;

      // headers.append('authorization', authorizationToken);
      headers = new HttpHeaders({
        "Ocp-Apim-Subscription-Key": environment.APIM_SUBSCRIPTION_KEY,
        authorization: authorizationToken,
      });
    }

    return headers;
  }
}
