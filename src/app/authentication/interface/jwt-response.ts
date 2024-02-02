import {RaintreeResponse} from "../../raintree/interface/raintree-response";

export interface JwtResponse extends RaintreeResponse {
	data: {
		accessToken: string;
		refreshToken: string;
	}
}
