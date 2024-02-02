import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class MessageService {

	public static readonly LOGIN_REQUEST: string = 'You need to login first!';
	public static readonly GENERIC_FAILURE: string = 'Something went wrong!';
	public static readonly GENERIC_FAILURE_REQUEST_INCOMPLETE: string = 'Something went wrong. We could not complete the request.';
	public static readonly LOGIN_SUCCESSFUL: string = 'Logged in successfully!';
	public static readonly LOGOUT_SUCCESSFUL: string = 'Logged out successfully!';
	public static readonly WRONG_CREDENTIAL_ERROR: string = 'Please check your credentials!';
	public static readonly EXPIRED_TOKEN_RECEIVED: string = 'An expired session was received. You may need to login again.'

	constructor() { }
}
