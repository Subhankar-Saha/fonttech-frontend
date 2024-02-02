import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalStorageService } from '../local-storage.service';

@Injectable({
	providedIn: 'root'
})
export class RoleService {

	public $ispriorityStateToggle: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

	public isUserPermissionFetched: Observable<boolean> | undefined;

}
