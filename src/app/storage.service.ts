import { Injectable } from "@angular/core";
import { RoleService } from "./authentication/role.service";
import { RequestMapperService } from "./request-mapper.service";
import { TransmissionService } from "./raintree/transmission.service";
import { LocalStorageService } from "./local-storage.service";

@Injectable({
  providedIn: "root",
})
export class StorageService {
  public fetchOrganizationsFlag: boolean = false;
  constructor(
    private _roleService: RoleService,
    private _transmit: TransmissionService,
    private _localStorage: LocalStorageService,
  ) {}
}
