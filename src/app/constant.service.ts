import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ConstantService {
  public static readonly COULD_NOT_CONNECT_TO_SERVER_ERROR: string =
    "could not connect to our servers";

  /* JWT CONSTANTS */

  public static readonly AUTHORIZATION_HEADER: string = "Authorization";
  public static readonly CONTENT_TYPE_HEADER: string = "Content-Type";
  public static readonly AUTHORIZATION_SCHEME: string = "Bearer ";
  public static readonly EXPIRED_TOKEN: string = "expired-token";
  public static readonly DOMAIN_NOT_ALLOWED: string = "domain-not-allowed";
  public static readonly NO_JWT_TOKEN: string = "no-jwt-token";

  constructor() {}

  public static getTime(selectedDate: number) {
    return Math.floor(new Date(selectedDate).getTime() / 1000);
  }

  public static getEpochTime() {
    return Math.floor(new Date().getTime() / 1000);
  }
}
