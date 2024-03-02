import { Injectable } from "@angular/core";
import { HotToastService } from "@ngneat/hot-toast";

@Injectable({
  providedIn: "root",
})
export class SnackService {
  constructor(private _toast: HotToastService) {}

  public info(msg: string): void {
    this._toast.info(msg, {
      dismissible: true,
    });
  }

  public loading(msg: string): void {
    this._toast.loading(msg, {
      dismissible: true,
    });
  }

  public success(msg: string): void {
    this._toast.success(msg, {
      dismissible: true,
    });
  }

  public warning(msg: string): void {
    this._toast.warning(msg, {
      dismissible: false,
    });
  }

  public error(msg: string): void {
    this._toast.error(msg, {
      dismissible: false,
    });
  }

  public dismiss(): void {
    this._toast.close();
  }
}
