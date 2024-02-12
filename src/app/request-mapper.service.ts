import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.local';

@Injectable({
	providedIn: 'root'
})
export class RequestMapperService {

	public static readonly BASE_RELATIVE_URL = '';
	public static readonly ROOT_URL: string = '/';
	public static readonly LOGIN_URL: string = 'login';
	public static readonly FORGET_PASSWORD_URL: string = 'forget-password';
	public static readonly DASHBOARD_URL: string = 'dashboard';
	public static readonly HOME: string = 'home';
	public static readonly REGISTRATION_URL: string = 'register';
	public static readonly AUTH_URL: string = 'account';
	public static readonly FRANCHISE_URL: string = 'franchise';
	public static readonly CONTACT_URL: string = 'contact';




	public static readonly AUTHENTICATION_URL: string = environment.SERVER_ENDPOINT + 'auth/login';
	public static readonly SAVE_FRANCHISE_REQ_DETAILS: string = environment.SERVER_ENDPOINT + 'franchise';


	public static getAbsoluteUrl(url: string): string {
		return RequestMapperService.ROOT_URL + url;
	}

	constructor() { }
}
