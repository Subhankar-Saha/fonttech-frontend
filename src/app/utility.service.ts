import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { v4 as uuidv4 } from "uuid";
import { BannerArrayDetails } from "./navigation/interface/banner-home";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class UtilityService {
  constructor(private http: HttpClient) {}

  private jsonUrl = "../../assets/banner.json"; // Path to your JSON file

  public getUniqueUUID(): string {
    return uuidv4();
  }

  public getBanners(): Observable<BannerArrayDetails[]> {
    return this.http.get<BannerArrayDetails[]>(this.jsonUrl);
  }
}
