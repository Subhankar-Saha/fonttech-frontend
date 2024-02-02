import { Injectable } from '@angular/core';
import { HttpErrorResponse } from "@angular/common/http";
import { ConstantService } from "../constant.service";
import { Observable, throwError } from "rxjs";
import { environment } from 'src/environments/environment.dev';

@Injectable({
	providedIn: 'root'
})
export class HttpErrorHandlerService {

	constructor() {
	}

	private static prepareErrorMessage(
		error: HttpErrorResponse
	): string {

		if (!environment.production) console.trace();

		let errorMessage: string;

		if (error.error instanceof ErrorEvent) errorMessage = error.error.message;
		else if (error.status === 0) errorMessage = ConstantService.COULD_NOT_CONNECT_TO_SERVER_ERROR;
		else errorMessage = error.error.message;

		return errorMessage;
	}

	public intercept(error: HttpErrorResponse): Observable<any> {
		return throwError(
			() => HttpErrorHandlerService.prepareErrorMessage(error)
		);
	}
}
